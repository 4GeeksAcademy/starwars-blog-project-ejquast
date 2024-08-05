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
			getPlanets: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets?page=2&limit=10");
                    const data = await response.json();
                    
                    const planetsWithDetails = await Promise.all(
                        data.results.map(async (planet) => {
                            const planetResponse = await fetch(planet.url);
                            const planetData = await planetResponse.json();
                            const properties = planetData.result.properties;
                            return {
                                ...planet,
                                ...properties
                            };
                        })
                    );
                    setStore({ planets: planetsWithDetails });
                } catch (error) {
                    console.error("Error fetching planets:", error);
                }
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

			getStarships: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/starships?page=2&limit=10");
                    const data = await response.json();
                    
                    const starshipsWithDetails = await Promise.all(
                        data.results.map(async (starship) => {
                            const starshipResponse = await fetch(starship.url);
                            const starshipData = await starshipResponse.json();
                            const properties = starshipData.result.properties;
                            return {
                                ...starship,
                                ...properties
                            };
                        })
                    );
                    setStore({ starships: starshipsWithDetails });
                } catch (error) {
                    console.error("Error fetching starships:", error);
                }
            },
			
			setFavorite: (category, uid) => {
                // add liked item to favorites array
                const store = getStore();
                let item;
                if (category === "people") {
                    item = store.people.find(p => p.uid === uid);
                } else if (category === "planets") {
                    item = store.planets.find(p => p.uid === uid);
                } else if (category === "starships") {
                    item = store.starships.find(s => s.uid === uid);
                }
                if (item && !store.favorites.some(f => f.uid === uid)) {
                    setStore({
                        favorites: [...store.favorites, { ...item, category }]
                    });
                }
            },

            removeFavorite: (uid) => {
                setStore({
                    favorites: getStore().favorites.filter(item => item.uid !== uid)
                });
            }
		}
	};
};

export default getState;
