import styles from './HeroStyle.module.css';
import heroImg from '../../assets/assets/hero-img.png';
import sun from '../../assets/assets/sun.svg';
import moon from '../../assets/assets/moon.svg';

import githubLight from '../../assets/assets/github-light.svg';
import githubDark from '../../assets/assets/github-dark.svg';
import LinkedinLight from'../../assets/assets/linkedin-light.svg';
import LinkedinDark from'../../assets/assets/linkedin-dark.svg';
import CV from '../../assets/assets/CV.pdf.pdf';
import{useTheme}from'../../common/ThemeContext';
function Hero() {
  const {theme,toggleTheme}= useTheme();
  const themeIcon = theme === 'light'? sun : moon;
  const githubIcon = theme === 'light'? githubLight : githubDark;
  const LinkedinIcon = theme === 'light'? LinkedinLight : LinkedinDark;
 
  return (
    <section id="hero" className= {styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="profile pic of Subhajit Mahapatra"/>

        <img className={styles.colorMode}src={themeIcon} alt="color mode icon" onClick={toggleTheme}/>
        
      </div>
      
      <div className={styles.info}>
        <h1>
          Subhajit
          <br/>
          Mahapatra
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/Subhajit7710" target="_blank">
            <img src ={githubIcon} alt="Github icon "/>
          </a>
          <a href="https://www.linkedin.com/in/subhajit-mahapatra-452136311/" target="_blank">
            <img src ={LinkedinIcon} alt="LinkedIn icon "/>
          </a>
      </span>
      <p className={styles.description}>
        Passionate about developing responsive web apps using React
      </p>
           <a href={CV} download>
            <button className="hover">
              Resume
            </button>
           </a>
      </div>
    </section>
    
  );
}

export default Hero;
