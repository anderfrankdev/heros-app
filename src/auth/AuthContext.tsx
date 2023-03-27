import {createContext, useReducer} from 'react';
import { initiaState } from './data';
import { authReducer } from './hooks/reducers/authReducer';

export const AuthContext = createContext({} as any)

export const AuthProvider = ({children}:any)=>{

	const [authState,dispatchAuth] = useReducer(authReducer,initiaState)

	return (
		<AuthContext.Provider value={{authState,dispatchAuth}}>
			{children}
		</AuthContext.Provider>		
	)
}