const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			setFavorite: (category, id) => {
				// add liked item to favorites array
				if(category == "person"){
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
