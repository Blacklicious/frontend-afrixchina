import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // You'll need to install react-icons if you haven't already

const Mobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="bg-gray-100 h-[100px] rounded-b-lg w-full flex justify-between items-center shadow-md px-4  top-0 transition-all duration-300 ease-in-out">
        <div className="text-2xl font-bold py-2 flex items-center space-x-3 text-black">
          <Image src="/afrixchina_logo.png" alt="AfrixChina Logo" width={80} height={80} />
        </div>
        <div onClick={toggleMenu} className="w-[20%] h-[70px] flex items-center hover:bg-gray-500 rounded-lg hover:text-white justify-center  text-black text-5xl">
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Overlay menu when the hamburger is clicked */}
      {menuOpen && (
        <div className='p-4 bg-gray-100'>
            <div className="bg-white h-full w-full top-[60px] left-0 flex flex-col items-center transition-all duration-300 ease-in-out rounded-lg shadow-lg">
            <Link href="/" className='hover:bg-gray-200 text-center w-[100%]'>
                <div className="text-black text-xl my-4" onClick={toggleMenu}><b>Accueil</b></div>
            </Link>
            <Link href="/sourcing" className='hover:bg-gray-200 text-center w-[100%]'>
                <div className="text-black text-xl my-4" onClick={toggleMenu}><b>Sourcing</b></div>
            </Link>
            <Link href="/logistic" className='hover:bg-gray-200 text-center w-[100%]'>
                <div className="text-black text-xl my-4" onClick={toggleMenu}><b>Import-Export</b></div>
            </Link>
            <Link href="/marketing" className='hover:bg-gray-200 text-center w-[100%]'>
                <div className="text-black text-xl my-4" onClick={toggleMenu}><b>Marketing</b></div>
            </Link>
            </div>
        </div>
      )}
    </div>
  );
};

export default Mobile;
