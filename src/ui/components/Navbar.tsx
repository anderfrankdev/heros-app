import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { showNav } from "../events";
import { onLogout } from "../events/onLogout";
import styles from './navbar.module.css';

const markActiveLink = (itemClass:string) => ({isActive}:any) => {

	return isActive
		? (`${itemClass} border-l-4 border-purple-500`)
		: itemClass
}

const markMarvelLink = markActiveLink(`${styles.logo_marvel} `)
const markDcLink = markActiveLink(`${styles.logo}`)

export const Navbar = ( ) =>{
	
	const { authState, dispatchAuth } = useContext(AuthContext)

	return (
	<nav data-testid='navbar' className={styles.container+" sm:justify-end"}
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
			<div className={styles.companies+" sm:flex-wrap"}>	
				<NavLink to={"/marvel"} className={markMarvelLink}>
					<img src="/marvel.svg" className="sm:w-20 sm:h-auto sm:ml-0 w-16"/>
				</NavLink>
				<NavLink to={"/dc"} className={markDcLink}>
					<img className="sm:w-14 sm:h-14 w-8 h-8 sm:ml-0 block" src="https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"/>
				</NavLink>
				<NavLink to={"/search"} 
					className={markActiveLink(
						`ml-14 sm:m-0 sm:mt-8 sm:w-full 
						pl-3 text-purple-600 flex items-center`)
					}>
					<svg className="mr-1" viewBox="0 0 24 24" height="32" width="32" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" ><path fill="currentColor" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path></svg>
					Search
				</NavLink>
			</div>
			<div id="nav_session" className="flex sm:flex-col sm:w-full items-center sm:mt-10">
				<div className="text-purple-800 mr-8 ml-8 sm:m-0 sm:w-full sm:mb-4">
					{authState.userData.name}
				</div>	
				<div data-testid="logout" className={"cursor-pointer hover:text-purple-600 sm:w-full"}
					onClick={onLogout(dispatchAuth)}>
					Logout
				</div>
			</div>
		</div>				
	</nav>
	)	
} 