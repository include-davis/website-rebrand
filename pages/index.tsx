import Head from 'next/head'
import Notification from '@components/Globals/Notification'
import MainContent from '@components/Home/MainContent'
import OurValues from '@components/Home/OurValues'
import FAQ from '@components/Home/FAQ'
import Events from '@components/Home/Events'
import PastClients from '@components/Home/PastClients'

export default function Home() {
  return (
    <>
      <Head>
        <title>#include @ Davis</title>
      </Head>
      <Notification />
      <MainContent />
      <OurValues />
      <FAQ />
      <Events />
      <PastClients />
    </>
  )
}
