import React from 'react'

/**
 * @param {import('next/app').AppProps} param
 * @returns
 */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
