import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { getHeroesByName } from '../utils/getHeroesByName'

export const useSearch =()=>{
	const navigate = useNavigate();
	const location = useLocation();

	const {q} = queryString.parse( location.search )
	
	const [form,setForm]=useState({
		search:""
	})

	const [state, setState] = useState({
		hasErrors:false,
		isLoading:!q ? false :true,
		heroes:[]
	})

	useEffect(()=>{
		if(!q) return
		setForm({search:`${q}`})	
		setState({
			hasErrors:false,
			isLoading:true,
			//@ts-ignore
			heroes:[]
		})
		
		setTimeout(()=>{
			const result = getHeroesByName(q as string)
		
				if(result.length>0)
					setState({
						hasErrors:false,
						isLoading:false,
						//@ts-ignore
						heroes:result
					})
		
				if(!result[0]) 
					setState({
						hasErrors:true,
						isLoading:false,
						//@ts-ignore
						heroes:[]
					})
			},2500)
	},[q])

	return {
		...form,
		...state,
		navigate,
		setForm,
		setState,
		query:q
	}
}