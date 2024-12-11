import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../services/getCategories';
import { FavoritesContext } from '../../context/FavoritesContext'; 
import styles from './Categories.module.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { favorites, addToFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  const isFavorite = (categoryId) => {
    return favorites.some((fav) => fav.idCategory === categoryId);
  };

  return (
    <section>
      <h2>Add to your favorites the bundle of recipes you want to save to your profile</h2>
      <div className={styles['categories-container']}>
        {categories.map((category) => (
          <article key={category.idCategory} className={styles['category-card']}>
            <Link to={`/recipes/${category.idCategory}`} className={styles['category-link']}>
              <h3>{category.strCategory}</h3>
              <img src={category.strCategoryThumb} alt={category.strCategory} />
            </Link>
            <button
              onClick={() => addToFavorites(category)}
              disabled={isFavorite(category.idCategory)}
            >
              {isFavorite(category.idCategory) ? 'Favorited' : 'Add to Favorites'}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Categories;



