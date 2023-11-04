import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import InfoBar from '../landing/InfoBar';

const Desktop = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  },[prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll);
    };
  },[ handleScroll]);

  return (
    <div>
      <div className={`bg-gray-100 h-[100px] w-full flex justify-between items-center shadow-md px-6  fixed top-0 transition-all duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="text-4xl font-bold py-3 flex items-center space-x-3 text-black ">
          <Image src="/afrixchina_logo.png" alt="AfrixChina Logo" width={90} height={45} />
          
        </div>
        <div className="flex text-black md:text-xl lg:text-3xl">
          <Link href="/">
            <div className="text-black hover:border-t-[10px] hover:border-t-[#ff0000d4]  h-[80px] w-[15vw]  flex items-center justify-center"><b>Home</b></div>
          </Link>
          <Link href="/sourcing">
            <div className="text-black hover:border-t-[10px] hover:border-t-[#ff0000d4]  h-[80px] w-[15vw]  flex items-center justify-center"><b>Sourcing</b></div>
          </Link>
          <Link href="/logistic">
            <div className="text-black hover:border-t-[10px] hover:border-t-[#ff0000d4]  h-[80px] w-[20vw]  flex items-center justify-center"><b>Import-Export</b></div>
          </Link>
          <Link href="/marketing">
            <div className="text-black hover:border-t-[10px] hover:border-t-[#ff0000d4]  h-[80px] w-[15vw]  flex items-center justify-center"><b>Marketing</b></div>
          </Link>
        </div>
      </div>

			<InfoBar />
    </div>
		
  )
}

export default Desktop
