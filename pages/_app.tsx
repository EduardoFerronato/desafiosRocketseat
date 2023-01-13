import { ChakraProvider } from '@chakra-ui/react'
import { Roboto } from '@next/font/google'
const roboto = Roboto({ weight: ['300', '400', '500', '700'] })

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider >
      <main className={roboto.className} style={{fontFamily: "Roboto.500"}}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  )
}

export default MyApp