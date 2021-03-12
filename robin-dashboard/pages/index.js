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
          <img class="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div class="tasktext"><h3 class="taskhead2">Esther Dobson</h3><p class="paragr">1 hour and 13 expired</p>
          </div>
          <img class="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div class="tasktext"><h3 class="taskhead2">William Whatley</h3><p class="paragr">1 hour and 13 expired</p>
          </div>
          <img class="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div class="tasktext"><h3 class="taskhead2">Roy Gleason</h3><p class="paragr">1 hour and 13 expired</p>
          </div>
        </div>
        <div class="tasksinfor2">
           <button class="buttonoverview">Brushing teeth</button>
           <button class="buttonoverview">Take medication</button>
           <button class="buttonoverview">Brushing teeth</button>
        </div>
          <div class="buttondiv">
            <button class="buttonoverview2">Panic</button>
          </div>
      
        
       </div>
       
       <div class="taskbox">
        <h2 class="taskheading">Rapidly emerging tasks</h2>
        <p class="taskparagr">Upcoming tasks for the next 2 hours</p>
        <div class="tasksinfor">
          <img class="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div class="tasktext"><h3 class="taskhead2">William Whatley</h3><p class="paragr">In 23 min</p>
          </div>
          <img class="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div class="tasktext"><h3 class="taskhead2">Esther Dobson</h3><p class="paragr">in 48 min</p>
          </div>
          <img class="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div class="tasktext"><h3 class="taskhead2">Roy Gleason</h3><p class="paragr">1 hour and 28 min</p>
          </div>
          <img class="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div class="tasktext"><h3 class="taskhead2">Marryrose L Salas</h3><p class="paragr">1 hour and 45 min</p>
          </div>
          <img class="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div class="tasktext"><h3 class="taskhead2">Kenneth Johnson</h3><p class="paragr">1 hour and 58 min</p>
          </div>
        </div>
        <div class="tasksinfor2">
           <button class="buttonoverview">Brushing teeth</button>
           <button class="buttonoverview">Take medication</button>
           <button class="buttonoverview">Brushing teeth</button>
           <button class="buttonoverview">Laundry</button>
           <button class="buttonoverview">Brushing teeth</button>
        </div>
          <div class="buttondiv">
            <button class="buttonoverview2">Clients</button>
          </div>
      
        
       </div>
     </div>
   </Layout>
  )
}
