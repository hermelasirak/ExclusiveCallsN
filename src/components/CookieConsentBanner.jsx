import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  acceptConsent,
  CONSENT_CHANGE_EVENT,
  COOKIE_SETTINGS_EVENT,
  getChoice,
  rejectConsent,
  syncConsentFromStorage,
} from "@/lib/cookieConsent";

const actionButtonClass =
  "inline-flex h-11 min-w-[7.5rem] flex-1 items-center justify-center rounded-full border border-[#ed8015] bg-white px-5 text-[14px] font-semibold text-[#0b1630] transition-colors hover:bg-[#ed8015] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed8015] focus-visible:ring-offset-2 sm:flex-none";

export default function CookieConsentBanner() {
  const [choice, setChoice] = useState(getChoice);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    syncConsentFromStorage();

    const refresh = () => {
      setChoice(getChoice());
      setSettingsOpen(false);
    };
    const open = () => setSettingsOpen(true);

    queueMicrotask(refresh);
    window.addEventListener(COOKIE_SETTINGS_EVENT, open);
    window.addEventListener(CONSENT_CHANGE_EVENT, refresh);
    return () => {
      window.removeEventListener(COOKIE_SETTINGS_EVENT, open);
      window.removeEventListener(CONSENT_CHANGE_EVENT, refresh);
    };
  }, []);

  const visible = settingsOpen || !choice;
  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="ecalls-cookie-title"
      aria-describedby="ecalls-cookie-copy"
      className="fixed inset-x-0 bottom-0 z-[10000] p-3 sm:p-4"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-4 rounded-2xl border border-black/[0.06] bg-white/95 p-4 shadow-[0_18px_50px_-20px_rgba(11,22,48,0.35)] ring-1 ring-black/[0.04] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5">
        <div className="min-w-0">
          <p
            id="ecalls-cookie-title"
            className="text-[15px] font-semibold tracking-[-0.01em] text-[#0b1630]"
          >
            Cookies
          </p>
          <p
            id="ecalls-cookie-copy"
            className="mt-1 text-[13.5px] leading-relaxed text-[#5c6578]"
          >
            We use essential and analytics cookies to run the site. Advertising
            cookies stay off unless you accept.{" "}
            <Link
              to="/privacypolicy"
              className="font-medium text-[#ed8015] underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            className={actionButtonClass}
            onClick={() => {
              rejectConsent();
            }}
          >
            Reject
          </button>
          <button
            type="button"
            className={actionButtonClass}
            onClick={() => {
              acceptConsent();
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
