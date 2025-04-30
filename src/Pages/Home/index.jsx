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
                    <h1 className="max-w-lg text-white font-bold text-4xl">Mantenimiento Experto de Máquinas CNC y Repuestos Originales</h1>
                    <p className="max-w-lg text-white">
                        Mantén tus máquinas CNC funcionando sin problemas con nuestros servicios especializados de mantenimiento. También ofrecemos una amplia gama de repuestos originales para diversos modelos, asegurando un rendimiento óptimo.
                    </p>
                    <Link to="/nuestros-servicios">
                        <button className="px-3 py-2 text-red-emsat bg-white">
                            Más información
                        </button>
                    </Link>
                </div>
                <div></div>
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