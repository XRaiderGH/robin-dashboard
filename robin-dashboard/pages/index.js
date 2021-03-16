import Head from 'next/head';
import Layout from '../components/layout';


export default function Home() {
  return (
   <Layout>
     <h1 className="overviewcap">Hi Sjoerd,</h1>
     <p className="overviewpara">There are 3 clients with expired tasks and 5 rapidly emerging tasks</p>

     <div className="taskoverview">
       <div className="taskbox">
        <h2 className="taskhead">Expired tasks</h2>
        <div className="tasksinfor">
          <img className="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div className="tasktext"><h3 className="taskhead2">Esther Dobson</h3><p className="paragr">1 hour and 13 expired</p>
          </div>
          <img className="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div className="tasktext"><h3 className="taskhead2">William Whatley</h3><p className="paragr">1 hour and 13 expired</p>
          </div>
          <img className="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div className="tasktext"><h3 className="taskhead2">Roy Gleason</h3><p className="paragr">1 hour and 13 expired</p>
          </div>
        </div>
        <div className="tasksinfor2">
           <button className="buttonoverview">Brushing teeth</button>
           <button className="buttonoverview">Take medication</button>
           <button className="buttonoverview">Brushing teeth</button>
        </div>
          <div className="buttondiv">
            <button className="buttonoverview2">Panic</button>
          </div>
      
        
       </div>
       
       <div className="taskbox">
        <h2 className="taskheading">Rapidly emerging tasks</h2>
        <p className="taskparagr">Upcoming tasks for the next 2 hours</p>
        <div className="tasksinfor">
          <img className="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div className="tasktext"><h3 className="taskhead2">William Whatley</h3><p className="paragr">In 23 min</p>
          </div>
          <img className="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div className="tasktext"><h3 className="taskhead2">Esther Dobson</h3><p className="paragr">in 48 min</p>
          </div>
          <img className="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div className="tasktext"><h3 className="taskhead2">Roy Gleason</h3><p className="paragr">1 hour and 28 min</p>
          </div>
          <img className="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div className="tasktext"><h3 className="taskhead2">Marryrose L Salas</h3><p className="paragr">1 hour and 45 min</p>
          </div>
          <img className="taskoverimg" src='/assets/tijdelijklogo.JPG' alt=""/>
          <div className="tasktext"><h3 className="taskhead2">Kenneth Johnson</h3><p className="paragr">1 hour and 58 min</p>
          </div>
        </div>
        <div className="tasksinfor2">
           <button className="buttonoverview">Brushing teeth</button>
           <button className="buttonoverview">Take medication</button>
           <button className="buttonoverview">Brushing teeth</button>
           <button className="buttonoverview">Laundry</button>
           <button className="buttonoverview">Brushing teeth</button>
        </div>
          <div className="buttondiv">
            <button className="buttonoverview2">Clients</button>
          </div>
      
        
       </div>
     </div>
   </Layout>
  )
}
