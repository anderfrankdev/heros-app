import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
	
	return (
		<div data-testid="marvel">
			<h1 className="mt-6 m-4 mb-2 text-4xl font-bold">Marvel Comics</h1>

			<HeroList publisher={"Marvel Comics"}/>
		</div>
	)
}