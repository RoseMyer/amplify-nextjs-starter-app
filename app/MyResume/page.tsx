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
  <main>
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Your content here */}
        <p>This is a centered column with flexible margins.</p>
        <div>
        {/* <p>also this should appear.. {message}</p> */}
          <br/> <br/>
          <h1>My Resume </h1>
          <p>Content of my resume...</p> <br/> <br/> 

          <Image src="/images/resume-photo.jpeg" alt="Resume Photo" width={250} height={200} /> <br/> <br/> 

          <h3> Education and Major </h3> <br/> 
          <p> Borough of Manhattan Community College</p> 
          <p> Computer Science (A.S) </p> <br/>

          <h3> Expirence </h3> <br/>
          <p> The Artery</p> 
          <p> Freelance at a postproduction company that deals with visual effects. </p> <br/>


          <h3> Projects </h3> 
          <p>TSLA stock Tweet analysis </p>
          <p> Pulling tweets related to tesla stock to see if there is a coorlation with stock price with word sentiment analysis.</p>
          <p> Used LSTM (long short term memeory) for machine learning so nerualnet would not forget previous sentiment during its training.</p>
          <p> The conclusion was not alpha, meaning there was not relationship between tweets and stock prices. </p>
        </div>

        <div>

      
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
      </div>
    </div>

    {/* <div>
      <br/> <br/>
      <h1>My Resume</h1>
      <p>Content of my resume...</p> <br/> <br/> 

      <Image src="/image/resume-photo.jpeg" alt="Resume Photo" width={250} height={200} /> <br/> <br/> 

      <h3> Education and Major </h3> <br/> 
      <p> Borough of Manhattan Community College</p> 
      <p> Computer Science (A.S) </p> <br/>

      <h3> Expirence </h3> <br/>
      <p> The Artery</p> 
      <p> Freelance at a postproduction company that deals with visual effects. </p> <br/>


      <h3> Projects </h3> 
      <p>TSLA stock Tweet analysis </p>
      <p> Pulling tweets related to tesla stock to see if there is a coorlation with stock price with word sentiment analysis.</p>
      <p> Used LSTM (long short term memeory) for machine learning so nerualnet would not forget previous sentiment during its training.</p>
      <p> The conclusion was not alpha, meaning there was not relationship between tweets and stock prices. </p>
    </div> */}

    {/* <div>

      
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

    </div> */}
  
  </main>

  );
}

