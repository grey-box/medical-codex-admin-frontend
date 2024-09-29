import React, { useState } from 'react';
import Link from 'next/link';

function NavigationBar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  return (
    <div className="navbar">
      <div className="flex justify-between items-center h-[100px] bg-[#0068B7] relative shadow-lg">
        <div className="flex items-center justify-center p-[10px]">
          <Link href='/' className="text-[40px] font-black text-white no-underline">Greybox</Link>
        </div>
        <div className="flex items-center justify-center p-[10px] cursor-pointer" onClick={handleShowNavbar}>
          <img src={`${process.env.PUBLIC_URL}/icon.png`} alt="Icon" />
        </div>
        <div className={`absolute right-0 top-[85px] p-[20px] bg-white border border-gray-300 rounded-md shadow-md z-1000 ${showNavbar ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col list-none m-0 p-0">
            <li>
              <Link href="/about" className="block text-[16px] font-normal text-[#555555] no-underline p-[10px_20px]">About</Link>
            </li>
            <li>
              <Link href="/help" className="block text-[16px] font-normal text-[#555555] no-underline p-[10px_20px]">Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
