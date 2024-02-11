import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image } from "@nextui-org/react";

export default function AppNavbar() {
    return (
        <div className="w-full bg-dark-900 text-black fixed top-2 left-3 z-50">
            <Navbar>
                <NavbarBrand className="font-bold text-black">
                    <Link color="foreground" href="/" aria-current="page">
                        <Image
                            width={50}
                            alt="To logo jest"

                            src="https://banner2.cleanpng.com/20180131/are/kisspng-download-icon-anonymous-transparent-background-5a7281aaf0ca20.0305506815174537389863.jpg"
                        />
                    </Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-6 left-5" justify="center">
                    <NavbarItem isActive>
                        <Link color="foreground" href="/favourites" aria-current="page">
                            ULUBIONE
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link color="foreground" href="/auctions" aria-current="page">
                            AUKCJE
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link color="foreground" href="/search" aria-current="page">
                            SZUKAJ
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/cart">
                            KOSZYK
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link as={Link} color="primary" href="/login">
                            SIGN UP
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    );
}
