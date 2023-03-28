import { AuthActions, AuthReducerProps, LoginData } from "../../types"

const falseLogin = [
	JSON.stringify({
		email:"anderfrankdev@gmail.com",
		password:"123456"
	})
]

const login = ( 
	state:AuthReducerProps["state"],
	loginData:LoginData 
) => {
	
	if(!loginData) return state
	
	const loginDataString = JSON.stringify(loginData)
	if(!falseLogin.includes(loginDataString)) return state
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