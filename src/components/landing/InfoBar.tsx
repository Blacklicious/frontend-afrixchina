import React from 'react'

const InfoBar = () => {
  return (

    <div className="bg-blue-900/25 w-full p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/Business-in-China-103060961357467"><i className="fab fa-facebook"></i></a>
          <a href="http://www.twitter.com/businessinChin2"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/company/bic-international-business-co-ltd/"><i className="fab fa-linkedin"></i></a>
          <a href="https://wa.me/message/6XEDGREXY5ATF1"><i className="fab fa-whatsapp"></i></a>
          <a href="https://instagram.com/business_en_chine?igshid=MDM4ZDc5MmU="><i className="fab fa-instagram"></i></a>
        </div>
        <div className="flex space-x-6">
          <div className="flex space-x-2 items-center">
            <i className="fas fa-clock"></i>
            <div>
              <span className="block">8:00AM - 6:00PM (Chine)</span>
              <span className="text-sm">Lundi au Samedi</span>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <i className="fas fa-envelope"></i>
            <div>
              <span className="block">Email</span>
              <span className="text-sm">info@afrixchina.fr</span>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <i className="fas fa-phone"></i>
            <div>
              <span className="block">Online 24x7</span>
              <span className="text-sm">+223 91541915</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoBar
