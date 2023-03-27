import { AuthReducerProps } from "../../types"
import { authActions } from "./authActions"

export const authReducer = ( 
	state:AuthReducerProps["state"], 
	action:AuthReducerProps["action"] 
) => {
	
	const {type,payload} = action

	if(!authActions[type]){ 
		throw new Error('Action does not exist')
	}

	const selectedAction = authActions[type]

	return selectedAction(state,payload)

}	