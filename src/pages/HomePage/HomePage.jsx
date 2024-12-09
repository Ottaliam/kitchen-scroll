import Header from "../../components/Header.jsx";
import CategoryCardList from "./components/CategoryCardList.jsx";
import SearchBox from "./components/SearchBox.jsx";
import Footer from "../../components/Footer.jsx";

import styles from './HomePage.module.css';
import {Helmet} from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home | Recipe Scroll</title>
      </Helmet>
      <a id="skip-main" href="#main">Skip to main content</a>
      <Header />
      <main id="main">
        <CategoryCardList />
        <SearchBox />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;