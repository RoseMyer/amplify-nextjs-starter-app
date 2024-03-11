import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.description}>
        <p> Get going by editing&nbsp;<code className={styles.code}>app/page.tsx</code></p>
      </div>

      <div className={styles.center}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority/>
        <span>+</span>
        <Image src="/amplify.svg" alt="Amplify Logo" width={45} height={37} priority/>
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

      </div>
    </main>
  )
}
