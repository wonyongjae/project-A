import { Button, Link, User } from "@nextui-org/react";
import { useRecoilState } from "recoil";
import { userAuthState } from "../stores/userAuth";

export function LogInButton() { //`http://localhost:3000/auth`
  const [userAuth, setUserAuth] = useRecoilState(userAuthState);
  const authHandler = () => {
    setUserAuth(!userAuth);
  };
  return <Button bordered onClick={authHandler} color="gradient" className="" auto flat as={Link} href="#"> 
        Login
      </Button>
};


export function LogOutButton() { 
  const [userAuth, setUserAuth] = useRecoilState(userAuthState);
  const outHandler = () => {
    setUserAuth(false);
  };
  return <Button bordered onClick={outHandler} color="gradient" className="" auto flat as={Link} href="#"> 
        Logout
      </Button>
};

export function SignUpButton() {
  return <Button bordered color="gradient" className="" auto flat as={Link} href="#">
       Sign Up
    </Button>
};

export function Users() {
  return (
    <User
      src="me.png"
      name="Hello"
    />
  );
}