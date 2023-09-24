'use client';
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import InfoBar from '@/components/landing/InfoBar';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div>
      <InfoBar />
      <div className={`bg-gray-100 h-[80px] w-full flex justify-between items-center shadow-md px-6 fixed top-0 transition-all duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="text-4xl font-bold py-3 flex items-center space-x-3 text-black ">
          <Image src="/afrixchina_logo.png" alt="AfrixChina Logo" width={90} height={45} />
          <h1>AfrixChina</h1>
        </div>
        <div className="flex text-black">
          <Link href="/">
            <div className="hover:border-t hover:border-t-[8px] hover:border-t-[#ff0000d4]  h-[80px] w-[120px]  flex items-center justify-center"><b>Home</b></div>
          </Link>
          <Link href="/sourcing">
            <div className="hover:border-t hover:border-t-[8px] hover:border-t-[#ff0000d4]  h-[80px] w-[120px]  flex items-center justify-center"><b>Sourcing</b></div>
          </Link>
          <Link href="/logistic">
            <div className="hover:border-t hover:border-t-[8px] hover:border-t-[#ff0000d4]  h-[80px] w-[120px]  flex items-center justify-center"><b>Import-Export</b></div>
          </Link>
          <Link href="/marketing">
            <div className="hover:border-t hover:border-t-[8px] hover:border-t-[#ff0000d4]  h-[80px] w-[120px]  flex items-center justify-center"><b>Marketing</b></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
