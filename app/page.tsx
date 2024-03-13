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
      <h3>Introduction</h3> <br/>
      <p> Hello! My name is Rose Myer, I am a student at BMCC, mother of two, wife, dog owner , and admirer of all. </p> <br/>
    </div>

{/* FACTS */}
    <div>
      <p> Favorite quote: "Sed omnia præclara tam difficilia quam rara sunt."</p>
      <p> Favorite animal: Tiger </p>
      <p> Favorite book: </p>
      <p> Favorite place in NYC: Brooklyn Heights </p>
      <p> Favorite food to cook: Steak and pies</p>
      <p> Favorite physical activities: Swimming and hiking</p><br/>
    </div>

    <div>
      <p> When I am not being a mom or a student, I am learning about learning about new techonology and businesses, reading about history, cooking, teaching my kids. </p>
    </div>

    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {places.map((place, index) => (
          <div key={index} className={styles.slide}>
          <Image src={place.src} alt={place.alt} width={200} height={200} />
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
