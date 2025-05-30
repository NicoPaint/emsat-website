//Este componente es el footer del sitio web
//React
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
//Components
import { FacebookIcon } from "../Icons/FacebookIcon"
import { InstagramIcon } from "../Icons/InstagramIcon"
import { XIcon } from "../Icons/XIcon"
import { LinkedInIcon } from "../Icons/LinkedInIcon"
import { YouTubeIcon } from "../Icons/YouTubeIcon"

const Footer = () => {
    return(
        <footer className="flex flex-col items-center px-4 md:px-8 lg:px-12 py-8 lg:py-16 mt-14">
            <div className="grid grid-rows-3 lg:grid-cols-[1fr_3fr_1fr] lg:grid-rows-none items-center w-full lg:mb-10">
                <Link to="/" className="lg:justify-self-start">
                    <img src="https://i.imgur.com/3mJtqZO.png" alt="Emsat Logo" className="h-8 mx-auto"/>
                </Link>
                <ul className="flex flex-col justify-self-center lg:flex-row items-center gap-4 font-semibold text-center">
                    <HashLink smooth to="#contact">
                        <li>Contactanos </li>
                    </HashLink>
                    <Link to="/sobre-nosotros">
                        <li>Sobre Nosotros</li>
                    </Link>
                    <Link to="/nuestros-servicios">
                        <li>Nuestros Servicios</li>                    
                    </Link>
                    <Link to="/repuestos">
                        <li>Repuestos</li>                    
                    </Link>
                </ul>
                <div className="flex justify-center lg:justify-self-end gap-3">
                    <Link>
                        <FacebookIcon size="6" textColor="white" bgColor="black"/>                    
                    </Link>
                    <Link>
                        <InstagramIcon size="6" textColor="black" />                    
                    </Link>
                    <Link>
                        <XIcon size="6" textColor="black" />                    
                    </Link>
                    <Link>
                        <LinkedInIcon size="6" textColor="white" bgColor="black" />                    
                    </Link>
                    <Link>
                        <YouTubeIcon size="6" textColor="black" />                    
                    </Link>
                </div>
            </div>
            <hr className="w-full text-red-emsat my-4"/>
            <div className="flex flex-col lg:flex-row-reverse items-center text-center gap-6">
                <div className="hidden flex-col lg:flex-row gap-5">
                    <Link to="#" className="underline cursor-pointer">
                        <p>Privacy Policy</p>
                    </Link>
                    <Link to="#" className="underline cursor-pointer">
                        <p>Terms of Service</p>
                    </Link>
                    <Link to="#" className="underline cursor-pointer">
                        <p>Cookies Settings</p>
                    </Link>
                </div>
                <p className="mt-5 lg:mt-0">® 2025 EMSAT. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export { Footer }