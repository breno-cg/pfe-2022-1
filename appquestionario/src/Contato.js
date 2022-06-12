import React from 'react';
import Insta from './img/instagram.png';
import Linkedin from './img/linkedin.png';
import Email from './img/email.png';

const Contato = () => {
  return (
    <section>
      <div className="tudo">
        <div className="contatos">
          <h2 className="intro">
            Para mais informações, entre em contato pelo email:{' '}
            <h3 className="email">brenocorrea.gomes@gmail.com</h3>
          </h2>
          <br />
          <br />
          <div className="redes-sociais">
            <div className="item-rede">
              <img className="rede-logo" src={Insta} />
              <a href="https://www.instagram.com/breno.cg/">Instagram</a>
            </div>
            <div className="item-rede">
              <img className="rede-logo" src={Linkedin} />
              <a href="https://br.linkedin.com/in/breno-correa-gomes">
                Linkedin
              </a>
            </div>
          </div>

          <br />
          <br />
          <br />

          <h2 className="intro">
            Suas obras também podem ser encontradas na Arte Plural Galeria:
          </h2>
          <br />
          <div className="redes-sociais">
            <div className="item-rede">
              <img className="rede-logo" src={Insta} />
              <a href="https://www.instagram.com/arte_plural_galeria/">
                Instagram
              </a>
            </div>
            <div className="item-rede">
              <img className="rede-logo" src={Email} />
              <a href="#">contato@artepluralgaleria.com.br</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
