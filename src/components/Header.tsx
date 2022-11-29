import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavList from "./NavList";
import { SearchIcon } from "@heroicons/react/outline";
import ShoppingBag from "./NabBar/ShoppingBag";
import RightNav from "./NabBar/RightNav";

const navList = [
  { text: "Product", href: "" },
  { text: "Explore", href: "" },
  { text: "Support", href: "" },
  { text: "Business", href: "" },
];

const rightList = [
  {
    Component: <SearchIcon className="h-5 w-5" />,
  },
  {
    Component: <ShoppingBag />,
    href: "/checkout",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center bg-[#E7EcEE] p-4 ">
      <div className="flex  items-center justify-center md:w-1/5">
        <Link href="/">
          <Image
            width={20}
            height={40}
            src="https://rb.gy/vsvv2o"
            alt="header image"
            className=" relative  cursor-pointer opacity-75 transition hover:opacity-100"
          />
        </Link>
      </div>
      <NavList list={navList} />
      <RightNav list={rightList} />
    </header>
  );
};

export default Header;
