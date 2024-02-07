import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function AppNavbar() {
    return (
        <>
            <Navbar>
                <NavbarBrand>
                    <p className="font-bold text-inherit">TU JAKIES LOGO LOL?</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            eeee
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            uuuuu
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            yyyyy
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="/login" variant="flat">
                            SIGN UP
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
}
