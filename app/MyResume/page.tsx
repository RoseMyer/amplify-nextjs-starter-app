import Image from 'next/image'
import styles from './MyResume.module.css'

export default function Resume() {
  return (
  <main>
    
    <div>
      <h1>My Resume</h1>
      <p>Content of my resume...</p>

    </div>

    <div>

      {/* Return back to homepage reference */}
      <a href="/" className={styles.card} target="_blank" rel="noopener noreferrer">
        <h2>Homepage <span>-&gt;</span></h2>
        <p>Click back to the homepage.</p>
      </a>

      <a href="/MyUniversity" className={styles.card} rel="noopener noreferrer">
        <h2>My University <span>-&gt;</span></h2>
        <p>Learn about my undergraduate journey.</p>
      </a>

    </div>
  
  </main>

  );
}

