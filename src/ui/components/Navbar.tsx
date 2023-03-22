import { NavLink } from "react-router-dom"
import { showNav } from "../events"
import styles from './navbar.module.css'

const markActiveLink = (itemClass:string) => ({isActive}:any) => {

	return isActive
		? (`${itemClass} border-l-4 border-purple-500`)
		: itemClass
}

const markMarvelLink = markActiveLink(`${styles.logo_marvel} `)
const markDcLink = markActiveLink(`${styles.logo}`)

export const Navbar = (
	<nav className={styles.container+" sm:justify-end"}
		>
		<div className={`${styles.menu_icon} sm:flex`} 
			onClick={showNav} 
		>
			<div className= {`${styles.menu_item}`}></div>
			<div className={`${styles.menu_item} my-1.5`}></div>
			<div className={`${styles.menu_item}`}></div>
		</div>
		<div id="items-container"
			onClick={showNav}
			className={`${styles.items_container} sm:hidden`}>
			<div className={styles.companies+""}>	
				<NavLink to={"/marvel"} className={markMarvelLink}>
					<img src="/marvel.svg" className="sm:w-20 sm:h-auto sm:ml-0 w-16"/>
				</NavLink>
				<NavLink to={"/dc"} className={markDcLink}>
					<img className="sm:w-14 sm:h-14 w-8 h-8 sm:ml-0 block" src="https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"/>
				</NavLink>
			</div>
			<div className="flex sm:flex-col sm:w-full items-center sm:mt-10">
				<div className="text-purple-800 mr-8 ml-8 sm:m-0 sm:w-full sm:mb-4">
					Ander
				</div>	
				<div className={"cursor-pointer hover:text-purple-600 sm:w-full"}>
					Logout
				</div>
			</div>
		</div>				
	</nav>
)