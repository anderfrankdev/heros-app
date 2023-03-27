export interface LoginData{
	email:string,
	password:string
}

export interface AuthReducerProps {
	action:{
		type:"login" | "logout",
		payload:LoginData
	};
	state:{
		isLogged:Boolean,
		userData:Object | null
	};
}

export interface AuthActions {
	login:
		(	state:AuthReducerProps["state"],
			loginData:LoginData
		) => AuthReducerProps["state"],
	logout:(props:any)=>AuthReducerProps["state"]
}