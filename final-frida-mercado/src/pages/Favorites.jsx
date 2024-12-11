import Layout from "../components/Layout";
import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  return (
    <Layout>
    <main>
      <h1>Your Favorite Recipes</h1>
      <div>
        {favorites.length === 0 ? (
          <p>You do not have any favorites added :( </p>
        ) : (
          <ul>
            {favorites.map((recipe) => (
              <li key={recipe.idCategory}>
                <h3>{recipe.strCategory}</h3>
                <button onClick={() => removeFromFavorites(recipe.idCategory)}>
                Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
    </Layout>
  );
};

export default Favorites;

