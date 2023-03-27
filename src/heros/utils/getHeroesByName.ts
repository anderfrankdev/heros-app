import { heros } from "../data/heroes"

export const getHeroesByName = ( query:string ) => {

	if(!query) throw new Error(
		"We need a query with at leat one character"
	)

	const name = query.toLocaleLowerCase().trim()
	
	return heros.filter(
		hero => hero
				.superhero
			    .toLocaleLowerCase()
			    .includes(name)
	)
}