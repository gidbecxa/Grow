import '../styles/globals.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/600.css'
import { extendTheme } from '@chakra-ui/react'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {useEffect} from 'react'
import { SessionProvider } from "next-auth/react"


const theme = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif`,
  },
})

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps : { session, ...pageProps }}: AppPropsWithLayout) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', (url, { shallow }) => {
    })
    router.events.on('routeChangeComplete', (url, { shallow }) => {
    })
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
       <Component/>
    }
  }, [])
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    // <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    {/* </SessionProvider> */}
  )
}
