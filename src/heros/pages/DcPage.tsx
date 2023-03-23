import { HeroList } from "../components/HeroList"

export const DcPage = () => {

	return (
		<div>
			<h1 className="mt-6 m-4 mb-2 text-4xl font-bold">Dc Comics</h1>
			<HeroList publisher={"DC Comics"}/>
		</div>
	)
}