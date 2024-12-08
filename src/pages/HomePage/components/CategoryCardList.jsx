import CategoryCard from "./CategoryCard.jsx";

import breakfast from '../../../assets/breakfast.jpg'
import lunch from '../../../assets/lunch.jpg'
import dinner from '../../../assets/dinner.jpg'
import dessert from '../../../assets/dessert.jpg'
import styles from './CategoryCardList.module.css'

const CategoryCardList = () => {
  return (
    <ul className={styles.cardList}>
      <li><CategoryCard title="breakfast" image={breakfast} /></li>
      <li><CategoryCard title="lunch" image={lunch} /></li>
      <li><CategoryCard title="dinner" image={dinner} /></li>
      <li><CategoryCard title="dessert" image={dessert} /></li>
    </ul>
  );
};

export default CategoryCardList;