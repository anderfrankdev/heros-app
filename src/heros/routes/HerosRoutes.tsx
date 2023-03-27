import { Navbar } from "../../ui"
import { DcPage } from "../"
import { MarvelPage } from "../"
import { Routes, Route, Navigate } from "react-router-dom"
import { SearchPage } from "../pages/SearchPage"
import { HeroPage } from "../pages/HeroPage"

export const HerosRoutes =()=>{
	
	return	(
	<>
	<Navbar/>
	<Routes>
		
		<Route 
			path="/*" 
			element={<Navigate to={"/marvel"} />}
		/>
		<Route path={`/hero/:id`} element={<HeroPage/>}/> 
		<Route 
			path="dc" 
			element={<DcPage/>}
		/>
		
		<Route 
			path="marvel" 
			element={
				<MarvelPage/>
			}

		/>
		<Route 
			path="search"
			element={<SearchPage/>} />

		<Route 
			path="search" 
			element={<SearchPage/>}
		/>

	</Routes>
	</>
)
} 