import { describe, expect, it } from "vitest";
import { AuthContext } from "../../auth/AuthContext";
import { initiaState } from "../../auth/data";
import { PublicRoute } from "../PublicRoute";
import {render, screen} from '../../utils/test-utils'
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe.concurrent('Tests in <PublicRoute/>',()=>{

	it.concurrent('Should show PublicRoute',async ()=>{

		render(
			<AuthContext.Provider value={{authState:initiaState}}>
				<PublicRoute>
					<h1>PublicRoute</h1>
				</PublicRoute>
			</AuthContext.Provider>
		)

		expect(screen.getByText("PublicRoute"))
			.toBeTruthy()
		
	
	})

	it.concurrent('Should redirect if logged',async ()=>{
		const authState ={
			isLogged:true
		}
		render(
			<AuthContext.Provider value={{authState}}>
				<MemoryRouter initialEntries={['/login']}>

					<Routes>	
						<Route path="login" element={
							<PublicRoute>
								<h1>PublicRoute</h1>
							</PublicRoute>
						}/>
						<Route path="marvel" element={
							<h1>Pagina Marvel</h1>
						}/>				
					</Routes>
					
				</MemoryRouter>
			</AuthContext.Provider>
		)

		expect(screen.getByText("Pagina Marvel"))
			.toBeTruthy()
	
	})

})

