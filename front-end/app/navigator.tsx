import React, { useState } from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";

export default function Navigator() {
  const [active, setActive] = useState(false);

  const activeHandler = () => {
    setActive(!active);
  }

  return (
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            ACME
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
