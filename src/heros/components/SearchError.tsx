import { memo } from "react"

export const SearchError = memo(({query}:any) => {
	
	return (
		<div 
			id='error-msg'
			className={`
				flex items-center
				flex-col w-fit m-auto
				p-8 px-16 mt-8  sm:mx-8
				animate__animated animate__fadeIn
			`}>
			<img 
				src="/skull.svg" 
				alt=""
				height={48}
				width={48}
				className={`mb-4`}
			/>
			<span
				className={`
					font-bold text-2xl text-red-500
				`}
			>The are not results for {query}</span>						
		</div>
	)
})