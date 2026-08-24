import "./sobre.css";

export function Sobre() {
  return (
    <section className="about" id="sobre">
      <div className="about__container">
        <div className="about__header">
          <span className="about__badge">Sobre o projeto</span>

          <h2>
            Conheça a <span>CIDA</span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Hic animi nostrum rerum voluptas aliquam aspernatur doloremque neque quasi nemo dolores, 
            laborum alias magnam possimus reprehenderit maiores sed molestiae veniam libero.
          </p>
        </div>

        <div className="about__content">
          <div className="about__text">
            <h3>Da ideia à solução</h3>

            <p> 
                Hic animi nostrum rerum voluptas aliquam aspernatur doloremque neque quasi nemo dolores, 
                laborum alias magnam possimus reprehenderit maiores sed molestiae veniam libero.
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Hic animi nostrum, laborum alias magnam possimus reprehenderit maiores sed molestiae veniam libero.
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Hic animi nostrum rerum voluptas aliquam aspernatur doloremque neque quasi nemo.
            </p>
          </div>

          <div className="about__cards">
            <article className="about-card">
              <div className="about-card__icon">🎯</div>

              <div>
                <h4>Objetivo</h4>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Fugit blanditiis officia quibusdam. repellat maiores eligendi!
                </p>
              </div>
            </article>

            <article className="about-card">
              <div className="about-card__icon">💡</div>

              <div>
                <h4>Inovação</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fugit blanditiis officia quibusdam. repellat maiores eligendi!
                </p>
              </div>
            </article>

            <article className="about-card">
              <div className="about-card__icon">🚀</div>

              <div>
                <h4>Evolução</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Fugit blanditiis officia quibusdam. repellat maiores eligendi!
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}