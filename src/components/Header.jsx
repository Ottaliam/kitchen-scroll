import reactLogo from '../assets/react.svg'
import { Link } from "react-router";

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={reactLogo} alt="Recipe Scrolls Logo"/>
        <h1>Recipe Scrolls</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/list">Recipes</Link></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;