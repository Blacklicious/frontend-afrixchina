'use client'
import { Card, Col, Row } from 'antd';
import React, { useState, useEffect } from 'react'

const Services: React.FC = () => {
  const [currentWord, setCurrentWord] = useState('DOMAINES');
  const words = ['DOMAINES', 'OPTIONS', 'SERVICES'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prevWord => {
        const nextIndex = (words.indexOf(prevWord) + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000); // every 1 seconds
    return () => clearInterval(interval);
  }, [words]);

  return (
    <>        
        <div className=' bg-white w-[100vw] h-full'>
            <section id="service-section" className="service-section service-section-hover av-py-default service-home">
              <div className="container mx-auto my-10 ">
                <div className="av-columns-area">
                  <div className="av-column-12 mb-8 p-4 ">
                    <div className="heading-default wow fadeInUp text-black flex flex-col items-center justify-center text-lg">
                      <div className="ttl mb-2">
                        Ensemble c&apos;est plus rassurant
                      </div>
                      <div className='text-3xl md:text-6xl'>
                        - <b>NOS</b>
                        <button className="av-heading animate-7 bg-red-600 w-[180px] md:w-[400px] m-2 rounded-md">
                          <span className="av-text-wrapper text-white"><b className="{`fade-effect ${isVisible ? 'show' : ''}">{currentWord}</b></span>
                        </button>
                      </div>
                      <div className=' text-center text px-5 mt-4'>
                        <p>
                          Nous sommes le leader et la seule entreprise étrangère évoluant <br/> dans le secteur de consultation Import-Export dans la province du Shandong.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                  <div className='w-[90vw] md:w-[30vw] bg-gray-200/75 m-4 p-4 text-black font-bold rounded shadow-lg' >
                    <h5 className="text-2xl mb-4 text-center"><a href="https://businessinchina.fr/import-export/">Import-Export</a></h5>
                    <p className='text-center'>Nous sommes spécialisés dans les services de consultation en Import-Export : La recherche fournisseur et transitaire etc...</p>
                    <a href="https://businessinchina.fr/import-export/"><i className="fa fa-long-arrow-right"></i></a>
                  </div>
                  
                  <div className='w-[90vw] md:w-[30vw] bg-gray-200/75 m-4 p-4 text-black font-bold rounded shadow-lg' >
                    <h5 className="text-2xl mb-4 text-center"><a href="https://businessinchina.fr/import-export/">Creation Entreprise</a></h5>
                    <p className='text-center'>Une de nos spécialités est aussi d&apos;offrir le service de création d&apos;entreprise en Chine avec le service de comptabilité .</p>
                    <a href="https://businessinchina.fr/import-export/"><i className="fa fa-long-arrow-right"></i></a>
                  </div>
                  
                  <div className='w-[90vw] md:w-[30vw] bg-gray-200/75 m-4 p-4 text-black font-bold rounded shadow-lg' >
                    <h5 className="text-2xl mb-4 text-center"><a href="https://businessinchina.fr/import-export/">Service ventes</a></h5>
                    <p className='text-center'>Nous produisons des matériaux de construction (carreaux et Marbres), des Tracteurs Agricoles et gros engins de transport.</p>
                    <a href="https://businessinchina.fr/import-export/"><i className="fa fa-long-arrow-right"></i></a>
                  </div>
                </div>
                {/* The individual service items */}
                <div className="av-column-4 av-md-column-6 mb-1 p-0">
                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fa fa-support txt-pink"></i>
                    </div>
                    <div className="service-content">
                    </div>
                  </div>
                </div> 
              </div>
            </section>
        </div> 
        <div className=' bg-red-600 w-full h-full'>
        <div className="container mx-auto my-20 ">
          <div className="av-columns-area">
            <div className="av-column-12 mb-8 ">
              <div className="heading-default wow fadeInUp text-white flex flex-col items-center justify-center text-lg">
                <div className='text-4xl md:text-6xl flex flex-col  md:flex-row  text-center items-center justify-center'>
                 <b> - Details de nos </b>
                  <button className="av-heading animate-7 bg-white w-[200px] md:w-[400px] m-2 rounded-md">
                    <span className="av-text-wrapper text-red-600"><b className="{`fade-effect ${isVisible ? 'show' : ''}">{currentWord}</b></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap '>
            <div className="w-[90vw] md:w-[45%] lg:w-[30%] bg-red-500 text-white  m-4 rounded-md shadow-lg p-4 " >
              <h5 className="text-xl text-center mb-4"><a href="https://businessinchina.fr/import-export/"><b>ACCOMPAGNEMENT</b></a></h5>
              <p className='text-center '>
                <b>
                  Nous vous accompagnons sur vos projets de Chine en faisant exactement ce que vous devriez faire en Chine.
                </b>
              </p>
              <a href="https://businessinchina.fr/import-export/"><i className="fa fa-long-arrow-right"></i></a>
            </div>
            
            <div className="w-[90vw] md:w-[45%] lg:w-[30%] bg-red-500 text-white  m-4 rounded-md shadow-lg p-4 " >
              <h5 className="text-xl  text-center mb-4"><a href="https://businessinchina.fr/import-export/"><b>INSPECTION</b></a></h5>
              <p className='text-center '>
                <b>
                  Faites vérifier vos marchandises en Chine afin de se rassurer sur la fiabilité du fournisseur en Chine.
                </b>
              </p>
              <a href="https://businessinchina.fr/import-export/"><i className="fa fa-long-arrow-right"></i></a>
            </div>
            
            <div className="w-[90vw] md:w-[45%] lg:w-[30%] bg-red-500 text-white  m-4 rounded-md shadow-lg p-4 " >
              <h5 className="text-xl  text-center  mb-4"><a href="https://businessinchina.fr/import-export/"><b>CREATION ENTREPRISE</b></a></h5>
              <p className='text-center '>
                <b>
                  Nous vous accompagnons pour vos projets de creation d&apos;entreprise en Chine.
                </b>
              </p>
              <a href="https://businessinchina.fr/import-export/"><i className="fa fa-long-arrow-right"></i></a>
            </div>
            
            <div className="w-[90vw] md:w-[45%] lg:w-[30%] bg-red-500 text-white  m-4 rounded-md shadow-lg p-4 " >
              <h5 className="text-xl  text-center  mb-4"><a href="https://businessinchina.fr/import-export/"><b>INVITATION CHINE</b></a></h5>
              <p className='text-center '>
                <b>
                  Nous vous offrons la lettre d&apos;invitation Professionnelle  pour vos démarches de visite en Chine. 
                </b>
              </p>
              <a href="https://businessinchina.fr/import-export/"><i className="fa fa-long-arrow-right"></i></a>
            </div>
            
            <div className="w-[90vw] md:w-[45%] lg:w-[30%] bg-red-500 text-white  m-4 rounded-md shadow-lg p-4 " >
              <h5 className="text-xl text-center  mb-4"><a href="https://businessinchina.fr/import-export/"><b>GUIDE EN CHINE</b></a></h5>
              <p className='text-center '>
                <b>
                  Avez-vous un projet de visiter la Chine? Comptez sur nos experts sur place en Chine pour vous assister.
                </b>
              </p>
              <a href="https://businessinchina.fr/import-export/"><i className="fa fa-long-arrow-right"></i></a>
            </div>
            
            <div className="w-[90vw] md:w-[45%] lg:w-[30%] bg-red-500 text-white  m-4 rounded-md shadow-lg p-4 " >
              <h5 className="text-xl  text-center   mb-4"><a href="https://businessinchina.fr/import-export/"><b>COOPERATION</b></a></h5>
              <p className='text-center '>
                <b>
                  Nous offrons la possibilité à nos potentiels clients de nous representer dans leur pays d&apos;origine. 
                </b>
              </p>
              <a href="https://businessinchina.fr/import-export/"><i className="fa fa-long-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Services