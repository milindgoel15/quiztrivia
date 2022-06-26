import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
