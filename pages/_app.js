import * as React from 'react'
import NextApp from 'next/app'

// import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'

import Head from 'next/head'
import Meta from '@hackclub/meta'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Meta
          as={Head}
          name="Hack Club" // site name
          title="Cox Mill" // page title
          description="Cox Mill's Hack Club" // page description
          color="#ec3750" // theme color
          manifest="/site.webmanifest" // link to site manifest
        />
        <ThemeProvider theme={theme}>
          <ColorSwitcher />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}
