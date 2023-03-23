import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
	
	return (
		<div>
			<h1 className="mt-8 m-4 text-4xl font-bold">Marvel Comics</h1>

			<HeroList publisher={"Marvel Comics"}/>
		</div>
	)
}