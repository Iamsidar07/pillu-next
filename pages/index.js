import Head from 'next/head'
import Image from 'next/image'
import  { Home } from "../components"
export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Pillu</title>
        <meta name="description" content="Bring your imagination to life with pillu" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="sm:px-8 px-4 py-4 w-full min-h-[calc(100vh-28px)] bg-white">
        <Home/>
      </main>
    </div>
  )
}
