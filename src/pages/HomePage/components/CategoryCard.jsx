import {useNavigate} from "react-router";
import PropTypes from 'prop-types';

import styles from './CategoryCard.module.css'

const CategoryCard = ({ title, image }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/list/${title}`)}
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.defaultMuiPrevented = true;
          navigate(`/list/${title}`);
        }
      }}
    >
      <img src={image} alt=""/>
      <h2>{title}</h2>
    </div>
  );
};

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CategoryCard;