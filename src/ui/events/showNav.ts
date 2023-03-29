export const showNav = ():void=>{
	if(!window?.matchMedia("(max-width: 639px)")?.matches) return
	const nav = document.getElementById("items-container")
	if(!nav) return
	nav.classList.toggle("sm:hidden")
}