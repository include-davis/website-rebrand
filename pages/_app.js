import '../styles/globals.css'
import Nav from '../components/Globals/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
