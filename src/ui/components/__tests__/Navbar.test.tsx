import { describe, expect, it,vi } from "vitest";
import { AuthContext } from "../../../auth/AuthContext";
import { fireEvent, render, screen } from '../../../utils/test-utils'
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../Navbar";
import { PrivateRoute } from "../../../router/PrivateRoute";

describe('Tests in <Navbar/>',async ()=>{

	it('Should dispatch a logout',async ()=>{
		Window.prototype.matchMedia=vi.fn()
		
		let authState:any = {
			isLogged:true,
			userData:{
				name:"Ander Carrasco"
			}
		}
		const dispatchAuth=vi.fn()
		render(
			<AuthContext.Provider value={{authState,dispatchAuth}}>
				<MemoryRouter initialEntries={['/marvel']}>
					<PrivateRoute>
						<Navbar/>					
					</PrivateRoute>
				</MemoryRouter>
			</AuthContext.Provider>
		)
		const logoutBtn = screen.getByTestId("logout")
		fireEvent.click(logoutBtn)

		expect(dispatchAuth).toHaveBeenCalledWith({
       		"type": "logout",
    	})
	})
})

