import "./footer.css"

function Footer() {
    return(
        <footer className="footer">

        <div className="container">

            <div className="footer-grid">

                <div className="footer-brand">

                    <a href="#inicio" className="logo">
                        <span className="logo-icon">C</span>
                        <span style={{color: "white"}}>
                            Cida Project
                        </span>
                    </a>

                    <p>
                        Projeto universitário dedicado à pesquisa,
                        inovação, extensão e transformação social.
                    </p>

                </div>


                <div>

                    <h3 className="footer-title">
                        Contato
                    </h3>

                    <ul className="footer-links">
                        <li><a href="#inicio">R. Manuel de Medeiros, s/n. Dois Irmãos, Recife - PE</a></li>
                        <li><a href="#sobre">cidaproject@ufrpe.br</a></li>
                    </ul>

                </div>


                <div>

                    <h3 className="footer-title">
                        Projeto
                    </h3>

                    <ul className="footer-links">
                        <li><a href="#objetivos">projeto 1</a></li>
                        <li><a href="#projetos">projeto 2</a></li>
                        <li><a href="#projetos">projeto 3</a></li>
                    </ul>

                </div>


                <div>

                    <h3 className="footer-title">
                        Redes sociais
                    </h3>

                    <ul className="footer-links">
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>

                </div>

            </div>


            <div className="footer-bottom">

                <span>
                    © <span>2026</span> CIDA Project. Todos os direitos reservados.
                </span>

            </div>

        </div>

    </footer>
    )
}

export default Footer