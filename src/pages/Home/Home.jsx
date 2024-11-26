import Header from "../../components/Header.jsx";
import CategoryCardList from "./components/CategoryCardList.jsx";
import SearchBox from "./components/SearchBox.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <CategoryCardList />
        <SearchBox />
      </main>
    </>
  );
};

export default Home;