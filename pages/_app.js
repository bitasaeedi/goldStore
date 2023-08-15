import '@/styles/globals.css'
import Layout from "@/components/Layout";
import {useState} from "react";
import { AppProvider } from '@/components/context';


export default function App({ Component, pageProps }) {

  return  <AppProvider> <Layout> <Component {...pageProps}/> </Layout> </AppProvider>
}
