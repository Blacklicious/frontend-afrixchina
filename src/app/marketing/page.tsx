import React from 'react'
import { Card, Col, Row, } from 'antd';
import Navbar from '@/components/Navbar';
import InfoBar from '@/components/landing/InfoBar';
import Image from 'next/image';
import Contacts from '@/components/landing/Contacts';
import Footer from '@/components/Footer';



const Marketing = () => {

  const { Meta } = Card;
  return (
    <div>
      <InfoBar />
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
          <h1>Marketing</h1>
          <p>
            Une plateforme exceptionnelle, Afrixchina est un service d'automatisation et de solutions informatiques intégrales 
            qui va bien au-delà de vos attentes! Nous offrons une gamme complète de services inclus : analyse et stratégie 
            d'automatisation, développement sur mesure de logiciels et de matériel, formations sur les nouvelles technologies,
            intégration de systèmes de gestion, et bien plus encore. 
            Notre engagement ne se limite pas seulement à la livraison du projet, mais s'étend à un suivi et une assistance 
            post-développement. Grâce à notre expertise de plus de 15 ans dans le secteur, nous comprenons les nuances du marché 
            africain et travaillons à faciliter la vie des Africains à travers nos solutions innovantes. 
            Comme un bonus supplémentaire, nous offrons des services de consultation en marketing digital, d'analyse de 
            données avec Google Analytics, et de stratégies publicitaires sur Google ADS et Facebook ADS. Tout ceci afin de vous
            fournir une solution clé en main qui apporte de la valeur ajoutée à votre entreprise.
          </p>
          <div className='flex flex-wrap w-100%'>
            <div className='m-2'>
              <Card hoverable bordered={false} className="h-100% w-[35vw] border-2" cover={<img src="/afrixchina_logo.png" alt="AfrixChina Logo"  />}>
                <h1>
                  WEBSITE ELITE
                </h1>
                <p>
                  Plus qu'un site internet, le WEBSITE ELITE est un service complet et surprenant ! Vous allez avoir un coaching 
                  avec un expert en web marketing qui va vous aider à réaliser un site internet performant et adapté au SEO pour Google… 
                  Notez que tout est inclus : coaching web marketing & stratégie, nom de domaine, hébergement, adresse email pro, création 
                  des pages, rédaction des textes, photos et logo, mises à jour.
                </p>
              </Card>
            </div>
            <div className='m-2'>
              <Card hoverable bordered={false} className="h-100% w-[35vw] border-2" cover={<img src="/afrixchina_logo.png" alt="AfrixChina Logo"  />}>
                <h1>
                  WEBSITE BRANDING EVO
                </h1>
                <p>
                  Le Website Branding EVO est le meilleur moyen pour vous lancer sur internet ! Un site tout compris clé en main 
                  réalisé par notre équipe de professionnels en Web Design & Marketing. A la fois votre carte de visite, 
                  la vitrine de vos produits, le moyen de vous faire connaître. L'outil parfait pour contacter vos clients et 
                  fournisseurs de manière professionnelle. Un site internet pas cher et performant Web Responsive Design 
                  (adapté aux smartphones, 85% des visiteurs aujourd'hui). Pour certains ça sera l'outil idéal pour la création 
                  de votre page de vente et de la capture d'emails…
                </p>
              </Card>
            </div>
            <div className='m-2'>
              <Card hoverable bordered={false} className="h-100% w-[35vw] border-2" cover={<img src="/afrixchina_logo.png" alt="AfrixChina Logo"  />}>
                <h1>
                PACK SEO FIRST
                </h1>
                <p>
                  Le Pack Seo First c'est l'option indispensable pour votre site internet. SEO c'est l'acronyme de Search Engine Optimisation 
                  (en français l'optimisation pour les moteurs de recherche), ou autrement dit « le référencement ». 
                  Le saviez vous? Au moins 90% des sites web n'ont pas de véritable SEO actif ! Même les Web Agency spécialisées en création 
                  de sites web ont rarement un véritable SEO inclus. Pourquoi ce laxisme SEO généralisé ? Car le SEO c'est tout simplement 
                  un métier à part. En effet jusqu'à récemment le SEO n'était même pas enseigné dans les écoles d'informatique. C'était et
                  c'est toujours un job d'autodidacte. Avec le Pack Seo First votre site sera SEO Ready & SEO Friendly, et 
                  vous aurez des visiteurs gratuits toute l'année! Notez quand même que pour de bons résultats commerciaux, il sera 
                  judicieux de combiner le SEO et une action ADS (Publicité internet ciblée).
                </p>
              </Card>
            </div>
            <div className='m-2'>
              <Card hoverable bordered={false} className="h-100% w-[35vw] border-2" cover={<img src="/afrixchina_logo.png" alt="AfrixChina Logo"  />}>
                <h1>
                  PACK SEO GOLD PLUS
                </h1>
                <p>
                Le pack SEO GOLD PLUS c'est une offre en OR ! Ce service est généralement facturé plusieurs milliers d'euros l'année 
                chez toute Agence SEO spécialisée et compétente ! A l'instar du PACK SEO FIRST votre site sera enfin aux normes SEO.
                 Mais avec l'offre SEO GOLD PLUS vous aurez également la mise en place d'une stratégie de création de liens en dur ciblés,
                  vous serez formé et impliqué dans cette action. Ceci va permettre d'augmenter progressivement et durablement vos positions
                   dans les moteurs de recherche. Vous aurez de plus en plus de « visiteurs gratuits » et autant de clients potentiels.
                    Vendre via internet sans payer de publicité ? le rêve pour tous les entrepreneurs qui veulent s'établir à long terme
                     dans un business. Ce pack est conseillé pour ceux ayant un business assez concurrentiel pour lesquels le PACK SEO FIRST
                      ne sera pas toujours suffisant pour s'imposer dans les moteurs de recherche face aux mastodontes de l'internet !
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>  
      < Contacts/>
      <Footer />
    </div>
  )
}

export default Marketing