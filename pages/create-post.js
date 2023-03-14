import Head from 'next/head'
import React from 'react'
import { CreatePost } from '../components'
const CreatePostPage = () => {
  return (
    <div>
      <Head>
        <title>Pillu</title>
        <meta name="description" content="Transform your words into arts with Ai powered creativity by pillu." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="sm:px-8 px-4 py-4 w-full min-h-[calc(100vh-28px)] bg-white max-w-6xl mx-auto">
        <CreatePost />
      </main>
    </div>
  )
}

export default CreatePostPage
