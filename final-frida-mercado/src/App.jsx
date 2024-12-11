import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/Favorites";
import { FavoritesProvider } from './context/FavoritesContext'; 

function App() {
	return (
		<FavoritesProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/recipes" element={<Recipes />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/recipes/:id" element={<Recipe />}/>
				<Route path="*" element={<h1>Not Found 404</h1>} />
			</Routes>
		</BrowserRouter>
		</FavoritesProvider>
	);
}

export default App;
