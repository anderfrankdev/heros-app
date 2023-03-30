import { describe, expect, it } from "vitest";
import { AuthContext } from "../../auth/AuthContext";
import { initiaState } from "../../auth/data";
import { render, screen } from '../../utils/test-utils'
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../AppRouter";

describe.concurrent('Tests in <PrivateRoute/>',()=>{

	it('Should redirect if not logged',async ()=>{
		render(
			<AuthContext.Provider value={{authState:initiaState}}>
				<MemoryRouter initialEntries={['/marvel']}>
					{AppRouter}
				</MemoryRouter>
			</AuthContext.Provider>
		)

		expect(screen.getByTestId("login"))
			.toBeTruthy()
	})

	it.concurrent('Should redirect if logged',async ()=>{
		
		const authState = {
			isLogged:true,
			userData:{
				name:"Ander Carrasco"
			}
		}
		
		render(
			<AuthContext.Provider value={{authState}}>
				<MemoryRouter initialEntries={['/auth/login']}>
					{AppRouter}
				</MemoryRouter>
			</AuthContext.Provider>
		)

		expect(screen.getByTestId("marvel"))
			.toBeTruthy();

		expect(screen.getByText("Ander Carrasco"))
			.toBeTruthy();


	})

})

