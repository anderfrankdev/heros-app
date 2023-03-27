import { heros } from "../data/heroes"

export const getHeroById=(id:string)=>{

	return heros.filter( hero => hero.id === id )[0] 
		|| false	

}