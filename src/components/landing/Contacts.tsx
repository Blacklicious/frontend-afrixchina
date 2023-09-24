import React from 'react'
import Image from 'next/image';
import InfoBar from '@/components/landing/InfoBar';

const Contacts = () => {
  return (
    <div className="h-full w-full bg-blue-900/25 flex">
      {/* Column 1: Picture and Text */}
      <div className="w-4/6 py-10 flex items-center">
        <Image src="/afrixchina_logo.png" alt="AfrixChina Logo" width={350} height={180} />
        <div className="text-white  text-xl px-3 ">
          <h2>Afrixchina</h2>
          <p>
            Afrixchina Business Co., Ltd. est une entreprise basée en Chine qui offre des solutions concrètes pour accompagner toutes les entreprises étrangères en Chine.
          </p>
        </div>
      </div>
      
      {/* Column 2: Contact Form */}
      <div className="w-2/4 p-16">
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Name:</label>
            <input type="text" className="w-full p-2" />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Email:</label>
            <input type="email" className="w-full p-2" />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Message Subject:</label>
            <input type="text" className="w-full p-2" />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Message:</label>
            <textarea className="w-full p-2 h-20"></textarea>
          </div>

          <button type="submit" className="bg-red-700 h-[50px] w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
