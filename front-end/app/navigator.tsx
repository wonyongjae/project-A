import React, { useState } from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import OnOffSwitch from './onOffSwitch';

export default function Navigator() {
  const [active, setActive] = useState(false);

  const activeHandler = () => {
    setActive(!active);
  }

  return (
      <Navbar shouldHideOnScroll isBordered variant="sticky">
        <Navbar.Brand>
          <Text b color="secondary" hideIn="xs">
            <a href='/'>
              LOGO
            </a>
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link isActive={active} onClick={activeHandler} href="https://wonyongjae.github.io/">GitHub</Navbar.Link>
          <Navbar.Link isActive={active} onClick={activeHandler} href="https://www.notion.so/wonyongjae/">Notion</Navbar.Link>
          <Navbar.Link isActive={active} onClick={activeHandler} href="http://localhost:3000/dashboard">DashBoard</Navbar.Link>
          <Navbar.Link isActive={active} onClick={activeHandler} href="#">Empty</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <OnOffSwitch />
          </Navbar.Item>
          <Navbar.Item>
            <Button bordered color="gradient" auto flat as={Link} href="#">
              Login
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Button bordered color="gradient" auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
  );
};
