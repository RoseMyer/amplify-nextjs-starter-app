import Image from 'next/image'
import styles from './MyUniversity.module.css'

export default function AboutBMCC() {
  return (
  <main>

    <div>
      <h1>About BMCC</h1>
      <p>Information about BMCC...</p>
    </div>

    <div>

      {/* Return back to homepage reference */}
      <a href="/" className={styles.card} rel="noopener noreferrer">
        <h2>Homepage <span>-&gt;</span></h2>
        <p>Click back to the homepage.</p>
      </a>

      <a href="/MyResume" className={styles.card} rel="noopener noreferrer">
        <h2>My Resume <span>-&gt;</span></h2>
        <p>Res Gestae.</p>
      </a>

    </div>

  </main>
  
  );
}
