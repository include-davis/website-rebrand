import Head from 'next/head'
import Notification from '../components/Globals/Notification'
import MainContent from '../components/Home/MainContent'
import OurValues from '../components/Home/OurValues'

export default function Home() {
  return (
    <>
      <Head>
        <title>#include @ Davis</title>
      </Head>
      <Notification />
      <MainContent />
      <OurValues />
    </>
  )
}
