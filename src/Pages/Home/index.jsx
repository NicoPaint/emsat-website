//Esta es la página principal del sitio web
//React
import { Link } from "react-router-dom"
//Components
import { Layout } from "../../Components/Layout"
//Third-Party
import { WrenchScrewdriverIcon, Cog8ToothIcon, CalendarDaysIcon } from "@heroicons/react/24/outline"

const Home = () => {
    return(
        <Layout>
            <main className="w-full">
                <div className="flex flex-col justify-center w-full h-[740px] px-4 md:px-8 lg:px-12 gap-5 bg-black/65 bg-[url(https://i.imgur.com/rRxK2j2.png)] bg-blend-darken bg-no-repeat bg-cover bg-position-[center_right_-13rem] sm:bg-center">
                    <h1 className="max-w-lg text-white font-bold text-4xl xl:text-6xl">Mantenimiento Experto de Máquinas CNC y Repuestos Originales</h1>
                    <p className="max-w-lg xl:text-lg text-white">
                        Mantén tus máquinas CNC funcionando sin problemas con nuestros servicios especializados de mantenimiento. También ofrecemos una amplia gama de repuestos originales para diversos modelos, asegurando un rendimiento óptimo.
                    </p>
                    <Link to="/nuestros-servicios">
                        <button className="px-3 py-2 text-red-emsat bg-white hover:text-white hover:bg-red-emsat cursor-pointer rounded">
                            Más información
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between px-4 md:px-8 lg:px-12 py-8 lg:py-16 gap-8">
                    <div className="flex flex-col gap-4 sm:max-w-1/2">
                        <h2 className="font-bold text-2xl xl:text-4xl">Maximiza la Eficiencia de tu CNC con Servicios de Mantenimiento Especializados para Ti</h2>
                        <p className="xl:text-lg">Nuestros servicios de mantenimiento garantizan que tus máquinas CNC operen con el máximo rendimiento, reduciendo el tiempo de inactividad y los costos de reparación. Confía en nuestros expertos para brindarte soluciones confiables y repuestos originales para todas tus necesidades de mecanizado.</p>
                    </div>
                    <div className="size-72 min-[375px]:size-[343px] min-[425px]:size-[393px] lg:size-[432px] xl:size-[600px]">
                        <img src="https://i.imgur.com/HBAW8QH.png" alt="Servicios de Mantenimiento Especializados para Ti" className="h-full object-cover object-[75%]"/>
                    </div>
                </div>
                <div className="flex flex-col items-center px-4 md:px-8 lg:px-12 py-8 lg:py-16 gap-14 text-center">
                    <div className="flex flex-col items-center max-w-4xl">
                        <span className="font-bold">Precisión</span>
                        <h2 className="font-bold text-2xl xl:text-4xl py-2">Características Esenciales de Nuestros Servicios de Mantenimiento</h2>
                        <p className="xl:text-lg">Nuestros servicios de mantenimiento de máquinas CNC aseguran un rendimiento óptimo y una mayor vida útil. Nos enfocamos en el mantenimiento preventivo para minimizar el tiempo de inactividad y aumentar la productividad.</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full max-w-6xl gap-7 md:gap-0">
                        <div className="flex flex-col items-center sm:w-lg md:w-56 lg:w-80">
                            <WrenchScrewdriverIcon className="size-10"/>
                            <h3 className="font-bold text-xl xl:text-3xl py-2">Técnicos Expertos para un Servicio Confiable</h3>
                            <p className="xl:text-lg">Nuestros técnicos altamente capacitados están preparados para trabajar con diversos modelos de CNC.</p>
                        </div>
                        <div className="flex flex-col items-center sm:w-lg md:w-56 lg:w-80">
                            <div className="flex relative">
                                <Cog8ToothIcon className="size-10"/>
                                <Cog8ToothIcon className="absolute left-8 size-7"/>
                            </div>
                            <h3 className="font-bold text-xl xl:text-3xl py-2">Amplia Disponibilidad de Repuestos</h3>
                            <p className="xl:text-lg">Ofrecemos una gran variedad de repuestos originales.</p>
                        </div>
                        <div className="flex flex-col items-center sm:w-lg md:w-56 lg:w-80">
                            <CalendarDaysIcon className="size-10"/>
                            <h3 className="font-bold text-xl xl:text-3xl py-2">Planes de Mantenimiento Personalizados para Ti</h3>
                            <p className="xl:text-lg">Planes a la medida para que tus máquinas funcionen sin interrupciones.</p>
                        </div>
                    </div>
                    <Link to="/nuestros-servicios">
                        <button className="px-3 py-2 mt-1 text-red-emsat bg-white border hover:text-white hover:bg-red-emsat cursor-pointer rounded">Más información</button>
                    </Link>
                </div>
                <div className="flex flex-col items-center px-4 md:px-8 lg:px-12 py-8 lg:py-16 gap-14 ">
                    <div className="flex flex-col md:flex-row md:gap-5">
                        <div className="md:w-1/2">
                            <span className="font-bold">Calidad</span>
                            <h2 className="font-bold text-2xl xl:text-4xl py-2">Repuestos de Alta Calidad para Máquinas CNC</h2>
                        </div>
                        <p className="md:w-1/2 xl:text-lg">Nuestros repuestos para máquinas CNC están diseñados para ofrecer durabilidad y precisión. Cada componente se somete a pruebas rigurosas para garantizar un rendimiento óptimo. Confía en nosotros para mantener tus máquinas en perfecto estado.</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-7 md:gap-5">
                        <div className="flex flex-col">
                            <figure className="pt-3">
                                <img src="https://i.imgur.com/jnzAmr7.png" alt="" />
                            </figure>
                            <h3 className="font-bold text-xl xl:text-3xl py-2">Repuestos Originales para un Rendimiento Confiable</h3>
                            <p className="xl:text-lg">Ofrecemos únicamente repuestos originales para distintos modelos.</p>
                        </div>
                        <div className="flex flex-col">
                            <figure className="pt-3">
                                <img src="https://i.imgur.com/RPyY275.png" alt="" />
                            </figure>
                            <h3 className="font-bold text-xl xl:text-3xl py-2">Soporte Especializado para tus Necesidades CNC</h3>
                            <p className="xl:text-lg">Nuestro equipo experto está listo para ayudarte.</p>
                        </div>
                        <div className="flex flex-col">
                            <figure className="pt-3">
                                <img src="https://i.imgur.com/vHzYUVg.png" alt="" />
                            </figure>
                            <h3 className="font-bold text-xl xl:text-3xl py-2">Entrega Rápida para Minimizar el Tiempo de Inactividad</h3>
                            <p className="xl:text-lg">Recibe tus repuestos rápidamente para mantener la producción en marcha.</p>
                        </div>
                    </div>
                    <Link to="/repuestos" className="flex justify-center md:justify-start w-full">
                        <button className="px-3 py-2 mt-1 text-red-emsat bg-white border hover:text-white hover:bg-red-emsat cursor-pointer rounded">Más información</button>
                    </Link>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </main>
        </Layout>
    )
}

export { Home }