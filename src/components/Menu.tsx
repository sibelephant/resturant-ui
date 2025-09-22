"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const Links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
  ];

  const user: boolean = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="menu"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
          className="cursor-pointer"
        />
      ) : (
        <Image
          src="/close.png"
          alt="menu"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
          className="cursor-pointer"
        />
      )}
      {open && <div className="bg-red-500 text-white absolute top-24 left-0 h-[calc(100vh-6rem)] w-full flex flex-col gap-8 items-center justify-center text-3xl z-10 ">
        {Links.map((item) => (
          <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>
            {item.title}
          </Link>
        ))}
        {!user ? <Link href="/" onClick={()=>setOpen(false)}>Login</Link> : <Link href="/" onClick={()=>setOpen(false)}>Orders</Link>}
        <Link href="/cart" onClick={()=>setOpen(false)}>
        <CartIcon/></Link>
      </div>}
    </div>
  );
};

export default Menu;
