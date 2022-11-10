import { useRouter } from 'next/navigation';
import { useRecoilState } from "recoil";
import { userAuthState } from "../../stores/userAuth";
import { Button, Link, User, Popover } from "@nextui-org/react";

export function LogInButton() { //`http://localhost:3000/auth`
  const [userAuth, setUserAuth] = useRecoilState(userAuthState);
  const authHandler = () => {
    setUserAuth(!userAuth);
  };
  return <Button bordered shadow onClick={authHandler} color="gradient" className="" auto flat as={Link} href="#"> 
        Login
      </Button>
};


export function LogOutButton() { 
  const [userAuth, setUserAuth] = useRecoilState(userAuthState);
  const outHandler = () => {
    setUserAuth(false);
  };
  return <Button bordered shadow onClick={outHandler} color="gradient" className="" auto flat as={Link} href="#"> 
        Logout
      </Button>
};

export function SignUpButton() {
  const router = useRouter();

  return <Button bordered shadow onClick={() => router.push('/auth/sign')} color="gradient" className="" auto flat >
       Sign Up
    </Button>
};
