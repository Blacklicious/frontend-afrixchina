import React from 'react'
import Navbar from '@/components/Navbar/Navbar';
import InfoBar from '@/components/landing/InfoBar';
import Contacts from '@/components/landing/Contacts';
import Footer from '@/components/Footer';

const Logistic = () => {
 
  return (
    <div>
      < Navbar />
      <div className='bg-white p-2 md:p-10'>{/* YouTube Video */}
        <div className="video-container flex justify-center items-center">
          <iframe 
            className='w-[100%] h-[70vh]'
            src="https://www.youtube.com/embed/Pl2V2BcpPlU?"
            title="YouTube video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">I- Service Accompagnement</h1>
        <p>Nous accompagnons les entreprises ou des particuliers de plusieurs manière :</p>
        <section className="my-8 flex flex-wrap">
            <div className="w-[100%] md:w-1/2 p-2 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-3">Faire un conteneur 20 pieds ou 40 pieds</h2>
              <p>
                Nous vous assistons sur tous vos projets de conteneurs en chine. Voici comment nous approcher :
                1- Vous nous expliquer très en détails à propos de ce que vous voulez commander, avec images si possibles. Par exemple, si c&apos;est une machine, faites nous savoir tous les caractéristiques de la machine.
                2- Après avoir compris votre projet, nous vous enverrons notre contrat de service que vous allez prendre connaissance, puis ensuite notre facture de service.
                3- La prochaine étape est de faire le paiement de notre service.
                4- après la preuve de paiement, nous traiterons votre demande immédiatement.

                Nous allons:

                trouver les différents fournisseurs
                vous envoyer leurs factures
                vous assister dans le processus d&apos;achat.
                faire la vérification avant exportation
                enfin nous allons charger le conteneur puis vous envoyer les documents pour le dédouanement
                Notre service coûtera 10000 yuan peu importe la taille du conteneur, payable dès la signature du contrat de service. Nous acceptons aussi un deposit de 50% de notre facture.
                Si vous êtes prêt, veuillez nous contacter directement pour nous expliquer votre projet.
              </p>
            </div>
            <div className="w-full md:w-1/2 ">
              <video src="/13.mp4" className="w-full h-full object-cover" autoPlay muted loop ></video>
            </div>  
          </section>
          <section className="my-8 flex flex-wrap">
            <div className="w-full md:w-1/2 ">
              <video src="/14.mp4" className="w-full h-full object-cover" autoPlay muted loop ></video>
            </div>
            <div className="w-full md:w-1/2 p-2 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-3">Faire l&apos;Inspection de marchandise en chine</h2>
              <p>
                Faites valider vos commandes en Chine grâce à notre service d&apos;inspection. Voici comment nous ca marche :
                1- Vous nous expliquez très en détails à propos de ce que vous avez commandé en précisant l&apos;adresse de votre fournisseur.
                2- Nous vous enverrons notre contrat de service et notre facture de service.
                3- vous faites le paiement de notre service. Le coût du service dépendra donc de l&apos;étude de votre cas.
                4- après la preuve de paiement, nous traiterons votre demande immédiatement en prenons rendez-vous avec votre fournisseur pour s’y rendre et faire l’inspection.
              </p>
            </div>
          </section>
          <section className="my-8 flex flex-wrap">
            <div className="w-full md:w-1/2 p-2 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-3">Rassemblez des petits colis</h2>
              <p>
                Nous offrons ce service pour soulager et rassurer tous nos clients qui peuvent passer leurs commandes en Chine 
                sur des sixtes chinois. Nous allons donc permettre aux différents clients d&apos;envoyer leur petits colis à notre adresse.
                Après avoir tout récupéré , nous allons tout rassembler et ensuite vous l&apos;expédier via les agences d&apos;expéditions.
                Pour ce service nous facturons 700 Yuan pour un délai de deux semaines.<br/><br/>
                Nous offrons la formation pour tous ceux qui ne savent pas comment passer des commandes en Chine à distance en utilisant 
                des sites chinois internes ou internationals. Durant la formation nous vous montrerons comment trouver un fournisseur fiable,
                une agence d&apos;expédition et aussi vous montrer comment éviter de se faire arnaquer.
              </p>
            </div>
            <div className="w-full md:w-1/2 ">
              <video src="/15.mp4" className="w-full h-full object-cover" autoPlay muted loop ></video>
            </div>
          </section>
      </div>
      < Contacts/>
     <Footer/>
    </div>

  )
}

export default Logistic