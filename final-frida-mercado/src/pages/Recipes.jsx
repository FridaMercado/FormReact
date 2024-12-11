import Layout from "../components/Layout";
import Categories from '../components/recipes/Categories';

function Recipes() {
	return (
		<Layout>
			<main>
				<h1>Recipes</h1>
				<div>
					<Categories/>
				</div>
			</main>
		</Layout>
	);
}
export default Recipes;
