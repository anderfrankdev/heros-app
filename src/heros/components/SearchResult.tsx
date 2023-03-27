import { HeroCard } from '../components/HeroCard'
import { SearchLoader } from '../components/SearchLoader'
import { SearchError } from '../components/SearchError'
import { memo } from 'react'

export const SearchResult = memo(({isLoading,hasErrors,query,heroes}:any)=>{
	
	const searchMatches = heroes.length>0

	const searchCards = heroes?.map((hero:any)=>
		//@ts-ignore
		<HeroCard key={hero?.id} hero={hero} />
	)

	const searchResult = 
		<div className={`
			flex flex-wrap sm:justify-center
		`}>
			{searchCards}
		</div>

	const matchMessage = 
		<div 
			className={`
				m-8 mb-0
			`}
		>
			We have found {heroes.length} heroes with <b>{query}</b> 
		</div>
	
	return (
		<div 
			className={`
				w-11/12 sm:m-0 sm:w-screen 
				m-auto bg-white rounded 
				shadow flex-auto mb-8 mt-6 h-fit
			`}
			id="hero_search_result"
		>
			{ isLoading && <SearchLoader query={query}/> }
			{ hasErrors && <SearchError query={query} /> }	
				
			{ searchMatches && matchMessage }
			{ searchMatches && searchResult}
		</div>
	)
})