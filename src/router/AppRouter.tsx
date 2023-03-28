import { Routes, Route } from "react-router-dom"
import { AuthRouter } from "../auth/router/AuthRouter"
import {HerosRoutes} from "../heros/router/HerosRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"
export const AppRouter = (
	<Routes>
		<Route 
			path="auth/*" 
			element={
				<PublicRoute>
					<AuthRouter/>	
				</PublicRoute>
			}
		/>
		<Route 
			path="/*" 
			element={
				<PrivateRoute>
					<HerosRoutes/>
				</PrivateRoute>
			}
		/>
	</Routes>
)