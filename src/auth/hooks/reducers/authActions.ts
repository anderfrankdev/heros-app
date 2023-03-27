import { AuthActions, AuthReducerProps, LoginData } from "../../types"

const login = ( 
	state:AuthReducerProps["state"],
	loginData:LoginData 
) => {
	
	if(!loginData) return state

	const newState:AuthReducerProps["state"] = {
		isLogged:true,
		userData:{
			name:"Ander Carrasco"
		}
	}

	return newState

}

const logout = (props:any) => {
	return {
		isLogged:false,
		userData:null
	}
}

export const authActions:AuthActions = {	
	login,
	logout
}