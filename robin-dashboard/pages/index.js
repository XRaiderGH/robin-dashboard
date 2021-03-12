import Head from 'next/head';
import Layout from '../components/layout';


export default function Home() {
  return (
   <Layout>
     <h1 class="overviewcap">Hi Sjoerd,</h1>
     <p class="overviewpara">There are 3 clients with expired tasks and 5 rapidly emerging tasks</p>

     <div class="taskoverview">
       <div class="taskbox">
        <h2 class="taskhead">Expired tasks</h2>
        <div class="tasksinfor">
          <img class="taskoverimg" src='/assets/tijdelijklogo.JPG' width='29px' height='23px' alt=""/>
          <div class="tasktext"><h3 class="taskhead2">Esther Dobson</h3><p class="paragr">1 hour and 13 expired</p>
          </div>
          <button class="buttonoverview">Brushing teeth</button>
        </div>
       </div>
     </div>
   </Layout>
  )
}
