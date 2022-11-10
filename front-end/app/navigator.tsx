import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { useRecoilValue } from "recoil";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import OnOffSwitch from "../components/OnOffSwitch";
import Search from "../components/Search";
import { LogInButton, LogOutButton, SignUpButton } from "../components/Buttons/Auth";
import Users from '../components/users/Users';
import { userAuthState } from "../stores/userAuth";



const NavMenuList = ()=> {
  const router = useRouter();
  const menuList = ['dashboard', 'gis map', 'settings'];
  return (
    <Navbar.Content hideIn="xs">
      {
        menuList.map((menu:string, index:number):any => (
        // <Navbar.Link key={index} className="py-2 px-4 rounded-lg m-5 hover:border-purple-400 hover:font-bold hover:border-4" href={`http://localhost:3000/${menu}`}>
        //   <Text color="secondary" className="hover:font-bold">{menu.toUpperCase()}</Text>
        // </Navbar.Link>
        <Button key={index} onClick={() => router.push(`/${menu}`)} bordered shadow color="gradient" className="" auto flat >
          {menu.toUpperCase()}
        </Button>
        ))
      }
    </Navbar.Content>
  );
}

export default function Navigator() {
  const router = useRouter();
  const userState = useRecoilValue(userAuthState);
  const [active, setActive] = useState(false);

  return (
      <Navbar shouldHideOnScroll isBordered variant="sticky">
        <Navbar.Brand>
          <Text
              h1
              as={Link}
              onClick={() => router.replace('/')} 
              size={60}
              css={{
                textGradient: "45deg, $blue600 -20%, $purple600 70%",
              }}
              weight="bold"
            >
            Project-A
          </Text>
        </Navbar.Brand>
        <NavMenuList />
        <Navbar.Content>
          <Search />
          <OnOffSwitch />
          { userState 
            ? <><Users /><LogOutButton /></> 
            : <><LogInButton /><SignUpButton /></>
            }
        </Navbar.Content>
      </Navbar>
  );
};
