export const onLogout = ( navigate:Function ) => (event:any) => {
	navigate('/login',{
		replace:true
	})
}