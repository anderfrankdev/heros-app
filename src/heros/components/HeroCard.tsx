import { Link, useNavigate } from "react-router-dom";

export const HeroCard=({hero}:any)=>{
  const navigate = useNavigate()
	
	const imgSrc = `/heroes/${hero.id}.jpg`
  
  const onGoToHero = (id:string)=> 
    (event:any) => navigate(`/hero/${id}`)
	
  return (
      <div onClick={onGoToHero(hero.id)} className="m-8 w-56 pb-5 cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="w-full rounded h-64" src={imgSrc} alt="product image" />
        <div className="px-5 py-5 pb-5">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{hero.superhero}</h2>
        </div>
        <div className="px-5 pb-1">
            <p className="tracking-tight text-gray-900 dark:text-white">{hero.alter_ego}</p>
        </div>
        <div className="px-5 pb-1">
            <p className="tracking-tight text-gray-900 dark:text-white"><small>{hero.first_appearance}</small></p>
        </div>
        <div className="px-5 pb-1">
            <Link to={`/hero/${hero.id}`} className="tracking-tight text-gray-900 dark:text-white text-purple-700"><small>Más...</small></Link>
        </div>
      </div>
    );
}