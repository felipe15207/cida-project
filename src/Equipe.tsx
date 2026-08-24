import Header from "./Header"
import Footer from "./footer/Footer"

import "./styles/equipe.css"

function Equipe() {
    return(
        <>
            <Header />
            <section className="section team" id="equipe">

                <div className="container">

                    <div className="section-header reveal">

                        <span className="section-tag">
                            Nossa equipe
                        </span>

                        <h2 className="section-title">
                            Pessoas por trás do projeto
                        </h2>

                        <p className="section-description">
                            Estudantes e professores trabalhando juntos
                            para transformar ideias em resultados.
                        </p>

                    </div>

                    <div className="team-grid">

                        <article className="team-card reveal">
                            <div className="avatar">AS</div>
                            <h3>Ana Silva</h3>
                            <p>Coordenadora do projeto</p>
                        </article>

                        <article className="team-card reveal">
                            <div className="avatar">JC</div>
                            <h3>João Costa</h3>
                            <p>Pesquisador</p>
                        </article>

                        <article className="team-card reveal">
                            <div className="avatar">LM</div>
                            <h3>Larissa Mendes</h3>
                            <p>Desenvolvedora</p>
                        </article>

                        <article className="team-card reveal">
                            <div className="avatar">RP</div>
                            <h3>Rafael Pereira</h3>
                            <p>Pesquisador</p>
                        </article>

                    </div>

                </div>

            </section>
            <Footer />
        </>
    )
}

export default Equipe