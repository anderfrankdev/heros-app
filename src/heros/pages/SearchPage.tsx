import styles from './SearchPage.module.css'
import { useSearch } from '../hooks/useSearch'
import { SearchResult } from '../components/SearchResult'
import { SearchForm } from '../components/SearchForm'

export const SearchPage = () => {

	const {
		hasErrors,
		isLoading, 
		heroes,
		search,
		setForm,
		query
	} = useSearch()
	
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Look for some heros</h1>
			<SearchForm 
				search={search} 
				styles={styles}
				setForm={setForm}
			/>
			{!!query && 
				<SearchResult 
					hasErrors={hasErrors}
					isLoading={isLoading}
					query={query}
					heroes={heroes}
				/>
			}
		</div>

	)
}
