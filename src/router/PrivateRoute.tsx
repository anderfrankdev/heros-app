import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/AuthContext"

export const PrivateRoute = ({children}:any) => {
	const {authState} = useContext(AuthContext)
	return (authState.isLogged)
		? children
		: <Navigate to="/auth/login" replace={true}/>
}