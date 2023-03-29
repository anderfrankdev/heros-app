export interface LoginData{
	email:string,
	password:string
}

type actionTypes = "login" | "logout"

export interface AuthReducerProps {
	action:{
		type:actionTypes,
		payload:LoginData|null
	};
	state:{
		isLogged:Boolean,
		userData:Object | null
	};
}

export interface AuthActions {
	login:
		(	state:AuthReducerProps["state"],
			loginData:LoginData|null
		) => AuthReducerProps["state"],
	logout:(props:any)=>AuthReducerProps["state"]
}