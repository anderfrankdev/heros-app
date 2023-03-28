import { Routes, Route, Navigate } from "react-router-dom"
import { AuthPage } from "../pages/AuthPage"

export const AuthRouter = () => {

	return (
		<Routes>
			<Route 
				path="/*" 
				element={<Navigate to={"/auth/login"} />}
			/>
			<Route 
				path="login" 
				element={<AuthPage authAction="login" />}
			/>
		</Routes>
	)
}