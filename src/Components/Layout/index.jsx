//Este componente le esta la estructura base a todas las páginas del sitio web

const Layout = ({ children }) => {
    return(
        <div className="flex flex-col items-center">
            {children}
        </div>
    )
}

export { Layout }