export const CONSENT_STORAGE_KEY = "ecalls_cookie_consent";
export const COOKIE_SETTINGS_EVENT = "ecalls:cookie-settings";
export const CONSENT_CHANGE_EVENT = "ecalls:cookie-consent";
export const GPC_COOKIE_NAME = "ecalls_gpc";

export const ACCEPTED = "accepted";
export const REJECTED = "rejected";

function windowOrNull() {
  return typeof window === "undefined" ? null : window;
}

export function hasGlobalPrivacyControl() {
  const win = windowOrNull();
  if (!win) return false;

  try {
    if (win.navigator && win.navigator.globalPrivacyControl === true) return true;
  } catch {
    /* navigator may throw in locked-down embeds */
  }

  try {
    const cookie = win.document?.cookie || "";
    const pattern = new RegExp(`(?:^|;\\s*)${GPC_COOKIE_NAME}=1(?:;|$)`);
    if (pattern.test(cookie)) return true;
  } catch {
    /* ignore */
  }

  return false;
}

export function getChoice() {
  const win = windowOrNull();
  if (!win) return null;
  try {
    const value = win.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === ACCEPTED || value === REJECTED) return value;
  } catch {
    /* storage blocked */
  }
  return null;
}

function writeChoice(choice) {
  const win = windowOrNull();
  if (!win) return;
  try {
    win.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    /* storage blocked */
  }
}

function notifyChange(choice) {
  const win = windowOrNull();
  if (!win) return;
  win.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: { choice } }));
}

export function updateAdConsent(granted) {
  const win = windowOrNull();
  if (!win) return;
  const state = granted ? "granted" : "denied";
  const payload = {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  };

  if (typeof win.gtag === "function") {
    win.gtag("consent", "update", payload);
    return;
  }

  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push(["consent", "update", payload]);
}

/**
 * Advertising consent is granted only after an explicit Accept, and never
 * while Global Privacy Control (or the mirrored Sec-GPC cookie) is on.
 */
export function adsGranted(choice = getChoice()) {
  return choice === ACCEPTED && !hasGlobalPrivacyControl();
}

export function acceptConsent() {
  if (hasGlobalPrivacyControl()) {
    rejectConsent();
    return;
  }
  writeChoice(ACCEPTED);
  updateAdConsent(true);
  notifyChange(ACCEPTED);
}

export function rejectConsent() {
  writeChoice(REJECTED);
  updateAdConsent(false);
  notifyChange(REJECTED);
}

export function openCookieSettings() {
  const win = windowOrNull();
  if (!win) return;
  win.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}

/** Apply a stored choice (and GPC) once the page script can call gtag. */
export function syncConsentFromStorage() {
  if (hasGlobalPrivacyControl() && getChoice() !== REJECTED) {
    writeChoice(REJECTED);
  }
  updateAdConsent(adsGranted());
}
