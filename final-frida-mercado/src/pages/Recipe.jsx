import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategories } from '../services/getCategories';
import Layout from '../components/Layout';

const Recipe = () => {
  const { id } = useParams(); 
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getCategories()
      .then((response) => {
        const selectedCategory = response.find((cat) => String(cat.idCategory) === id);
        setCategory(selectedCategory);
      })
      .catch((error) => {
        console.error('Error fetching category:', error);
      });
  }, [id]);

  if (!category) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <section>
        <h2>{category.strCategory}</h2>
        <img src={category.strCategoryThumb} alt={category.strCategory} />
        <p>{category.strCategoryDescription}</p>
      </section>
    </Layout>
  );
};

export default Recipe;

