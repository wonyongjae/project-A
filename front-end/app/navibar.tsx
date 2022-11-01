'use client';
import { Navbar } from "@nextui-org/react";
import { useState } from 'react';

export default function Navibar(){
    const [variant, setVariant] = useState('static');
    return (
        // <Navbar isBordered variant={variant}>
            
        // </Navbar>
        <Navbar.Content>
            <Navbar.Link>a</Navbar.Link>
            <Navbar.Link>b</Navbar.Link>
            <Navbar.Link>c</Navbar.Link>
        </Navbar.Content>
    );
};