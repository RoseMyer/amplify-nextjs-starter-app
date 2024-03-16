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
        <p>Hello! My name is Rose Myer, I am a student at BMCC, mother of two, wife, and dog owner. I am Russian born, but spend most of my life growing up in Philadelphia.</p>
      </div>
      <div className={styles.infoBox}>
        <h3>Professional Goals</h3>
        <p>My career interests are in the feild of finance, business, mining, energy, and healthcare. </p>
      </div>
      <div className={styles.infoBox}>
        <h3>Personal Interests</h3>
        <p>My interests include history, cooking, reading up on new technology and businesses. When I have a chance to leave the city, I love idenitfying different plants and mushrooms. </p>
      </div>
      <div className={styles.infoBox}>
        <h3>Academic Interests</h3>
        <p>My academic interests include the way inwhich AI can be used for behavioral economics, biology, and geology. </p>
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
