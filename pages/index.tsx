import Head from 'next/head'
import Navbar from '../components/Main/Navbar'
import Layout from '../components/Main/Layout'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
          <title>Mầm non Hoa Lư Quy Nhơn</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="/font/GoogleSans-Regular.ttf" rel="stylesheet" />
      </Head>
      <Navbar />
      <main className='min-h-screen text-gray-900 dark:bg-gray-800 dark:text-gray-50'>
          <Layout />
      </main>
      <footer className="py-4">
          <Footer /> 
      </footer>
    </>
  )
}