import React from 'react'
import Image from 'next/image';
import InfoBar from '@/components/landing/InfoBar';
import FooterSocial from '../FooterSocial';

const Contacts = () => {
  return (
    <div className="h-full w-[100vw] bg-black/90 flex flex-col p-2 md:p-8 ">
      {/* Column 1: Picture and Text */}
      <div className=" flex items-center justify-between bg-gray-900 p-4 rounded-md">
        <Image src="/afrixchina_logo.png" alt="AfrixChina Logo" width={150} height={180} />
        <div className="text-white  text-center text-xs md:text-xl  w-full text-bold ">
          <p>
            Afrixchina Business Co., Ltd. est une entreprise basée en Chine qui offre des solutions concrètes pour accompagner toutes les entreprises étrangères en Chine.
          </p>
        </div>
      </div>
      
      {/* Column 2: Contact Form */}
      <div className="">
        <form className='flex flex-wrap justify-between p-4'>
          <div className="my-4 w-full md:w-[48%]"> 
            <label className="block text-white text-sm font-bold mb-2">Name:</label>
            <input type="text" className="w-full p-2" />
          </div>

          <div className="my-4 w-full md:w-[48%]">
            <label className="block text-white text-sm font-bold mb-2">Email:</label>
            <input type="email" className="w-full p-2" />
          </div>

          <div className=" w-full my-4">
            <label className="block text-white text-sm font-bold mb-2">Message Subject:</label>
            <input type="text" className="w-full p-2" />
          </div>

          <div className="w-full my-4">
            <label className="block text-white text-sm font-bold mb-2">Message:</label>
            <textarea className="w-full p-2 h-20"></textarea>
          </div>

          <button type="submit" className="bg-red-700 h-[50px] w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4">
            Submit
          </button>
        </form>
      </div>
      < FooterSocial />
    </div>
  );
}

export default Contacts;
