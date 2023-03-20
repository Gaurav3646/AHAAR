import Dip2 from "../assets/Dip2.jpg";
import faz from "../assets/faz.jpeg"
import gau from "../assets/gau.jpeg"
import hari from "../assets/hari.jpeg"
import classes from "../pages/About.module.css";
const About=()=>{
return (

    <div className={classes.main}>
        <h2>OUR AIM</h2>
        <div className={classes.desc}>
            <p><br></br>
Reducing this food loss and waste is a “triple win.” First, farmers, companies and households can save money by reducing waste. Second, wasting less means feeding more. Finally, these reductions alleviate pressure on climate, water and land resources.</p>
        </div>
        <div>
            <h2>Highlights</h2>
            <ul>
                <li>Food Management System.</li>
                <li>Give credits to the people who donate.</li>
                <li>Connecting food doners,with hunger relief organizations.</li>
                <li>Waste food to nearby animals by collecting expiring data of food.</li>
                
            </ul>
        </div>
        <h2>Our Team</h2>
        <div className={classes.container}>
            <span className={classes.span1}>
            <img src={Dip2} className={classes.img1}></img>
            <h2>Dipendra Raghav</h2>
            <p>Dipendra's expertise in React has been invaluable, and their willingness to help others on the team has not gone unnoticed. Their code is always clean, concise, and well-documented, which has made it easy for others to understand and build upon.
  <br/>
Thank you, Dipendra, for being an outstanding team member and for always going above and beyond to help the team achieve its goals. Your contributions have made a significant impact on the success of this project, and [Sender's Name] is grateful for everything you do.</p>
            </span>
            <span className={classes.span2}>
            <img src={faz} className={classes.img2}></img>
            <h2>Fazal Ahmad</h2>
            <p>Fazal has been an exceptional team member throughout the duration of our React project. His dedication, hard work, and expertise have been instrumental in making this project a success. He has consistently delivered high-quality code that is clean, concise, and well-documented, making it easy for others to understand and build upon. Fazal's willingness to help others on the team has not gone unnoticed, and his positive attitude and enthusiasm have been a source of inspiration for everyone. We are grateful for his contributions and for going above and beyond to help us achieve our goals. Fazal has made a significant impact on the success of this project, and we could not have done it without him.</p>
            </span>
            <span className={classes.span3}>
            <img src={gau} className={classes.img3}></img>
            <h2>Gaurav Verma</h2>
            <p>We are grateful for your outstanding contributions and for going above and beyond to help us achieve our goals. Your efforts have made a significant impact on the success of this project, and we could not have done it without you.
<br/>
Thank you once again for being an excellent team member and for your contributions to this project.</p>
            </span>
            <span className={classes.span4}>
            <img src={hari} className={classes.img4}></img>
            <h2>Harom Singh Rajput</h2>
            <p>I wanted to take a moment to express my sincere appreciation for your contributions to our React project. Your hard work, dedication, and expertise have been essential in making this project a success.
                <br/>
                We are grateful for your outstanding contributions and for going above and beyond to help us achieve our goals. Your efforts have made a significant impact on the success of this project, and we could not have done it without you.
            </p>
            </span>
        </div>
    </div>
)
};

export default About;