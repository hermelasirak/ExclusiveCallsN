import React from "react";
import Seo from "../Seo";
import Container from "../layouts/Container";

const Accessibility = () => (
  <Container>
    <Seo
      title="Accessibility Statement | Exclusive Calls"
      description="Exclusive Calls is committed to an accessible website that meets WCAG 2.1 Level AA."
      path="/accessibility"
    />
    <article className="pt-32 pb-16 max-w-3xl mx-auto text-slate-800 space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Accessibility Statement</h1>
      <p><strong>Last updated:</strong> [Month Day, 2026]</p>
      <h2 className="text-2xl font-semibold text-slate-900">Our commitment</h2>
      <p>
        Exclusive Calls wants everyone, including people with disabilities, to be able to use
        exclusivecalls.com. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
      </p>
      <h2 className="text-2xl font-semibold text-slate-900">What we do</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Use clear headings, labels, and page titles.</li>
        <li>Support keyboard navigation, with a skip link and visible focus.</li>
        <li>Provide text alternatives for meaningful images.</li>
        <li>Check color contrast and test pages with automated and manual tools.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-slate-900">Known limitations</h2>
      <p>
        Some third-party tools on this site, such as the chat widget and reCAPTCHA, are provided by
        outside vendors and may not fully meet WCAG 2.1 AA. If any part of the site is hard to use,
        contact us and we will help you another way.
      </p>
      <h2 className="text-2xl font-semibold text-slate-900">Contact us</h2>
      <p>
        Email <a className="underline text-[#b93c00]" href="mailto:info@exclusivecalls.com">info@exclusivecalls.com</a>{" "}
        or call <a className="underline text-[#b93c00]" href="tel:+18884843515">+1 (888) 484-3515</a>.
        We aim to respond within [2] business days.
      </p>
    </article>
  </Container>
);

export default Accessibility;
