import Image from 'next/image';
import React from 'react';
import { Carousel } from 'antd';
import Navbar from '@/components/Navbar';
import Services from '@/components/landing/Services';
import Contacts from '@/components/landing/Contacts';
import InfoBar from '@/components/landing/InfoBar';
import Footer from '@/components/Footer';

const contentStyle1: React.CSSProperties = {
  height: '70vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: 'url(/ac_sourcing.jpg)',
  backgroundSize: 'cover'
};

const contentStyle2: React.CSSProperties = {
  height: '70vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: 'url(/ac_logistique.jpg)',
  backgroundSize: 'cover'
};

const contentStyle3: React.CSSProperties = {
  height: '70vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: 'url(/ac_marketing.jpg)',
  backgroundSize: 'cover'
};

const Home: React.FC = () => {
  return (
    <div>
    <InfoBar />
    < Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between  bg-black">
        <Carousel effect="fade" autoplay dotPosition={"left"} >
          <div>
            <div style={contentStyle1}>
              <div className='bg-black/75 h-full text-8xl flex flex-col items-center justify-center'>
                <div className='bg-green-600/50 p-8 rounded-lg '>
                  <h1>
                    Sourcing
                  </h1>
                </div>
                <div className='text-whihte text-lg'>
                  <p>Leader du Sourcing entre la chine et L&apos;afrique</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={contentStyle2}>
              <div className='bg-black/75 h-full text-8xl flex flex-col items-center justify-center'>
                  <div className='bg-yellow-600/50 p-8 rounded-lg '>
                    <h1>
                      Import-Export
                    </h1>
                  </div>
                  <div className='text-whihte text-lg'>
                    <p>L&apos;import Export simplifiée entre la chine et L&apos;afrique</p>
                  </div>
              </div>
            </div>  
          </div>
          <div>
            <div style={contentStyle3}>
            <div className='bg-black/75 h-full text-8xl flex flex-col items-center justify-center'>
                <div className='bg-red-600/50 p-8 rounded-lg '>
                  <h1>
                    Marketing
                  </h1>
                </div>
                <div className='text-whihte text-lg'>
                  <p>Un suivie du debut a la vente de Votre marque</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
        <Services />
        <Contacts />
        <Footer/>
      </main>
    </div>
  );
};

export default Home;
