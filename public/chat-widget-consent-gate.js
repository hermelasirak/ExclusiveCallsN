/**
 * Holds the eCalls chat widget auto-open timer until a cookie choice exists.
 * The launcher button still works. The widget reads chatbot.autoOpenTimeout
 * from api.ecalls.ai and schedules setTimeout(open, seconds * 1000).
 * Until ecalls_cookie_consent is accepted or rejected, that delay is parked
 * and restarted for the original number of seconds after the choice.
 */
(function () {
  var STORAGE_KEY = "ecalls_cookie_consent";
  var HOLD_SECONDS = 900001;
  var HOLD_MS = HOLD_SECONDS * 1000;
  var HOLD_ID = 900001001;
  var CHATBOT_URL = /api\.ecalls\.ai\/api\/v1\/chatbot\//;

  var nativeSetTimeout = window.setTimeout.bind(window);
  var nativeClearTimeout = window.clearTimeout.bind(window);
  var originalMs = null;
  var parked = null;

  function choice() {
    try {
      var value = localStorage.getItem(STORAGE_KEY);
      return value === "accepted" || value === "rejected" ? value : null;
    } catch {
      return null;
    }
  }

  function release() {
    if (!choice() || !parked || parked.cleared || parked.fired) return;
    parked.fired = true;
    nativeSetTimeout(parked.fn, originalMs == null ? 0 : originalMs);
  }

  window.setTimeout = function (fn, delay) {
    if (originalMs != null && delay === HOLD_MS && typeof fn === "function") {
      if (parked && !parked.fired && !parked.cleared) return HOLD_ID;
      if (choice()) return nativeSetTimeout(fn, originalMs);
      parked = { fn: fn, cleared: false, fired: false };
      return HOLD_ID;
    }
    return nativeSetTimeout.apply(window, arguments);
  };

  window.clearTimeout = function (id) {
    if (id === HOLD_ID && parked && !parked.fired) {
      parked.cleared = true;
      return;
    }
    return nativeClearTimeout(id);
  };

  try {
    var nativeSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function (key, value) {
      nativeSetItem.call(this, key, value);
      if (key === STORAGE_KEY) release();
    };
  } catch {
    /* storage prototype may be sealed */
  }

  window.addEventListener("storage", function (event) {
    if (event.key === STORAGE_KEY) release();
  });
  window.addEventListener("ecalls:cookie-consent", release);

  function parkAutoOpen(data) {
    if (!data || !data.chatbot || choice()) return data;
    var timeout = data.chatbot.autoOpenTimeout;
    if (typeof timeout !== "number" || timeout <= 0 || timeout === HOLD_SECONDS) {
      return data;
    }
    if (originalMs == null) originalMs = timeout * 1000;
    data.chatbot.autoOpenTimeout = HOLD_SECONDS;
    return data;
  }

  if (typeof window.fetch === "function") {
    var nativeFetch = window.fetch.bind(window);
    window.fetch = function (input, init) {
      var url = "";
      if (typeof input === "string") url = input;
      else if (input && typeof input.url === "string") url = input.url;

      var response = nativeFetch(input, init);
      if (!CHATBOT_URL.test(url) || choice()) return response;

      return response.then(function (res) {
        return res
          .clone()
          .json()
          .then(function (json) {
            try {
              parkAutoOpen(json);
            } catch {
              return res;
            }
            var headers = new Headers(res.headers);
            headers.delete("content-length");
            headers.delete("content-encoding");
            return new Response(JSON.stringify(json), {
              status: res.status,
              statusText: res.statusText,
              headers: headers,
            });
          })
          .catch(function () {
            return res;
          });
      });
    };
  }
})();
