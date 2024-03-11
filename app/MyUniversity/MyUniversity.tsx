import Image from 'next/image'
import styles from './page.module.css'

export default function AboutBMCC() {
  return (
  <main>
    <div>
      <h1>About BMCC</h1>
      <p>Information about BMCC...</p>
    </div>


    <div>
      <a
        href="/index"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Homepage <span>-&gt;</span>
        </h2>
        <p>Click back to the homepage.</p>
      </a>
    </div>

  </main>
  
  );
}
