import Dip2 from "../assets/Dip2.jpg";
import faz from "../assets/faz.jpeg";
import gau from "../assets/gau.jpeg";
import hari from "../assets/hari.jpeg";
import classes from "../pages/About.module.css";
import git from "../assets/gitLogo.gif";
import insta from "../assets/instaLogo.gif";
import link from "../assets/linkedlinLogo.gif";
const About = () => {
  return (
    <div className={classes.main}>
      <br />
      <h2>OUR AIM</h2>
      <div className={classes.desc}>
        <b>
          Reducing this food loss and waste is a “triple win.” First, farmers,
          companies and households can save money by reducing waste. Second,
          wasting less means feeding more. Finally, these reductions alleviate
          pressure on climate, water and land resources.
        </b>
      </div>
      <br />
      <h2>Our Team</h2>
      <div className={classes.container}>
        <span className={classes.profileContainer}>
          <img src={Dip2} className={classes.img1}></img>
          <h2>Dipendra Raghav</h2>
          <span className={classes.logo}>
            <a href="" target="blank">
              <img src={insta} width="50px" />
            </a>
          </span>
          <span className={classes.logo}>
            <a href="" target="blank">
              <img src={git} width="49px" />
            </a>
          </span>
          <span className={classes.logo}>
            <a href="" target="blank">
              <img src={link} width="53px" />
            </a>
          </span>
        </span>
        <span className={classes.profileContainer}>
          <img src={faz} className={classes.img1}></img>
          <h2>Fazal Ahmad</h2>
          <span className={classes.logo}>
            <a href="" target="blank">
              <img src={insta} width="50px" />
            </a>
          </span>
          <span className={classes.logo}>
            <a href="" target="blank">
              <img src={git} width="49px" />
            </a>
          </span>
          <span className={classes.logo}>
            <a href="" target="blank">
              <img src={link} width="53px" />
            </a>
          </span>
        </span>
        <span className={classes.profileContainer}>
          <img src={gau} className={classes.img1}></img>
          <h2>Gaurav Verma</h2>
          <span className={classes.logo}>
            <a href="" target="blank">
              <img src={insta} width="50px" />
            </a>
          </span>
          <span className={classes.logo}>
            <a href="" target="blank">
              <img src={git} width="49px" />
            </a>
          </span>
          <span className={classes.logo}>
            <a href="" target="blank">
              <img src={link} width="53px" />
            </a>
          </span>
        </span>
        <span className={classes.profileContainer}>
          <img src={hari} className={classes.img1}></img>
          <h2>Harom Singh Rajput</h2>
          <span className={classes.logo}>
            <a href="" target="blank">
              <img src={insta} width="50px" />
            </a>
          </span>
          <span className={classes.logo}>
            <a href="" target="blank">
              <img src={git} width="49px" />
            </a>
          </span>
          <span className={classes.logo}>
            <a href="" target="blank">
              <img src={link} width="53px" />
            </a>
          </span>
        </span>
      </div>
    </div>
  );
};

export default About;
