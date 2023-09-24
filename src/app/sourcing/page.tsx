import Navbar from '@/components/Navbar'
import InfoBar from '@/components/landing/InfoBar'
import React from 'react'
import { Card, Col, Row } from 'antd';
import Image from 'next/image';
import Contacts from '@/components/landing/Contacts';
import Footer from '@/components/Footer';

const Sourcing = () => {
  return (
    <div className='bg-black'>
      <InfoBar/>
      < Navbar />
      <div className='bg-white p-10'>{/* YouTube Video */}
        <div className="video-container flex justify-center items-center">
          <iframe 
            className='w-[80vw] h-[70vh]'
            src="https://www.youtube.com/embed/-DqvFf6Riio" 
            title="YouTube video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        <div className='text-black text-xl px-[10%] py-20'>
          <h1>Sourcing</h1>
          <h1>
            Le Sourcing est là pour vous aider à trouver les bons produits au meilleur prix,
             mais pas seulement ! Avec Afrixchina nous allons bien plus loin qu&apos;un simple sourcing, 
             vous allez avoir un contrôle qualité sur place, aussi bien sur les produits, mais également 
             une vérification de l&apos;usine. Acheter en Chine demande de prendre quelques précautions, 
             et d&apos;avoir ainsi les bons agents Chinois sur place pour faire toutes ces vérifications.
          </h1>
        </div>
        <div className='flex justify-center items-center'>
          <div className='m-2'>
            <Card hoverable bordered={false} className="h-[400px] w-[45vw] border-2" >
              <Image src="/afrixchina_logo.png" alt="AfrixChina Logo" fill />
            </Card>
          </div>
          <div className='m-2'>
            <Card hoverable bordered={false} className="h-[400px] w-[45vw] border-2" >
              <Image src="/afrixchina_logo.png" alt="AfrixChina Logo" fill />
            </Card>
          </div>
        </div>
        <div className='text-black text-xl px-[10%] py-20'>
            <h1>
            Afrixchina et ses agents de terrain vont vérifier : l historique du fournisseur, sa réputation,
             son volume de travail en cours, et aujourd&apos;hui encore plus avec le coronavirus sa capacité à produire 
             et à vous livrer dans les délais convenus.
              Sur l achat de containers Afrixchina sera non seulement votre agent de sourcing, mais également votre guide pour 
              bien importer, vous aurez des conseils sur tout ce qui concerne les différentes règles et législations liées 
              à l&apos;importation de produits, les astuces pour éviter les blocages en douane…
            </h1>
        </div>
        <div className='flex justify-center items-center'>
          <div className='m-2'>
            <Card hoverable bordered={false} className="h-[400px] w-[30vw] border-2" >
              <Image src="/afrixchina_logo.png" alt="AfrixChina Logo" fill />
            </Card>
          </div>
          <div className='m-2'>
            <Card hoverable bordered={false} className="h-[400px] w-[30vw] border-2" >
              <Image src="/afrixchina_logo.png" alt="AfrixChina Logo" fill />
            </Card>
          </div>
          <div className='m-2'>
            <Card hoverable bordered={false} className="h-[400px] w-[30vw] border-2" >
              <Image src="/afrixchina_logo.png" alt="AfrixChina Logo" fill />
            </Card>
          </div>
        </div>
        <div className='text-black text-xl px-[10%] py-20'>
            <h1>
              En résumé Afrixchina et son fondateur l&apos;Entrepreneur Cheick de Paris, ayant plus de 15 ans 
              d&apos;expérience dans l&apos;import-export sont là pour vous proposer un service complet, 
              vous allez à la fois sécuriser vos achats, mais également éviter les pièges et problèmes en apprenant 
              certaines règles tacites liées au marché Chinois notamment. Comme vous pouvez le voir sur les photos & vidéos 
              sur cette page, Cheick de Paris va régulièrement sur le terrain en Chine, en Turquie, Roumanie… afin 
              de vérifier lui même la fiabilité des différents fournisseurs.
              Dernier point important à souligner, avec Afrixchina vous allez bénéficier d&apos;une commission raisonnable et 
              réduite à environ 6% et dans certains cas jusq&apos;à maximum 10% sur vos achats, car avec Afrixchina 
              vous bénéficiez également &apos;une véritable négociation tarifaire chez le fabricant. 
              A &apos;instar de nos SERVICES WEB MARKETING, nos services premium de sourcing & import inclus, 
              sont 2 à 3 fois moins chers que les prix généralement pratiqués.
            </h1>
        </div>
      </div>
      <Contacts />
      <Footer />
    </div>
  )
}

export default Sourcing