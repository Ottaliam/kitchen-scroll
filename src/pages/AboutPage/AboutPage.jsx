import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

import styles from './AboutPage.module.css';
import {Helmet} from "react-helmet";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | Recipe Scroll</title>
      </Helmet>
      <a id="skip-main" href="#main">Skip to main content</a>
      <Header/>
      <main id="main" className={styles.main}>
        <h2>About This Site</h2>
        <p>
          This site collects pieces from the Elder Scroll about recipes that satisfied the hunger of Alduin, the First
          Dragon.
        </p>
        <p>
          Thanks to the last Dragonborn, the World Eater had been put to a permanent end.
          But these prophecies may prove useful until the end of time comes.
        </p>

        <article>
          <h2>
            The Elder Scroll
          </h2>
          <div className={styles.elderScroll}>
            <p>
              And the Scrolls have foretold, of black wings in the cold, That when brothers wage war come unfurled!
            </p>
            <p>
              Alduin, Bane of Kings, ancient shadow unbound, With a hunger to swallow the world!
            </p>
            <p>
              - Song of the Dragonborn.
            </p>
          </div>
        </article>
      </main>
      <Footer/>
    </>
  );
};

export default AboutPage;