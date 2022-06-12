import React from 'react';
import FotoSobre from './img/foto-sobre.jpg';

const Sobre = () => {
  return (
    <section>
      <div className="tudo">
        <div className="flex-container">
          <div>
            <img className="foto-perfil" src={FotoSobre} />
          </div>

          <div className="titulos">
            <h2>Breno Corrêa</h2>
            <h5>Fotógrafo</h5>

            <p>
              De Recife, Pernambuco, Brasil. Formado pelo Insituto Candela de
              Fotografia em 2014, no qual também foi professor. Dedicado a
              fotografia de eventos e principalmente à fotografia artística.
              Trabalha com fotografia desde 2014. Seu trabalho pode ser
              encontrado na Arte Plural Galeria, em Recife, PE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
