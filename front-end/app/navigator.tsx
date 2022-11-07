import React, { useState } from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import OnOffSwitch from '../components/onOffSwitch';

// 타입 수정
const NavMenuList = ({menu}:any)=> {
  return (
    <Navbar.Content hideIn="xs">
      {
        menu.map((item:string, index:number):any => (
        <Navbar.Link key={index} className="py-2 px-4 rounded-lg m-5 hover:border-purple-400 hover:font-bold hover:border-4" href={`http://localhost:3000/${item}`}>
          <Text color="secondary" className="hover:font-bold">{item.toUpperCase()}</Text>
        </Navbar.Link>
        ))
      }
    </Navbar.Content>
  );
}

export default function Navigator() {
  const menu = ['yongjae', 'dashboard', 'gis map', 'settings'];
  const [active, setActive] = useState(false);

  const activeHandler = () => {
    setActive(!active);
  }

  return (
      <Navbar shouldHideOnScroll isBordered variant="sticky">
        <Navbar.Brand>
          <Text b color="secondary" hideIn="xs"><a href='/'>LOGO</a></Text>
        </Navbar.Brand>
        <NavMenuList menu={menu}/>
        <Navbar.Content>
          <OnOffSwitch />
          <Button bordered color="gradient" className="hover:border-x-4" auto flat as={Link} href="#">
            Login
          </Button>
          <Button bordered color="gradient" auto flat as={Link} href="#">
            Sign Up
          </Button>
        </Navbar.Content>
      </Navbar>
  );
};
