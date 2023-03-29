import { expect, describe,it } from "vitest";
import {authReducer} from "../authReducer";
import { initiaState } from "../../../data";

describe.concurrent('Tests in authReducer()',()=>{

	it.concurrent('should dispatch the loging action',async ()=>{
		const authState = authReducer(initiaState,{
			type:"login",
			payload: {
				email:"anderfrankdev@gmail.com",
				password:"123456"
			}
		})
		
		expect(authState).toEqual({
			isLogged:true,
			userData:{
				name:"Ander Carrasco"
			}
		}) 
		
	})

	it.concurrent('should return a clean state ',async ()=>{
		const authState = authReducer(initiaState,{
            type: "logout",
            payload: null
        })
		
		expect(authState).toEqual(initiaState) 
		
	})
})