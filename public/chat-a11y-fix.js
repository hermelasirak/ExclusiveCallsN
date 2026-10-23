/*!
 * Exclusive Calls chat widget accessibility fix (WCAG 2.1 AA)
 * Put this file at /public/chat-a11y-fix.js and load it right AFTER the
 * chatbot.ecalls.ai/embed.js <script> tag in index.html.
 *
 * What it does (works whenever the widget mounts, via MutationObserver):
 *  1. Stops the automatic pop-up (all screen sizes by default). The chat
 *     still opens normally when a visitor clicks or presses the chat button.
 *  2. Adds a visible, labelled "Close chat" button inside the chat panel
 *     whenever the widget does not show its own close button (the phone
 *     full-screen view and the form view have none).
 *  3. Escape closes the chat and returns focus to the chat button.
 *  4. Chat button: aria-label "Open chat"/"Close chat", aria-expanded,
 *     aria-controls; its images get alt="" (no more "Profile avatar").
 *  5. When the panel is closed it gets inert + aria-hidden, so nothing
 *     inside it can be reached with Tab or a screen reader.
 *  6. Remembers a dismissal for the browser session (sessionStorage).
 *  7. On phones (full-screen chat) Tab stays inside the open chat.
 *  8. Names the icon-only "Send message" button and the message box, and
 *     hides the empty header heading when no display name is set.
 *  9. Puts the widget in a labelled "Chat" landmark and gives the panel
 *     role="dialog" with a name.
 */
(function () {
  "use strict";
  if (window.__ecallsChatA11yFix) return;
  window.__ecallsChatA11yFix = true;

  // ---- Settings -----------------------------------------------------------
  // false = never pop open by itself (recommended).
  // true  = allow the widget's own auto-open on screens 768px and wider,
  //         at most once per browser session, and never after a dismissal.
  var ALLOW_AUTO_OPEN_ON_DESKTOP = false;
  var DISMISS_KEY = "ecallsChatDismissed";
  var AUTO_KEY = "ecallsChatAutoOpened";
  var PANEL_ID = "ecalls-chat-panel";

  // ---- Real selectors used by chatbot.ecalls.ai/chat-widget.umd.js --------
  var HOST_ID = "chat-widget-container";              // light-DOM host (open shadow root)
  var SEL_WRAP = '[class*="chatbot-module__containers"]';
  var OPEN_CLASS = "chatbot-module__showChatbot";      // on the wrapper while open
  var SEL_TOGGLER = "#chatbot-toggler";
  var SEL_BANNER = '[class*="chatbot-module__chatbotBannerButton"]';
  var SEL_POPUP = '[class*="chatbot-module__chatbotPopup"]';
  var SEL_OWN_CLOSE = '[class*="chatbot-module__chatHeaderCloseButton"]';
  var SEL_SEND = "#send-message";
  var SEL_INPUT = '[class*="chatbot-module__messageInputChatbot"]';
  var SEL_TITLE = '[class*="chatbot-module__logoText"]';
  var SEL_VMENU = '[class*="chatbot-module__videoControlsMenu___"]';
  var VMENU_OPEN = "chatbot-module__videoControlsMenuOpen";
  var OUR_CLOSE_CLASS = "ecx-a11y-close";

  var lastUserToggle = 0;
  var wasOpen = false;
  var focusPanelOnOpen = false;
  var hooked = null;

  function ss(get, key, val) {
    try {
      if (get) return window.sessionStorage.getItem(key);
      window.sessionStorage.setItem(key, val);
    } catch (e) { return null; }
  }
  // A trusted visitor action, or the "Chat with us" loader saying the visitor asked.
  function userRecent() {
    var t = Math.max(lastUserToggle, window.__ecallsChatUserIntent || 0);
    return Date.now() - t < 1500;
  }
  function root() {
    var h = document.getElementById(HOST_ID);
    return h && h.shadowRoot ? h.shadowRoot : null;
  }
  function isOpen(sr) {
    var w = sr && sr.querySelector(SEL_WRAP);
    return !!(w && String(w.className).indexOf(OPEN_CLASS) !== -1);
  }
  function setAttr(el, name, val) {
    if (!el) return;
    if (val === null) { if (el.hasAttribute(name)) el.removeAttribute(name); }
    else if (el.getAttribute(name) !== val) el.setAttribute(name, val);
  }
  function visible(el) {
    if (!el) return false;
    var r = el.getBoundingClientRect();
    var cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.display !== "none" && parseFloat(cs.opacity) > 0.1;
  }

  // Closing goes through the widget's own toggle so its React state stays in sync.
  function closeChat(returnFocus, remember) {
    var sr = root();
    if (!sr || !isOpen(sr)) return;
    var t = sr.querySelector(SEL_TOGGLER);
    if (t) t.click();
    if (remember) ss(false, DISMISS_KEY, "1");
    if (returnFocus) {
      // The widget hides its button for a moment after closing (it re-checks
      // the avatar image), so keep returning focus until it sticks.
      var tries = 0, stable = 0;
      (function refocus() {
        var s = root(), tg = s && s.querySelector(SEL_TOGGLER);
        if (tg && !isOpen(s) && visible(tg)) {
          if (s.activeElement === tg) { if (++stable >= 3) return; }
          else { stable = 0; tg.focus(); }
        }
        if (++tries < 60) setTimeout(refocus, 50);
      })();
    }
  }

  function injectStyle(sr) {
    if (sr.getElementById("ecx-a11y-style")) return;
    var st = document.createElement("style");
    st.id = "ecx-a11y-style";
    st.textContent =
      "." + OUR_CLOSE_CLASS + "{position:absolute;top:10px;left:10px;z-index:2147483647;" +
      "width:44px;height:44px;display:flex;align-items:center;justify-content:center;" +
      "border-radius:50%;border:2px solid #ffffff;background:#1f2937;color:#ffffff;" +
      "cursor:pointer;padding:0;box-shadow:0 2px 8px rgba(0,0,0,.35);}" +
      "." + OUR_CLOSE_CLASS + ":hover{background:#000000;}" +
      "." + OUR_CLOSE_CLASS + ":focus-visible{outline:3px solid #ffffff;outline-offset:2px;" +
      "box-shadow:0 0 0 6px #1f2937;}" +
      "." + OUR_CLOSE_CLASS + " svg{width:22px;height:22px;pointer-events:none;}" +
      SEL_TOGGLER + ":focus-visible{outline:3px solid #ffffff!important;outline-offset:2px;" +
      "box-shadow:0 0 0 6px #1f2937!important;}";
    sr.appendChild(st);
  }

  function ensureCloseButton(sr, pop, open) {
    var ours = pop.querySelector("." + OUR_CLOSE_CLASS);
    var own = sr.querySelector(SEL_OWN_CLOSE);
    var needOurs = open && !(own && visible(own));
    if (!needOurs) { if (ours) ours.remove(); return; }
    if (ours) return;
    var b = document.createElement("button");
    b.type = "button";
    b.className = OUR_CLOSE_CLASS;
    b.setAttribute("aria-label", "Close chat");
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" ' +
      'stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    b.addEventListener("click", function (e) {
      e.preventDefault(); e.stopPropagation();
      closeChat(true, true);
    });
    pop.insertBefore(b, pop.firstChild);
  }

  function apply() {
    var sr = root();
    if (!sr) return;
    hook(sr);
    injectStyle(sr);
    var host = sr.host;
    setAttr(host, "role", "region");
    setAttr(host, "aria-label", "Chat");

    var open = isOpen(sr);
    var t = sr.querySelector(SEL_TOGGLER);
    var pop = sr.querySelector(SEL_POPUP);

    // Opened without a click or key press from the visitor = auto-open.
    if (open && !wasOpen && !userRecent()) {
      var wide = window.matchMedia("(min-width: 768px)").matches;
      var allow = ALLOW_AUTO_OPEN_ON_DESKTOP && wide && !ss(true, DISMISS_KEY) && !ss(true, AUTO_KEY);
      if (!allow) { wasOpen = true; closeChat(false, false); return; }
      ss(false, AUTO_KEY, "1");
    }
    if (open !== wasOpen) {
      if (!open && wasOpen && userRecent()) ss(false, DISMISS_KEY, "1");
      wasOpen = open;
    }

    if (t) {
      setAttr(t, "type", "button");
      setAttr(t, "aria-label", open ? "Close chat" : "Open chat");
      setAttr(t, "aria-expanded", open ? "true" : "false");
      setAttr(t, "aria-controls", PANEL_ID);
      var imgs = t.querySelectorAll("img");
      for (var i = 0; i < imgs.length; i++) setAttr(imgs[i], "alt", "");
    }
    var banner = sr.querySelector(SEL_BANNER);
    if (banner) {
      setAttr(banner, "aria-expanded", open ? "true" : "false");
      setAttr(banner, "aria-controls", PANEL_ID);
      if (!open && !visible(banner)) { setAttr(banner, "tabindex", "-1"); setAttr(banner, "aria-hidden", "true"); }
      else { setAttr(banner, "tabindex", null); setAttr(banner, "aria-hidden", null); }
    }
    if (pop) {
      setAttr(pop, "id", PANEL_ID);
      setAttr(pop, "role", "dialog");
      setAttr(pop, "aria-label", "Chat with Exclusive Calls");
      if (open) {
        setAttr(pop, "inert", null);
        setAttr(pop, "aria-hidden", null);
      } else {
        setAttr(pop, "inert", "");
        setAttr(pop, "aria-hidden", "true");
      }
      ensureCloseButton(sr, pop, open);
      // Icon-only send button and placeholder-only message box get real names.
      var sends = sr.querySelectorAll(SEL_SEND);
      for (var j = 0; j < sends.length; j++) {
        if (!(sends[j].textContent || "").trim()) setAttr(sends[j], "aria-label", "Send message");
        else setAttr(sends[j], "aria-label", null);
      }
      var inputs = sr.querySelectorAll(SEL_INPUT);
      for (var k = 0; k < inputs.length; k++) {
        setAttr(inputs[k], "aria-label", inputs[k].getAttribute("placeholder") || "Type a message");
      }
      // Video menu buttons are invisible (opacity 0) until the menu opens:
      // keep them out of the Tab order while it is closed.
      var menus = sr.querySelectorAll(SEL_VMENU);
      for (var q = 0; q < menus.length; q++) {
        var mOpen = String(menus[q].className).indexOf(VMENU_OPEN) !== -1;
        setAttr(menus[q], "inert", mOpen ? null : "");
      }
      // The header title is an empty <h2> when no display name is set.
      var titles = sr.querySelectorAll(SEL_TITLE);
      for (var m = 0; m < titles.length; m++) {
        var empty = !(titles[m].textContent || "").trim();
        setAttr(titles[m], "role", empty ? "none" : null);
        setAttr(titles[m], "aria-hidden", empty ? "true" : null);
      }
      if (open && window.__ecallsChatUserIntent && !window.__ecallsChatFocused) {
        window.__ecallsChatFocused = true; focusPanelOnOpen = true;
      }
      if (open && focusPanelOnOpen) {
        focusPanelOnOpen = false;
        setTimeout(function () {
          var s = root(); if (!s || !isOpen(s)) return;
          var p = s.querySelector(SEL_POPUP);
          var target = p && (p.querySelector("." + OUR_CLOSE_CLASS) || s.querySelector(SEL_OWN_CLOSE) ||
            p.querySelector("input,textarea,select,button"));
          if (target) target.focus();
        }, 120);
      }
    }
  }

  var scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    var run = function () { scheduled = false; apply(); };
    if (window.queueMicrotask) queueMicrotask(run); else Promise.resolve().then(run);
  }

  function hook(sr) {
    if (hooked === sr) return;
    hooked = sr;
    // Visitor-initiated toggles (mouse, touch, Enter, Space all fire a trusted click).
    sr.addEventListener("click", function (e) {
      if (!e.isTrusted) return;
      var el = e.target && e.target.closest ? e.target.closest(SEL_TOGGLER + "," + SEL_BANNER) : null;
      if (el) {
        lastUserToggle = Date.now();
        if (!isOpen(sr)) focusPanelOnOpen = true;
      }
    }, true);
    new MutationObserver(schedule).observe(sr, {
      subtree: true, childList: true, attributes: true,
      attributeFilter: ["class", "style", "alt", "aria-label", "aria-expanded", "inert", "aria-hidden", "id", "role", "placeholder"],
      characterData: true
    });
  }

  // Escape closes the chat (keydown from inside the shadow DOM reaches document).
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape" && e.key !== "Esc") return;
    var sr = root();
    if (!sr || !isOpen(sr)) return;
    e.preventDefault();
    e.stopPropagation();
    lastUserToggle = Date.now();
    closeChat(true, true);
  }, true);

  // Phones: the open chat covers the whole screen, so keep Tab inside it
  // (otherwise focus moves to page content hidden behind the panel).
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Tab") return;
    var sr = root();
    if (!sr || !isOpen(sr) || !window.matchMedia("(max-width: 520px)").matches) return;
    var pop = sr.querySelector(SEL_POPUP);
    if (!pop) return;
    var list = Array.prototype.filter.call(
      pop.querySelectorAll('a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])'),
      function (el) { return !el.disabled && el.tabIndex >= 0 && visible(el); });
    if (!list.length) return;
    var first = list[0], last = list[list.length - 1], active = sr.activeElement;
    if (!active || !pop.contains(active)) { e.preventDefault(); first.focus(); return; }
    if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
  }, true);

  // Wait for the host / shadow root, then keep watching (also handles re-mounts).
  new MutationObserver(schedule).observe(document, { childList: true, subtree: true });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", schedule);
  schedule();
  var polls = 0;
  var iv = setInterval(function () { apply(); if (++polls > 60) clearInterval(iv); }, 500);
})();
