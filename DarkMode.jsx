function DarkMode(prop){
    return(
        <>
        <button className="btn3" onClick={prop.handleDarkMode} >
            <svg className="svg1"
                fill="#260c68"
                height="64px"
                width="64px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-46.08 -46.08 604.16 604.16"
                xml:space="preserve"
                transform="rotate(-45)"
                >
                <path d="M301.425,256c0-98.198,71.422-179.704,165.15-195.435C421.963,22.807,364.312,0,301.425,0c-141.16,0-256,114.84-256,256 s114.84,256,256,256c62.887,0,120.538-22.807,165.15-60.565C372.848,435.704,301.425,354.2,301.425,256z"></path>
            </svg>
        </button>
        </>

    )
}

export default DarkMode
