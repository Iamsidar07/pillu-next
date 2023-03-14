import Head from 'next/head'
import  { Home } from "../components"
export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Pillu</title>
        <meta name="description" content="Bring your imagination to life With pillu" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="sm:px-8 px-4 py-4 w-full min-h-[calc(100vh-28px)] bg-white max-w-6xl mx-auto">
        <Home/>
      </main>
    </div>
  )
}
