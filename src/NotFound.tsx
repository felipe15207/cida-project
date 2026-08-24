import { Link } from "react-router"

function NotFound() {
    return(
        <>
            <h1>404</h1>
            <p>Página não encontrada.</p>
            <Link to="/" style={{color: "blue"}}>Voltar para o início</Link>
        </>
    )
}

export default NotFound