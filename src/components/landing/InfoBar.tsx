import React from 'react'

const InfoBar = () => {
  return (
    <div className="bg-blue-900/25 w-[100vw] pt-4 pb-2 px-4 text-white mt-[100px] text-sm ">
      <div className=" flex flex-col ">
        <div className="flex flex-row  space-x-6 items-center justify-center">
          <div className="flex space-x-2 items-center w-[33%] md:w-[30vw] justify-center">
            <i className="fas fa-clock"></i>
            <div className='flex items-center space-x-4 text-xs md:text-sm '>
              <span className="block">8:00AM 6:00PM (Chine)</span>
              <span className="text-sm text-center">Lundi au Samedi</span>
            </div>
          </div>
          <div className='w-[66%] flex flex-wrap '>
            <div className=" space-x-2 flex w-[100%] md:w-[30vw]  justify-end ">
              <i className="fas fa-envelope"></i>
              <div className='flex items-center  space-x-2 text-sm '>
                <span className="block">Email : </span>
                <span className="text-sm">info@afrixchina.fr</span>
              </div>
            </div>
            <div className="flex space-x-2 items-center w-[100%] md:w-[30vw] justify-end">
              <i className="fas fa-phone"></i>
              <div className='flex space-x-2 text-sm  '>
                <span className="block">Online 24x7</span>
                <span className="text-sm">+223 91541915</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoBar
