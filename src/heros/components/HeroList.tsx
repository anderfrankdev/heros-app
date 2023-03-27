import { useMemo } from 'react'
import { getHerosByPublisher } from '../utils/getHerosByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}:any) => {
	
	const heros = useMemo(
		()=>getHerosByPublisher((publisher as any)),
		[publisher]
	)

	
	return (
		<div className='flex w-screen justify-evenly overflow-x-hidden flex-wrap'>
			{(heros as any).map((hero:any)=><HeroCard key={hero.superhero} hero={hero}/>)}
		</div>
	)
}