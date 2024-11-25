import PropTypes from 'prop-types';

import styles from './CategoryCard.module.css'

const CategoryCard = ({ title, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title}/>
      <h2>{title}</h2>
    </div>
  );
};

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CategoryCard;