'use client'
// import {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from './MyResume.module.css'

export default function Resume() {

  // const [message, setMessage] = useState("hello from client side")

  // const getServerMessage = async () => {
  //   try {
  //     const response = await (await fetch('/api/hello')).json()
  //     console.log(response)
  //     setMessage(response)
  //   } catch (error) {
  //     console.error(`error is ${error}`)
  //     setMessage("something went horribly wrong!")
  //   }
  // }
 
  // useEffect(() => {
  //   getServerMessage()
  // },[])
  return (
  <main className={styles.main}>

      <div className={styles.content}>
        <div>
        
        <div className={styles.headerContainer}>
          <br/><br/><h1 className={styles.headerTitle}>Rose Myer</h1>
        </div><br/><br/>

         <div className={styles.circleImage}>
          <Image
            src="/images/resume-photo.jpeg" // Replace with your image path
            alt="Resume Photo"
            width={250} // Width of the image (in pixels)
            height={250} // Height of the image (in pixels)
            className={styles.circleImage}
          />
        </div> <br/>

        <div className={styles.container}>
        <h2> Education and Major </h2> <br/> 
          <p> Borough of Manhattan Community College</p> 
          <p> Computer Science (A.S) </p> <br/>

          <h2> Expirence </h2> <br/>
          
          <h4> The Artery</h4> 
          <p> 2018 - present</p> <br/>

          <ul className="bulleted-list">
            <li>I worked as a post-production coordinator dealing with in-house affairs.</li>
            <li>Worked closely with the executive producer to ensure projects across different teams met their deadlines.</li>
            <li>Managed, updated, and secured client information in the database.</li>
            <li>Event coordinator, managing scheduling, catering, and other tasks for social events hosted by The Artery.</li>
          </ul>


          <h4> Tutto Il Giorno</h4>
          <p> 2017</p><br/>
          <ul className="bulleted-list">
            <li>Worked as a waitress for a high-end restaurant.</li>
            <li>Acquired thorough understanding of meal preparation and wine pairing with dishes from southern Italy.</li>
            <li>Managed stock inventory of wines and spirits.</li>
            <li>Assisted in bar preparation for the dinner rush.</li>
          </ul><br/>
          
          <h2> Projects </h2> <br/>
          <h4>TSLA stock Tweet analysis </h4>
          <ul className="bulleted-list">
            <li>Analyzed tweets related to Tesla stock to determine if there was a correlation with stock price and word sentiment analysis.</li>
            <li>Used LSTM (Long Short-Term Memory) for machine learning so the neural network would not forget previous sentiment during its training.</li>
            <li>The conclusion was that there was no alpha, indicating no relationship between tweets and stock prices.</li>
          </ul><br/>
          

          <h2> Programs</h2> <br/>
          <p> BNY Mellon Start Up Mentorship</p>
          <p> NYU School of AI</p>
          <p> BMCC Data Analytics program</p>
          <p> Cornell Tech Break Through AI (Summer 2024)</p><br/> <br/> <br/> 
        </div>
          
        </div>
      </div> <br/> <br/> <br/> <br/><br/>


    <div className={styles.grid}>
      <a href="/" className={styles.card} rel="noopener noreferrer">
        <h2>Homepage <span>-&gt;</span></h2>
        <p>Click back to the homepage.</p>
        </a>

      <a href="/MyUniversity" className={styles.card} rel="noopener noreferrer">
        <h2>My University <span>-&gt;</span></h2>
        <p>Learn about my undergraduate journey.</p>
        </a>

      <a href="https://www.linkedin.com/in/rose-myer-98a339201/" className={styles.card} rel="noopener noreferrer">
        <h2>Connect on LinkedIn<span>-&gt;</span></h2>
        <p>Click here!</p>
        </a>

    </div>
  
  </main>

  );
}

