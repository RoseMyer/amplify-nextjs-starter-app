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
            <li>I worked as a post production coordinator dealing with in-house affairs </li>
            <li>Working closing with the eetive producter to ensure projects on different teams the dealine.</li>
            <li>Manage, updating, and securing client information in database. </li>
            <li>Events coordinator, managing sechudling, catering, and other tasks for social events hosted by the Artery.</li>
          </ul> <br/>


          <h4> Tutto Il Gerino</h4>
          <p> 2017</p><br/>
          <ul className="bulleted-list">
            <li>Worked as a waitress for high end resturan</li>
            <li>Aquring through understanding for meal preparation and wine paring with dishes of southern Italy.</li>
            <li>Stock inventory of wines and spirits. </li>
            <li>Bar preparation for dinner rush.</li>
          </ul><br/>
          
          <h2> Projects </h2> <br/>
          <h4>TSLA stock Tweet analysis </h4>
          <ul className="bulleted-list">
            <li>Pulling tweets related to tesla stock to see if there is a coorlation with stock price with word sentiment analysis.</li>
            <li>Used LSTM (long short term memeory) for machine learning so nerualnet would not forget previous sentiment during its training.</li>
            <li>The conclusion was not alpha, meaning there was not relationship between tweets and stock prices.</li>
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
      <a href="/" className={styles.card} target="_blank" rel="noopener noreferrer">
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

