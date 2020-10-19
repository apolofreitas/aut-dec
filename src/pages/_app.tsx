import Head from 'next/head'

import '~/styles/custom-bootstrap.scss'
import '~/styles/global.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FMM Sensor</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
