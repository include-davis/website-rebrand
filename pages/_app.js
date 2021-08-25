import '../styles/globals.css'
import Nav from '../components/Globals/Nav'
import Footer from '@components/Globals/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
