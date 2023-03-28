import { useNavigate } from "react-router-dom";
import { useContext, useLayoutEffect, useRef } from "react";
import { AuthContext } from "../AuthContext";

export const LoginForm = ( ) =>{
	const navigate = useNavigate()
	const { authState, dispatchAuth } = useContext(AuthContext)
	const emailInputRef:any = useRef(null)
	const passwordInputRef:any = useRef(null)
	
	const onLogin = (e:SubmitEvent) => {
		e.preventDefault()
		if(!(emailInputRef.current).value){ 
			return
		}
		if(!(passwordInputRef.current).value){ 
			return
		}
		
		dispatchAuth({
			type:"login",
			payload:{
				email:emailInputRef.current.value,
				password:passwordInputRef.current.value
			}
		})
	
	}

	useLayoutEffect(()=>{
		if(authState.isLogged){
			navigate("/",{
				replace:true
			})		
		}
	},[authState])

	return(
		<section className="bg-gray-50 dark:bg-gray-900 h-screen">
	        <div className="w-1/2 sm:w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
	        	<a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
	            	<img className="w-8 h-8 mr-2" src="/hero.svg" alt="logo" />
	            	HeroApp    
	        	</a>
	        	<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
		            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
		             	<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
		                	Sign in to your account
		            	</h1>
		            	<form className="space-y-4 md:space-y-6" action="#" onSubmit={onLogin}>
			                <div>
			                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
			                  <input ref={emailInputRef} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
			                </div>
			                <div>
			                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
			                  <input ref={passwordInputRef} type="password" autoComplete="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
			                </div>
			                <div className="flex items-center justify-between">
			                	<div className="flex items-start">
				                    <div className="flex items-center h-5">
				                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
				                    </div>
				                    <div className="ml-3 text-sm">
				                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
				                    </div>
			                	</div>
			                	<a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
				            </div>
				            <button type="submit" className="w-full text-white bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
				            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
				            	Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
				            </p>
		            	</form>
		            </div>
	        	</div>
	    	</div>
	    </section>	
	)
} 