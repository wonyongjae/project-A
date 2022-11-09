import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import OnOffSwitch from "../components/OnOffSwitch";
import Search from "../components/Search";
import { LogInButton, LogOutButton, SignUpButton, Users } from "../components/Auth";
import { userAuthState } from "../stores/userAuth";



const NavMenuList = ()=> {
  const menuList = ['yongjae', 'dashboard', 'gis map', 'settings'];
  return (
    <Navbar.Content hideIn="xs">
      {
        menuList.map((menu:string, index:number):any => (
        // <Navbar.Link key={index} className="py-2 px-4 rounded-lg m-5 hover:border-purple-400 hover:font-bold hover:border-4" href={`http://localhost:3000/${menu}`}>
        //   <Text color="secondary" className="hover:font-bold">{menu.toUpperCase()}</Text>
        // </Navbar.Link>
        <Button key={index} bordered color="gradient" className="" auto flat as={Link} href={`http://localhost:3000/${menu}`}>
          {menu.toUpperCase()}
        </Button>
        ))
      }
    </Navbar.Content>
  );
}

export default function Navigator() {
  const userState = useRecoilValue(userAuthState);
  const [active, setActive] = useState(false);

  const activeHandler = () => {
    setActive(!active);
  }



  return (
      <Navbar shouldHideOnScroll isBordered variant="sticky">
        <Navbar.Brand>
          <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $blue600 -20%, $purple600 70%",
              }}
              weight="bold"
            >
            <a href='/'>Project-A</a>
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
