import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import reactLogo from "../assets/react.svg";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src={reactLogo} alt="Recipe Scrolls Logo"/>
        <h2>Recipe Scrolls</h2>
      </div>

      <div className={styles.socialContainer}>
        <a href="https://github.com/Ottaliam/kitchen-scroll">
          <FaGithub className={styles.icons} />
        </a>
        <a href="https://www.linkedin.com/in/lingxiao-zhong-a91739325">
          <FaLinkedin className={styles.icons} />
        </a>
        <a href="mailto:ottaliam@gmail.com">
          <MdEmail className={styles.icons} />
        </a>
      </div>

      <div className={styles.spacer}></div>

      <div className={styles.copyrightContainer}>
        <p>&copy; {new Date().getFullYear()} Lingxiao Zhong. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;