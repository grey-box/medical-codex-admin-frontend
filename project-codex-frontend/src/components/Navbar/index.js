import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Import Flowbite only in the browser
      import('flowbite/dist/flowbite.js');
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white mb-2 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 sticky top-0 z-50">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image
              src="/drugs.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="h-8 w-8 rounded-full"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-2">
              Project Codex
            </span>
          </div>
        </Link>

        {/* Hamburger menu for mobile */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm0 5h14a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 011-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" passHref>
                <span className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white cursor-pointer">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <span className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white cursor-pointer">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/admin" passHref>
                <span className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white cursor-pointer">
                  Admin
                </span>
              </Link>
            </li>
            <li>
              <Link href="/help" passHref>
                <span className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white cursor-pointer">
                  Help
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
