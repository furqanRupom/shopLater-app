
"use client";
import Image from "next/image";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
import Link from "next/link";

export const NavBar = () => {
    return (
        <Navbar fluid={true}>
            <Navbar.Container className="flex items-center justify-between text-xl">
                <Navbar.Container className="flex items-center">
                    <Navbar.Brand>
                        <Image
                            src="https://i.ibb.co/2vnjz9K/green-leaf-nature-shopping-bag-retail-commerce-logo-design-23758-526.png"
                            alt="keep"
                            width="100"
                            height="40"
                        />
                    </Navbar.Brand>
                    <Navbar.Divider></Navbar.Divider>
                    <Navbar.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-8 text-2xl"
                    >
                        <Navbar.Link linkName="Home" href="/" />
                        <Navbar.Link linkName="Prouducts" href="/product" />
                        <Navbar.Link linkName="Posts" href="/posts" />
                    </Navbar.Container>
                    <Navbar.Collapse collapseType="sidebar">
                        <Navbar.Container tag="ul" className="flex flex-col gap-5 ">
                            <Navbar.Link linkName="Home" href="/" />
                            <Navbar.Link linkName="Prouducts" href="/product" />
                            <Navbar.Link linkName="Posts" href="/posts" />
                        </Navbar.Container>
                    </Navbar.Collapse>
                </Navbar.Container>

                <Navbar.Container className="flex gap-2">
                    <Button size="sm" variant="link">
                        <span>
                            <MagnifyingGlass size={20} color="#444" />
                        </span>
                        <span className="ml-2 text-metal-600">Search</span>
                    </Button>
                   <Link href="/contact">
                        <Button className="bg-green-400 hover:bg-green-500" size="sm">
                            Contact
                        </Button>
                   </Link>
                    <Navbar.Toggle />
                </Navbar.Container>
            </Navbar.Container>
        </Navbar>
    );
}
