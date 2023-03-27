import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../utils/getHeroById";

export const HeroPage = () => {

	const {id} = useParams();
  	const navigate = useNavigate()

	if(!id) return <Navigate to="/marvel"/>
	const hero = useMemo( () => getHeroById(id) , [id])
	
	if(!hero) return <Navigate to="/marvel"/>
	
	document.querySelector(".app")?.scrollTo(0,0)
	
	return (
		<div id="hero-container"
			className="w-screen flex-auto sm:block items-start justify-center flex sm:h-fit">
			<div id="hero_info" className="h-fit bg-white rounded overflow-hidden p-0 sm:mb-0 mb-8 sm:p-0 sm:pt-8 items-start w-4/5 flex flex-row sm:flex-col shadow shadow-black sm:h-fit sm:w-screen sm:mt-0 mt-10">
				<div className={`
 					flex w-3/12 justify-center 
 					sm:mb-6 sm:mr-8 sm:mr-0 sm:mb-0 sm:w-screen 
 					relative 
					`}
				>
					<div 
						onClick={
							()=>navigate(-1)
						} 
						className="shadow-gray-900 z-50 shadow fixed left-4 top-32 w-12 h-12 bg-white flex justify-center items-center rounded-full"
					>
						<svg className="" height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M8.415 4.586a2 2 0 1 1 2.828 2.828L8.657 10H21a2 2 0 0 1 0 4H8.657l2.586 2.586a2 2 0 1 1-2.828 2.828L1 12l7.415-7.414z"></path></svg>					
					</div>
					<img src={"/heroes/"+`${hero.id}.jpg`}
						className={`
							animate__animated animate__fadeInLeft sm:w-72 w-full sm:h-96 sm:rounded
						`}
					/>
				</div>
				<div className={`
						animate__animated animate__fadeInRight p-8 sm:w-screen w-1/2 sm:m-auto sm:h-fit flex-auto
					`}
				>
					<div className="text-left sm:m-0 sm:text-center font-bold text-3xl">
					{hero.superhero}
					</div>
					<div className="text-left text-xl mt-4">
						<span className="font-bold mr-4">
							Alter ego: 
						</span> 
						<small>{hero.alter_ego}</small>
					</div>
					<div className="text-left text-xl mt-4">
						<span className="font-bold mr-4">
							Publisher: 
						</span> 
						<small>{hero.publisher}</small>
					</div>
					<div className="text-left text-xl mt-4">
						<span className="font-bold mr-4">
							First appearance: 
						</span> 
						<small>{hero.first_appearance}</small>
					</div>
					<div className="text-left text-xl mt-4">
						<span className="font-bold mr-4">
							Character: 
						</span> 
						<small>{hero.characters}</small>
					</div>
				</div>
			</div>
		</div>
	)
}