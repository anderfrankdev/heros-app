export const onLogout = ( 
	dispatchAuth:any
) => (event:any) => {
	
	dispatchAuth({
		type:"logout"
	})
}