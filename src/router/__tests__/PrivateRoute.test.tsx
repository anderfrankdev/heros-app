import { beforeEach, describe, expect, it, vi } from "vitest";
import { AuthContext } from "../../auth/AuthContext";
import { initiaState } from "../../auth/data";
import { PrivateRoute } from "../PrivateRoute";
import { render, screen } from '../../utils/test-utils'
import { MemoryRouter,Navigate, Route, Routes } from "react-router-dom";

vi.mock('react-router-dom',async ()=>{
	const actual = await vi.importActual<any>('react-router-dom')
		  	
  	return Object.assign(
  		{},
  		actual,
  		{Navigate:vi.fn(actual.Navigate)}
  	)
})

beforeEach(()=>{
	vi.clearAllMocks()
})

describe.concurrent('Tests in <PrivateRoute/>',()=>{

	it.concurrent('Should call Navigate',async ()=>{
		
		render(
			<AuthContext.Provider value={{authState:initiaState}}>
				<MemoryRouter initialEntries={['/marvel']}>

					<Routes>	
						<Route path="marvel" element={
							<PrivateRoute>
								<h1>PrivateRoute</h1>
							</PrivateRoute>
						}/>
						<Route path="auth/login" element={
							<h1>PublicRoute</h1>
						}/>		
					</Routes>
					
				</MemoryRouter>
			</AuthContext.Provider>
		)

		expect(Navigate)
			.toHaveBeenCalledWith({
		       "replace": true,
		       "to": "/auth/login",
		     },{})

	})

	it.concurrent('Should show PrivateRoute',async ()=>{

		render(
			<AuthContext.Provider value={{authState:{isLogged:true}}}>
				<PrivateRoute>
					<h1>PrivateRoute</h1>
				</PrivateRoute>
			</AuthContext.Provider>
		)

		expect(screen.getByText("PrivateRoute"))
			.toBeTruthy()
		
		expect(Navigate)
			.not
			.toHaveBeenCalled()
	})

	it.concurrent('Should redirect if not logged',async ()=>{
		render(
			<AuthContext.Provider value={{authState:initiaState}}>
				<MemoryRouter initialEntries={['/marvel']}>

					<Routes>	
						<Route path="marvel" element={
							<PrivateRoute>
								<h1>PrivateRoute</h1>
							</PrivateRoute>
						}/>
						<Route path="auth/login" element={
							<h1>PublicRoute</h1>
						}/>		
					</Routes>
					
				</MemoryRouter>
			</AuthContext.Provider>
		)

		expect(screen.getByText("PublicRoute"))
			.toBeTruthy()
		
		expect(Navigate)
			.toHaveBeenCalledOnce()
	})
})

