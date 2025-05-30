//Este componente es el Navbar de la página web
//React
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { HashLink } from "react-router-hash-link"
//Third-party
import { Bars3Icon } from "@heroicons/react/16/solid"

const NavBar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        if(isMobileMenuOpen){
            setIsMobileMenuOpen(false);
        } else{
            setIsMobileMenuOpen(true);
        }
    }

    const renderMobileMenu = () => {
        return(
            <div className="lg:hidden fixed top-[64px] left-0 right-0 h-44 bg-white">
                <ul className="flex flex-col gap-3 pl-4 pt-4">
                    <li>
                        <NavLink 
                            to="/"
                            onClick={toggleMobileMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/nuestros-servicios"
                            onClick={toggleMobileMenu}
                        >
                            Nuestros Servicios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/sobre-nosotros"
                            onClick={toggleMobileMenu}
                        >
                            Sobre Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/repuestos"
                            onClick={toggleMobileMenu}
                        >
                            Repuestos
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }

    return(
        <nav className="flex justify-center items-center relative w-full h-16 p-2">
            <div 
                className="lg:hidden absolute left-2 md:left-4 size-6"
                onClick={toggleMobileMenu}
            >
                    <Bars3Icon/>
            </div>
            {isMobileMenuOpen && renderMobileMenu()}
            <ul className="hidden lg:flex items-center gap-3 absolute left-6 xl:right-8 w-fit">
                <li>
                    <NavLink to="/nuestros-servicios">
                        Nuestros Servicios
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sobre-nosotros">
                        Sobre Nosotros
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/repuestos">
                        Repuestos
                    </NavLink>
                </li>
            </ul>
            <div>
                <NavLink 
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <img src="https://i.imgur.com/3mJtqZO.png" alt="Emsat Logo" className="h-8"/>
                </NavLink>
            </div>
            <div className="absolute right-2 md:right-4 lg:right-6 xl:right-8">
                <HashLink smooth to="#contact">
                    <button className="p-2 bg-red-emsat text-white text-sm rounded border cursor-pointer hover:bg-white hover:text-red-emsat">
                        Contáctanos
                    </button>
                </HashLink>
            </div>
        </nav>
    )
}

export { NavBar }