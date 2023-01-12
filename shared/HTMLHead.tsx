import Head from 'next/head'

interface IProps {
  title?: string
  description?: string
  image?: string
  doNotShowSuffix?: boolean
  indexPage?: boolean
}

export const HTMLHead = ({
  title,
  description,
  image,
  doNotShowSuffix = false,
  indexPage = true,
}: IProps) => {
  const suffix = doNotShowSuffix ? '' : ' | B-n-B Services'
  const pageTitle = title ? title + suffix : 'Bourbon-n-Blockchain Services'
  const pageDescription = !description
    ? 'A membership based club dedicated to supporting and strengthening blockchain technology'
    : description
  const pageImage = image ? `/${image}` : '/seo_bg.jpg'

  return (
    <Head>
      <title>{pageTitle}</title>

      <meta name="description" content={pageDescription} />
      <meta name="image" content={`${pageImage}?ts=${new Date().getTime()}`} />
      {!indexPage && <meta name="robots" content="noindex,nofollow" />}

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={`${pageImage}?ts=${new Date().getTime()}`} />
      <meta property="og:image:secure_url" content={`${pageImage}?ts=${new Date().getTime()}`} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TheOfficial_BnB" />
      <meta name="twitter:creator" content="@TheOfficial_BnB" />
      <meta name="twitter:image" content={`${pageImage}?ts=${new Date().getTime()}`} />
      <meta name="twitter:image:src" content={`${pageImage}?ts=${new Date().getTime()}`} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="628" />
    </Head>
  )
}
