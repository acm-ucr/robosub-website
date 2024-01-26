"use client";
import logo from "../public/logo.png";
import React, { useState } from "react";
import Link from "next/link";
import { items } from "@/data/navigation";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const [selected, setSelected] = useState("");
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="absolute top-0 z-30 h-24 bg-robosub-black opacity-70 w-full flex justify-between items-center backdrop-blur-sm"
    >
      <Navbar.Brand className="p-0 hover:opacity-60 duration-300">
        <Link className="p-0 flex items-center ml-4" href="/">
          <Image alt="logo" src={logo} />
        </Link>
      </Navbar.Brand>
      <Navbar.Collapse className="items-center md:justify-end justify-center flex">
        <Nav className="mb-2 mr-16 flex text-xl items-center">
          {items.map((item, index) => (
            <Nav.Link
              href={item.link}
              key={index}
              onClick={() => {
                setSelected(item.name);
              }}
              className={`mb-0  px-4 whitespace-nowrap mr-20 hover:text-robosub-yellow duration-300 ${
                selected === item.name && "underline"
              }`}
            >
              {item.name}
            </Nav.Link>
          ))}
          <Nav.Link
            href="/join"
            onClick={() => {
              setSelected("JOIN");
            }}
            className={`border-blue-950 border-[1px] bg-blue-950 rounded-lg hover:opacity-60 duration-300  py-2 px-7 ${
              selected === "JOIN" ? "scale-125" : "scale-100"
            }`}
          >
            JOIN
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
