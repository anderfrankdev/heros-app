import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import {HerosRoutes} from "../heros/routes/HerosRoutes"
export const AppRouter = (
	<Routes>
		
		<Route 
			path="login" 
			element={<LoginPage />}
		/>

		<Route 
			path="/*" 
			element={<HerosRoutes/> }
		/>
	
	</Routes>
)