import { memo } from "react"
import { useNavigate } from "react-router-dom";

export const SearchForm = memo(({search,setForm,styles}:any)=>{
	const navigate = useNavigate();
	
	const handleSubmit =  (event:any)=>{
		event?.preventDefault();
		if(search.trim().length<1) return
		navigate(`?q=${search.toLowerCase().trim()}`)
	}

	return (
		<form
			data-testid="search_form"
			onSubmit={handleSubmit}
			className={
				styles.form
				+" sm:flex-col"
				+" mx-8"
			}>
			<input
				id="search_hero"
				data-testid="search_hero"
				className={
					styles.searchInput
					+" focus:outline-blue-500"
					+" active:outline-blue-500"
					+" sm:w-full placeholder:font-normal"
					+" sm:mb-4 pl-4 font-bold"
				} type="text" name='search' 
				autoComplete='off'
				placeholder='Search some heros'
				value={search}
				onChange={(event:any)=>
					setForm({
						search:event.target.value
					})
				}
				
			/>
			<input
				className={
					styles.submitInput
					+" sm:w-full"
					+" sm:m-0"
				} 
				type="submit" value="Look up" 
			/>
		</form>
	)
})