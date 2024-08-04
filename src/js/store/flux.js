const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			planets: [],
			people: [],
			starships: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets?page=2&limit=10")
				.then(response => response.json())
				.then(data => setStore({planets:data.results}))
				.catch(error => console.error("Error fetching planets:", error));
			},

			getCharacters: async () => {
                try {
                    // Fetch the list of people
                    const response = await fetch("https://www.swapi.tech/api/people?page=2&limit=10");
                    const data = await response.json();
                    
                    // Fetch additional details for each person
                    const peopleWithDetails = await Promise.all(
                        data.results.map(async (person) => {
                            // Fetch detailed information for each person
                            const personResponse = await fetch(person.url);
                            const personData = await personResponse.json();
                            // Extract detailed properties
                            const properties = personData.result.properties;
                            return {
                                ...person,
                                ...properties // Merge details into the person object
                            };
                        })
                    );
                    // Update the store with the detailed information
                    setStore({ people: peopleWithDetails });
                } catch (error) {
                    console.error("Error fetching characters:", error);
                }
            },

			getStarships: () => {
				fetch("https://www.swapi.tech/api/starships?page=2&limit=10")
				.then(response => response.json())
				.then(data => setStore({starships:data.results}))
				.catch(error => console.error("Error fetching starships:", error));
			},
			
			setFavorite: (category, id) => {
				// add liked item to favorites array
				if(category == "people"){
					for(let person of getStore().people) {
						if(id == person._id){
							setStore({
								favorites: [...getStore().favorites, person.properties.name]
							}) 
						} 
					}
				}
				else if(category == "planet"){
					for(let planet of getStore().planets) {
						if(id == planet._id){
							setStore({
								favorites: [...getStore().favorites, planet.properties.name]
							}) 
						}
					}
				}
				else if(category == "vehicle"){
					for(let vehicle of getStore().vehicles) {
						if(id == vehicle._id){
							setStore({
								favorites: [...getStore().favorites, vehicle.properties.name]
							}) 
						}
					} 
				} 
			},

			removeFavorite: (name) => {
				setStore({
					favorites: [...getStore().favorites.filter((items)=> name != items)]
				})
			}
		}
	};
};

export default getState;
