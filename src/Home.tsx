import "./home.css"
import { Carousel } from "./carousel/Carousel"
import { Sobre } from "./sobre/Sobre"

function Home() {
    return(
        <>
            <section className="hero" id="inicio">
                <div className="container hero-content">

                    <div className="hero-text reveal">

                        {/*<span className="hero-badge">
                            🎓 Projeto de Extensão Universitária
                        </span>*/}

                        <h1 className="hero-title">
                            Conhecimento que <span>transforma</span> o futuro.
                        </h1>

                        <p className="hero-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Laudantium facere eius assumenda. Pariatur corrupti possimus in, 
                            mollitia maxime laborum saepe debitis doloribus earum.
                        </p>

                        <div className="hero-actions">
                            <a href="#contato" className="btn btn-outline">
                                Entre em contato
                            </a>
                        </div>

                    </div>

                    <div className="hero-visual reveal">

                        <div className="hero-card">

                            <Carousel />

                        </div>

                    </div>

                </div>
            </section>

            <Sobre />
        </>
    )
}

export default Home