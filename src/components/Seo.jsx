import { Helmet } from "react-helmet-async";

/**
 * Drop-in SEO head tags for Exclusive Calls.
 * path example: "/" or "/pricing"
 */
export default function Seo({
  title,
  description,
  path = "/",
  robots,
  image = "https://exclusivecalls.com/og-default.jpg",
  jsonLd,
}) {
  const url = `https://exclusivecalls.com${path === "/" ? "/" : path}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {robots ? <meta name="robots" content={robots} /> : null}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Exclusive Calls" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Exclusive Calls",
  legalName: "Amin Empire Inc.",
  url: "https://exclusivecalls.com/",
  logo: "https://exclusivecalls.com/favicon.png",
  email: "info@exclusivecalls.com",
  telephone: "+1-888-484-3515",
  foundingDate: "2008",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1309 Coffeen Ave Suite 2397",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
  sameAs: ["https://www.linkedin.com/company/exclusive-calls"],
};

export const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I know the appointments will be qualified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Appointments are set with decision-makers who have budget, authority, and a real business need. Each meeting is pre-qualified through our vetting process.",
      },
    },
    {
      "@type": "Question",
      name: "What if my industry is too niche or technical?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our outreach process adapts to niche and technical industries. We learn your product, value proposition, and target personas before launching.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide the contact lists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We do not sell or provide contact lists. You provide or approve the data sources we dial.",
      },
    },
  ],
};