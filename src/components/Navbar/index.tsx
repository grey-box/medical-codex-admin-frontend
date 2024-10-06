import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialMediaIcons from "@/components/SocialMediaIcons";

const NavigationBar: FC = () => {
  return (
    <nav className="relative bg-[#2e7c64] shadow-lg">
      <div className="flex justify-between items-center h-[100px] px-6">
        <div className="flex items-center space-x-6 flex-grow">
          <Link href="/" className="no-underline">
            <Image
              src="/images/assets/logoGrey-BOX.png"
              alt="Greybox Logo"
              width={80}
              height={30}
              className="object-contain"
            />
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/about"
              className="text-[18px] font-bold text-white no-underline"
            >
              About
            </Link>
            <Link
              href="/help"
              className="text-[18px] font-bold text-white no-underline"
            >
              Help
            </Link>
          </div>
        </div>

        <div className="flex items-center">
          <SocialMediaIcons />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
