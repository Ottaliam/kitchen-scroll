import styles from './SearchBox.module.css'

const SearchBox = () => {
  return (
    <div className={styles.searchBox}>
      <input type="text" placeholder="Search recipe" />
    </div>
  );
};

export default SearchBox;