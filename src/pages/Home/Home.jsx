import Header from "../../components/Header.jsx";
import CategoryCardList from "./components/CategoryCardList.jsx";
import SearchBox from "./components/SearchBox.jsx";
import Footer from "../../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <CategoryCardList />
        <SearchBox />
      </main>
      <Footer />
    </>
  );
};

export default Home;