import Head from 'next/head';
import Layout from '../components/layout';


export default function Home() {
  return (
   <Layout>
     <h1 class="overviewcap">Hi Sjoerd,</h1>
     <p class="overviewpara">There are 3 clients with expired tasks and 5 rapidly emerging tasks</p>
   </Layout>
  )
}
