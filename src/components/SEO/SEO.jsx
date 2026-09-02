import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, canonical }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://exclusivecalls.com${canonical}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://exclusivecalls.com${canonical}`} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}