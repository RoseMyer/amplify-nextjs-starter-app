import Image from 'next/image'
import styles from './MyUniversity.module.css'

export default function AboutBMCC() {
  return (
  <main className={styles.main}>
    <br/>
    <div className={styles.topSection}> {/* New class for the top section */} 
      <div className={styles.imageWrapper}> {/* Wrapper for image */}
       <Image
        src="/images/bmcc.jpeg" // Update with the path to your image
        alt="Borough of Manhattan Community College"
        width={500} // Set the desired size
        height={300} // Maintain the aspect ratio of the image
        className={styles.imageWrapper}
        />
      </div>
      <div className={styles.infoBox}> {/* New class for the info box */}
        <h4>Borough of Manhattan Community College</h4> <br/>
        <p>199 Chambers Street, New York, NY 10007</p>
        <p> Located in New York City, Borough of Manhattan Community College (BMCC) is an integral part of the CUNY system, offering a range of associate degrees and certificate programs. Established in 1963, BMCC combines affordable education with a rich diversity, preparing students for further studies and varied careers in a supportive, dynamic environment.</p>
        <p>BMCC offers many opportunities to engage with the community through internships, clubs, research, and career development</p>
        <p> Start here. Go anywhere!</p>
        {/* Add more information here */}
      </div>
    </div>

    <div className={styles.content}> 
    <div className={styles.container}>


      <br/> <br/>
      <h3> Education and Major </h3> <br/> 
      <p> Borough of Manhattan Community College</p> 
      <p> Computer Science (A.S) </p> <br/>

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

    <a href="https://www.bmcc.cuny.edu/" className={styles.card} rel="noopener noreferrer">
      <h2>BMCC <span>-&gt;</span></h2>
      <p>Learn more about my university!</p>
    </a>

  </div>
  </main>
  
  );
}
