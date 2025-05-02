//Esta es la página principal del sitio web
//React
import { Link } from "react-router-dom"
//Components
import { Layout } from "../../Components/Layout"

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
                        <button className="px-3 py-2 text-red-emsat bg-white">
                            Más información
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between px-4 md:px-8 lg:px-12 py-8 gap-8">
                    <div className="flex flex-col gap-4 sm:max-w-1/2">
                        <h2 className="font-bold text-2xl xl:text-4xl">Maximiza la Eficiencia de tu CNC con Servicios de Mantenimiento Especializados para Ti</h2>
                        <p className="xl:text-lg">Nuestros servicios de mantenimiento garantizan que tus máquinas CNC operen con el máximo rendimiento, reduciendo el tiempo de inactividad y los costos de reparación. Confía en nuestros expertos para brindarte soluciones confiables y repuestos originales para todas tus necesidades de mecanizado.</p>
                    </div>
                    <div className="size-72 min-[375px]:size-[343px] min-[425px]:size-[393px] lg:size-[432px] xl:size-[600px]">
                        <img src="https://i.imgur.com/HBAW8QH.png" alt="Servicios de Mantenimiento Especializados para Ti" className="h-full object-cover object-[75%]"/>
                    </div>
                </div>
                <div></div>
                <div></div>
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