import CategoryCard from "./CategoryCard.jsx";

import breakfast from '../../../assets/breakfast.jpg'
import lunch from '../../../assets/lunch.jpg'
import dinner from '../../../assets/dinner.jpg'
import dessert from '../../../assets/dessert.jpg'
import styles from './CategoryCardList.module.css'

const CategoryCardList = () => {
  return (
    <ul className={styles.cardList}>
      <CategoryCard title="Breakfast" image={breakfast} />
      <CategoryCard title="Lunch" image={lunch} />
      <CategoryCard title="Dinner" image={dinner} />
      <CategoryCard title="Dessert" image={dessert} />
    </ul>
  );
};

export default CategoryCardList;