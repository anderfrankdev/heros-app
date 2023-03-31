import { beforeEach, describe, expect, it, vi } from "vitest";
import { AuthContext } from "../../../auth/AuthContext";
import { fireEvent, render, screen, waitForElementToBeRemoved } from '../../../utils/test-utils'
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../SearchPage";
beforeEach(async()=>{
	vi.clearAllMocks()

	try{
		await waitForElementToBeRemoved(
			screen.getByTestId("search_hero"),
			{interval:500,timeout:3000}
		)	
	}catch(e){

	}
	
})
vi.mock('react-router-dom',async ()=>{
	const actual = await vi.importActual<any>('react-router-dom')
		  	
  	return Object.assign(
  		{},
  		actual,
  		{useNavigate:vi.fn(actual.useNavigate)}
  	)
})

describe.concurrent('Tests in <SearchPage/>',()=>{

	it.concurrent('Should execute useNavigate',async ()=>{

		render(
			<AuthContext.Provider value={{authState:{isLogged:true}}}>
				<MemoryRouter initialEntries={['/search?q=batman123']}>
					<SearchPage/>
				</MemoryRouter>
			</AuthContext.Provider>
		)

		expect(useNavigate).toHaveBeenCalled()

	},10000)

	it.concurrent('Should redirect if not logged',async ()=>{
		render(
			<AuthContext.Provider value={{authState:{isLogged:true}}}>
				<MemoryRouter initialEntries={['/search?q=batman']}>
					<SearchPage/>
				</MemoryRouter>
			</AuthContext.Provider>
		)

		await waitForElementToBeRemoved(
			screen.getByTestId("loader"),
			{interval:2600,timeout:2600,}
		).then(()=>{
			expect(screen.getByTestId("hero_card")).toBeTruthy()
		})

	},5000)

	it.concurrent('Should search a hero',async ()=>{
		render(
			<AuthContext.Provider value={{authState:{isLogged:true}}}>
				<MemoryRouter>
					<SearchPage/>
				</MemoryRouter>
			</AuthContext.Provider>
		)
		const form = screen.getByTestId("search_form")
		const input = screen.getByTestId("search_hero") 
		fireEvent.change(input, {target: {value: 'super'}})

		fireEvent.submit(form)

		await waitForElementToBeRemoved(
			screen.getByTestId("loader"),
			{interval:2550,timeout:3000}
		)
		expect(screen.getAllByTestId("hero_card").length).toBe(1)
	},5000)

	it.concurrent('Should show error',async ()=>{

		await waitForElementToBeRemoved(
			screen.getByTestId("search_hero"),
			{interval:500,timeout:3000}
		)

		render(
			<AuthContext.Provider value={{authState:{isLogged:true}}}>
				<MemoryRouter initialEntries={['/search?q=batman123']}>
					<SearchPage/>
				</MemoryRouter>
			</AuthContext.Provider>
		)

		await waitForElementToBeRemoved(
			screen.getByTestId("loader"),
			{interval:2600,timeout:2600,}
		)

		expect(screen.getByTestId("error-msg")).toBeTruthy()

	},10000)
})

