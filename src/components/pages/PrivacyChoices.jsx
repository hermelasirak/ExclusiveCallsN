import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../layouts/Container";
import Seo from "../Seo";
import { rejectConsent } from "@/lib/cookieConsent";

const PrivacyChoices = () => {
  useEffect(() => {
    rejectConsent();
  }, []);

  return (
    <>
      <Seo
        title="Your Privacy Choices | Exclusive Calls"
        description="Opt out of the sale or sharing of personal information and turn off advertising cookies on Exclusive Calls."
        path="/privacy-choices"
        robots="noindex, follow"
      />
      <Container className="h-full py-24 lg:py-36">
        <h1 className="text-2xl font-bold py-6 xl:py-16">
          Your Privacy Choices
        </h1>
        <p>
          You have opted out of the sale or sharing of personal information for
          cross-context advertising on this browser. Advertising cookies are
          off, the same as choosing Reject on the cookie banner.
        </p>
        <p className="mt-4">
          This choice is saved in this browser until you clear site data. You
          can review it later with Cookie settings in the footer. Analytics
          cookies that help us understand site traffic stay on.
        </p>
        <p className="mt-4">
          If your browser sends Global Privacy Control, we treat that signal
          as this same opt-out.
        </p>
        <p className="mt-4">
          To ask for access, correction, or deletion of personal information,
          email{" "}
          <a
            href="mailto:info@exclusivecalls.com"
            className="text-[#ed8015] hover:underline"
          >
            info@exclusivecalls.com
          </a>{" "}
          or call +1 (888) 484-3515. Amin Empire Inc., 1309 Coffeen Ave Suite
          2397, Sheridan, WY 82801.
        </p>
        <p className="mt-4 text-sm text-slate-600">
          This page describes how the site applies your choice. It is not legal
          advice.
        </p>
        <p className="mt-6">
          <Link to="/privacypolicy" className="text-[#ed8015] hover:underline">
            Read the Privacy Policy
          </Link>
        </p>
      </Container>
    </>
  );
};

export default PrivacyChoices;
