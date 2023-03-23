import { HeroList } from "../components/HeroList"

export const DcPage = () => {


	return (
		<div>
			<h1 className="mt-8 m-4 text-4xl font-bold">Dc Comics</h1>
			<HeroList publisher={"DC Comics"}/>
		</div>
	)
}