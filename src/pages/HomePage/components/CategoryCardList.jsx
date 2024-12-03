import CategoryCard from "./CategoryCard.jsx";

import breakfast from '../../../assets/breakfast.jpg'
import lunch from '../../../assets/lunch.jpg'
import dinner from '../../../assets/dinner.jpg'
import dessert from '../../../assets/dessert.jpg'
import styles from './CategoryCardList.module.css'

const CategoryCardList = () => {
  return (
    <ul className={styles.cardList}>
      <CategoryCard title="breakfast" image={breakfast} />
      <CategoryCard title="lunch" image={lunch} />
      <CategoryCard title="dinner" image={dinner} />
      <CategoryCard title="dessert" image={dessert} />
    </ul>
  );
};

export default CategoryCardList;