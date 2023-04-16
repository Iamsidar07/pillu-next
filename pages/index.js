import Head from 'next/head'
import  { Home } from "../components"
export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Pillu</title>
        <meta name="description" content="Bring your imagination to life With pillu" />
        <meta name="description" content="Bring your imagination to life with pillu" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="sm:px-8 px-2 py-4 w-full min-h-[calc(100vh-28px)]  max-w-7xl mx-auto ">
        <Home/>
      </main>
    </div>
  )
}
