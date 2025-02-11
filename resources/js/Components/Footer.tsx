import { TextAnimate } from "@/Components/ui/text-animate";
import { AvatarCirclesDemo } from "./AvatarCirclesDemo"
import Newspaper from "./Newspaper";
import { Link } from "@inertiajs/react";



interface PropsSocial{
  number:string,
  youtube:string,
  tiktok:string,
  email:string,
  instagram:string,
  facebook:string
}
interface PropsSocialType{
  socials:PropsSocial,
}
const Footer:React.FC<PropsSocialType> = ({socials}) => {
  const navigation = {
    connect: [
      {
        name: 'Instagram',
        href: socials.instagram,
      },
      {
        name: 'Youtube',
        href: socials.youtube,
      },
      {
        name: 'Facebook',
        href: socials.facebook,
      },
      {
        name: 'Tiktok',
        href: socials.tiktok,
      },
      {
        name: 'Email',
        href: socials.email,
      },
      {
        name: 'tel:'+socials.number,
        href: socials.number,
      },
    ],
    company: [
      { name: 'Accueil', href: '/' },
      { name: 'Galerie Joel', href: '/galery-joel' },
      { name: 'galery-etudiant', href: '/Galerie Étudiant' },
      { name: 'Projet Client', href: '/albums' },
      { name: 'Vidéo', href: '/videos' },
      { name: 'Contact', href: '/contact' },
    ],
  }
  
  return (

    <footer
      aria-labelledby="footer-heading"
      className="font-inter w-full max-w-7xl"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="space-y-6">
              <img
                src="/assets/logo-joel-black.png"
                alt="Logo Light Mode"
                className="w-24 h-20  dark:hidden"
               />
              <img
                  src="/assets/logo-joel.png"
                  alt="Logo Dark Mode"
                  className="w-25 h-12  hidden dark:block"
              />
            <p className="text-md max-w-xs leading-6 text-gray-700 dark:text-gray-300">
              <div>
                <p className="mb-2">
                <TextAnimate animation="blurInUp" by="character">
                  Personnes ayant déjà rejoint ma formation !
                </TextAnimate>
                </p>
                <AvatarCirclesDemo />
              </div>
            </p>
            <div className="flex space-x-6 text-sm text-gray-700  dark:text-gray-300">
            <div>
              <Newspaper />
            </div>
            </div>
          </div>
          {/* Navigations */}
          <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
            <div className="md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-gray-900  dark:text-gray-200">
                Connection
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.connect.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                  Liens 
                </h3>
                <div className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 dark:border-gray-100/10">
          <p className="text-xs leading-5 text-gray-700 text-center dark:text-gray-300">
            &copy;Copyright © 2025 tout droit reserver
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;