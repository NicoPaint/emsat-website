//Este componente es el icono de Facebook

const FacebookIcon = ({ size, textColor, bgColor}) => {

    return(
        <svg className={`size-${size} text-${textColor} bg-${bgColor} rounded-full`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
        </svg>
    )
}

export { FacebookIcon }