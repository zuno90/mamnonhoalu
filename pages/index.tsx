import Head from "next/head";
import Navbar from "../components/Main/Navbar";
import Layout from "../components/Main/Layout";
import Footer from "../components/Footer";
// import localFont from "next/font/local";


// Font files can be colocated inside of `pages`
// const myFont = localFont({ src: "../fonts/GoogleSans-Regular.ttf" });

export default function Home() {
  return (
    <>
      {/* <main className={myFont.className}> */}
      <Head>
        <title>Mầm non Hoa Lư Quy Nhơn</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Navbar />
      <main className="min-h-screen text-gray-900 dark:bg-gray-800 dark:text-gray-50">
        <Layout />
      </main>

      <footer>
        <Footer />
      </footer>
      {/* </main> */}
    </>
  );
}
