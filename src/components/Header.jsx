import reactLogo from '../assets/react.svg'

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
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/recipes">Recipes</a></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;