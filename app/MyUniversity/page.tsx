import Image from 'next/image'
import styles from './MyUniversity.module.css'

export default function AboutBMCC() {
  return (
  <main>
    <div className={styles.content}>
    <div className={styles.container}>
      
      <br/> <br/>
      <h3> Education and Major </h3> <br/> 
      <p> Borough of Manhattan Community College</p> 
      <p> Computer Science (A.S) </p> 
      <p>199 Chambers Street, New York, NY 10007</p><br/>

      <h3> Current Classes: </h3> <br/>
      <p> CSC 350: Software development</p> 
      <p> CIS 345: Telecommuncation Network</p>
      <p> FNB 250: Money and Banking  </p>
      <p> MAT 209: Statistics </p> <br/>

      <h3> Extra Curriculars </h3> <br/>
      <p> Achievers Program</p> 
      <p> Finance and Banking Club</p>
      <p> PTO Nest+M Member</p>
      <p> Brazilian Jiu-Jitsu </p><br/>

    </div>

    

    <div className={styles.grid}> 

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
    </div>

  </main>
  
  );
}
