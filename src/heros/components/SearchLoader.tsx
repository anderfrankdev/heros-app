import { memo } from "react"

export const SearchLoader = memo(({query}:any) =>{

	return (
		<div 
			id='loader'
			data-testid="loader"
			className={`
				flex items-center
				flex-col w-fit m-auto
				p-8 px-16 mt-8  sm:mx-8
			`}>
			<img 
			 	src="/hero.svg" 
			 	alt="" 
			 	height={48} 
			 	width={48}
			 	className={`mb-4 animate-bounce`}
			 />
			<span
				className={`
				animate-pulse 
				font-bold 
				text-2xl 
				text-purple-600
			`}
			>We are looking for {query}...</span>						
		</div>
	)

})