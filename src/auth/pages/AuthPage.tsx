import { LoginForm } from "../components/LoginForm";

export const AuthPage = ({authAction}:any) => {

	return (
      <>
        {authAction.includes("login")?<LoginForm/>:null}      
      </>
    );
}