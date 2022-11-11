import { useRouter } from 'next/navigation';
import { useUserStateStore } from "../../stores/justand";
import { Button, Link } from "@nextui-org/react";

export function LogInButton() { //`http://localhost:3000/auth`
  const userLogInAndOut = useUserStateStore((state:any) => state.userLogInAndOut);
  return <Button bordered shadow onClick={userLogInAndOut} color="gradient" className="" auto flat as={Link} href="#"> 
        Login
      </Button>
};


export function LogOutButton() { 
  const userLogInAndOut = useUserStateStore((state:any) => state.userLogInAndOut);
  return <Button bordered shadow onClick={userLogInAndOut} color="gradient" className="" auto flat as={Link} href="#"> 
        Logout
      </Button>
};

export function SignUpButton() {
  const router = useRouter();
  return <Button bordered shadow onClick={() => router.push('/auth/sign')} color="gradient" className="" auto flat >
       Sign Up
    </Button>
};
