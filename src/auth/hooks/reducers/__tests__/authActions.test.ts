import { expect, describe,it } from "vitest";
import {authActions} from "../authActions";
import { initiaState } from "../../../data";

describe.concurrent('Tests in authActions()',()=>{

	it.concurrent('should return the user data when logged',async ()=>{

		let authState = authActions["login"](initiaState,{
			email:"anderfrankdev@gmail.com",
			password:"123456"
		})
		
		expect(authState).toEqual({
			isLogged:true,
			userData:{
				name:"Ander Carrasco"
			}
		}) 
		
	})

	it.concurrent('should return a clean state ',async ()=>{

		let authState = authActions["logout"](null)
		
		expect(authState).toEqual(initiaState) 
		
	})
})