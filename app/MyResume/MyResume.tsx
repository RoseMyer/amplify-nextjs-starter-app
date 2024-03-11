import Image from 'next/image'
import styles from './page.module.css'

export default function Resume() {
  return (
  <main>
    
    <div>
      <h1>My Resume</h1>
      <p>Content of my resume...</p>

    </div>

 // Return back to homepage reference
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

    <div>
        <a
          href="https://docs.amplify.aws/gen2/build-a-backend/auth/set-up-auth/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Auth <span>-&gt;</span>
          </h2>
          <p>Zero-config Auth UI components with social sign-in and MFA.</p>
        </a>

    </div>
  
  </main>

  );
}

