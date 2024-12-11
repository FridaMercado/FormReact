export const getCategories = async () => {
	const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
	try {
		const data = await fetch(url);
		const response = await data.json();
		
		if (response.categories) {
			return response.categories; 
		}
		return [];

		} catch (error) {
			console.error("Fetch Error", error);
			return [];
		}
};


