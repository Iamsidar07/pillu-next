import Head from 'next/head'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  <ToastContainer />
  <Component {...pageProps} />
  </>
}

export default MyApp
