import React, { useState, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SocialMediaIcons from "@/components/SocialMediaIcons";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-[#2e7c64] shadow-lg">
      <div className="flex items-center justify-between h-24 px-6 mx-auto max-w-7xl">
        <div className="flex items-center space-x-10">
          <Link href="/" className="no-underline">
            <Image
              src="/images/meta/Grey-box_Logo.png"
              alt="Greybox Logo"
              width={80}
              height={30}
              className="object-contain"
            />
          </Link>

          <div className="items-center hidden space-x-8 md:flex">
            <Link
              href="/"
              className="text-lg font-bold text-white no-underline hover:underline"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-bold text-white no-underline hover:underline"
            >
              About
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <AiOutlineClose className="w-8 h-8" />
            ) : (
              <AiOutlineMenu className="w-8 h-8" />
            )}
          </button>
        </div>

        <div className="items-center hidden space-x-4 md:flex">
          <SocialMediaIcons />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-[#2e7c64] py-4">
          <SocialMediaIcons />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
