import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="container">
        <Navbar />
      <Head>
        <title>J</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="logout">
            <a href="/logout">Logout</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
