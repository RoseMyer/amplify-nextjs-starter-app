"use client"
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const places = [
    { src: '/images/places/place1.jpeg', alt: 'Colorado' },
    { src: '/images/places/place2.jpeg', alt: 'Pennsylvania' },
    { src: '/images/places/place3.jpeg', alt: 'London' },
    { src: '/images/places/place4.jpeg', alt: 'Virginia'}
  ]

  return (
    <main className={styles.main}>
    <div>
      <h1> Weclome to my homepage</h1> <br/> <br/>
     
    </div>

    <div>
      <h2>An introduction</h2> <br/>
     <br/>
    </div>
  
    <div className={styles.infoSection}>
      <div className={styles.infoBox}>
        <h3>About Me</h3>
        <p>Hi there! I'm Rose Myer, currently studying at BMCC. I'm a mom of two, a wife, and owner of a silly dog. Originally from Russia, I spent the majority of my life in Philadelphia. Today is my birthday. After class, I am going to spend the rest of the day eating cake.</p>
      </div>
      <div className={styles.infoBox}>
        <h3>Professional Goals</h3>
        <p>I aspire to integrate computer science with essential domains such as finance and business to improve predictive models and risk management. My goal is to work in fintech sector and contribute to the development of groundbreaking solutions with a collaborative team.</p>
      </div>
      <div className={styles.infoBox}>
        <h3>Personal Interests</h3>
        <p>My interests span reading various books, from biographies to historical accounts and theories of evolution. I'm also enjoy following technological innovations and their practical applications. For leisure, I enjoy culinary experiments, identifying plants, and visiting places known for their historical significance. </p>
      </div>
      <div className={styles.infoBox}>
        <h3>Academic Interests</h3>
        <p>I'm fascinated by the research on how AI integrates with behavioral economics, biology, and geology. I'm keen to explore the benefits and potential drawbacks of machine learning on society</p>
      </div>
    </div>

{/* FACTS */}
    <div className={styles.facts}>
      <p>Favorite quote: "Sed omnia præclara tam difficilia quam rara sunt."</p>
      <p>Favorite animal: Tiger</p>
      <p>Favorite Book: Zero to One by Peter Thiel</p>
      <p>Favorite place in NYC: Brooklyn Heights</p>
      <p>Favorite foods to cook: Steak and pies</p>
      <p>Favorite physical activities: Swimming and hiking</p>
    </div>

    


    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {places.map((place, index) => (
          <div key={index} className={styles.slide}>
          <Image src={place.src} alt={place.alt} width={200} height={200} priority={true}/>
          </div>
        ))}
      </div>
    </div>

    <div className={styles.grid}>
      <a href="/MyResume" className={styles.card} rel="noopener noreferrer">
        <h2>My Resume <span>-&gt;</span></h2>
        <p>Res Gestae.</p>
      </a>

      <a href="/MyUniversity" className={styles.card} rel="noopener noreferrer">
        <h2>My University <span>-&gt;</span></h2>
        <p>Learn about my undergraduate journey.</p>
      </a>

      {/* Email Me card */}
      <a href="mailto:rosesmyer@icloud.com" className={styles.card} rel="noopener noreferrer">
        <h2>Email Me <span>-&gt;</span></h2>
        <p>Feel free to reach out via email.</p>
      </a>
    </div>
  </main>
  )
}
