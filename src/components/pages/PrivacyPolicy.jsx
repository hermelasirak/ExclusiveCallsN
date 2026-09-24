import React from 'react'
import { Link } from "react-router-dom";
import Container from '../layouts/Container'
import Seo from "../Seo";

const PrivacyPolicy = () => {
  return (
    <>
        <Seo
          title="Privacy Policy | Exclusive Calls"
          description="Learn how Exclusive Calls collects, uses, and protects your information across our website, services, and communications."
          path="/privacypolicy"
          robots="noindex, follow"
        />
        <Container className='h-full py-24 lg:py-36'>
            <h1 className="text-2xl font-bold py-6 xl:py-16">
            Privacy Policy for Exclusive Calls
            </h1>
            <p>
            Exclusive Calls values your privacy. This
            Privacy Policy explains how we collect, use, share, and protect your
            information when you interact with our website, services, or
            communications, including text messages and phone calls.
            </p>
            <h2 className="text-xl font-semibold mt-6">
            1. Information We Collect
            </h2>
            <h3 className="font-semibold mt-4">1.1 Personal Information</h3>
            <ul className="list-disc ml-6">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Billing information</li>
            <li>
                Other details provided through forms, sign-ups, or communications
            </li>
            </ul>
            <h3 className="font-semibold mt-4">1.2 Non-Personal Information</h3>
            <ul className="list-disc ml-6">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited and interactions on our website</li>
            </ul>
            <h2 className="text-xl font-semibold mt-6">
            2. How We Use Your Information
            </h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc ml-6">
            <li>To provide and improve our services</li>
            <li>
                To communicate with you (e.g., appointment reminders, promotional
                offers)
            </li>
            <li>To send text messages or calls with your consent</li>
            <li>To process transactions and payments</li>
            <li>To ensure compliance with legal requirements</li>
            </ul>
            <h2 className="text-xl font-semibold mt-6">
            3. How We Share Your Information
            </h2>
            <p>
            We do not sell your personal information for money, and we do not
            rent it. Advertising cookies, if you accept them, can count as
            "sharing" under California law. See section 9 for how to opt out.
            We may share your information:
            </p>
            <ul className="list-disc ml-6">
            <li>
                With trusted service providers for operational purposes (e.g.,
                Twilio for messaging services)
            </li>
            <li>To comply with legal obligations or enforce our terms</li>
            <li>To protect against fraud or unauthorized access</li>
            </ul>
            <h2 className="text-xl font-semibold mt-6">4. Your Choices</h2>
            <ul className="list-disc ml-6">
            <li>
                <strong>Opt-Out of Communications:</strong> You can opt out of
                receiving text messages or calls by texting "STOP" or contacting us
                directly.
            </li>
            <li>
                <strong>Access and Update Your Information:</strong> Contact us to
                review or update your information.
            </li>
            <li>
                <strong>Cookies:</strong> On your first visit, choose Accept or
                Reject for advertising cookies. That choice is saved in this
                browser until you clear site data. Change it anytime with Cookie
                settings in the footer, or use your browser settings.
            </li>
            </ul>
            <h2 className="text-xl font-semibold mt-6">5. Data Security</h2>
            <p>
            We implement industry-standard security measures to protect your
            information. However, no system is completely secure, and we cannot
            guarantee absolute data security.
            </p>
            <h2 className="text-xl font-semibold mt-6">6. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc ml-6">
            <li>
                <strong>Access:</strong> Request a copy of the personal information
                we hold about you.
            </li>
            <li>
                <strong>Correction:</strong> Request corrections to inaccurate or
                incomplete information.
            </li>
            <li>
                <strong>Deletion:</strong> Request the deletion of your personal
                information.
            </li>
            <li>
                <strong>Data Portability:</strong> Request your information in a
                portable format.
            </li>
            </ul>
            <p>
            To exercise your rights, please contact us at info@exclusivecalls.com.
            </p>
            <h2 className="text-xl font-semibold mt-6">7. Third-Party Services</h2>
            <p>
            We may use third-party services (e.g., analytics tools, payment
            processors) that have their own privacy policies. We encourage you to
            review their policies when using their services.
            </p>
            <h2 className="text-xl font-semibold mt-6">
            8. Changes to This Policy
            </h2>
            <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with a revised "Effective Date." Continued use of
            our services after changes indicates your acceptance.
            </p>
            <h2 className="text-xl font-semibold mt-6">
            9. California Privacy Choices (CCPA/CPRA)
            </h2>
            <p>
            If you are a California resident, the California Consumer Privacy
            Act, as amended by the CPRA, lets you know, delete, and correct
            personal information, and opt out of the "sale" or "sharing" of
            personal information for cross-context behavioral advertising.
            </p>
            <p className="mt-4">
            Exclusive Calls, operated by Amin Empire Inc., does not sell
            personal information for money. If you Accept advertising cookies,
            advertising partners may receive identifiers such as a cookie ID
            and IP address to measure or personalize ads. Under California law
            that can count as "sharing."
            </p>
            <p className="mt-4">You can opt out at any time:</p>
            <ul className="list-disc ml-6">
            <li>
                Choose Reject on the cookie banner, or open Cookie settings in
                the footer and choose Reject.
            </li>
            <li>
                Use{" "}
                <Link to="/privacy-choices" className="text-[#ed8015] hover:underline">
                Do Not Sell or Share My Personal Information
                </Link>
                . That page turns advertising cookies off.
            </li>
            <li>
                If your browser sends Global Privacy Control (the Sec-GPC
                header or <span className="whitespace-nowrap">navigator.globalPrivacyControl</span>
                ), we treat it as an opt-out of advertising cookies and of
                sale or sharing.
            </li>
            </ul>
            <p className="mt-4">
            Analytics cookies that help us understand site traffic stay on.
            Google advertising storage (ad_storage, ad_user_data, and
            ad_personalization) stays off until you Accept, and stays off when
            Global Privacy Control is on.
            </p>
            <p className="mt-4">
            To request access, correction, or deletion, email
            info@exclusivecalls.com or call +1 (888) 484-3515. This section
            describes how the site behaves. It is not legal advice.
            </p>
            <h2 className="text-xl font-semibold mt-6">10. Contact Us</h2>
            <p>
            If you have any questions about this Privacy Policy, please contact us
            at:
            </p>
            <ul className="list-disc ml-6">
            <li>Email: info@exclusivecalls.com</li>
            <li>Phone: +1 (888) 484-3515</li>
            <li>
                Address: 1309 Coffeen Ave Suite 2397, Sheridan, WY 82801, United
                States
            </li>
            </ul>
        </Container>
    </>
  )
}

export default PrivacyPolicy