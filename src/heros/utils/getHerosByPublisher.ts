import {heros} from "../data/heroes" 

export const getHerosByPublisher=(publisher:"Marvel Comics"|"DC Comics")=>{
	const validPublisher = ['DC Comics','Marvel Comics']
	
	if(!validPublisher.includes(publisher)){
		throw new Error(`${publisher} is not a valid publisher`);	
	}
	
	return heros.filter(hero=>hero.publisher===publisher)
}