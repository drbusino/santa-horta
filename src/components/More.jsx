import Header from "./Header";
import grafiteLogo from "../assets/img/IMG_0942.png";

export default function More() {
  return (
    <div className="More">
     
      <div
        className="more-summary"
        style={{
          backgroundColor: "rgb(232, 222, 206)",
          display: "flex",
          height: '100vh'
        }}
      >
        <article className="art-more" style={{
          display:'flex',
          flexDirection:'column'
        }}>
          <h2 className="title-more">SANTA HORTA</h2>
          <div className="div-txt-more">
            <p className="txt-more-primeiraLetra">O</p>
            <p className="txt-more">
              Projeto Santa Horta, por meio da revitalização de um terreno que
              antes era destino do lixo produzido na comunidade, sempre teve
              como princípio a transformação desse espaço em uma horta e na
              produção de um viveiro.
            </p>
          </div>
          
        </article>
        <div
          style={{
            backgroundImage: `url(${grafiteLogo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: "400px",
            width: "100vw",
           padding:'0'
            
          }}
        ></div>
      </div>
      <div className="nossaJornada">
        <article className="more-nossaJornada">
          <h2 className="title-more-nossaJornada">TODA A NOSSA JORNADA</h2>
          <p className="txt-more-nossaJornada">
            O projeto atua reduzindo a contaminação e disseminação de doenças
            causadas pelo acúmulo de lixo, impulsionando a produção de alimentos
            saudáveis para a população local, promovendo a disseminação de
            educação ambiental para as crianças da comunidade, alcançando e
            formando a geração futura, além de gerar empregabilidade e
            rentabilidade para a população local.
          </p>
        </article>
      </div>
      <div className="more-linhaDoTempo">
        <div className="div-more-linhaDoTempo">
          <article className="art-more-linhaDoTempo">
            <p className="txt-more-linhaDoTempo">
              Surgiu em 2016 por meio de uma parceria da Enactus UFRJ com o
              projeto Colhendo o Futuro, com o propósito de revitalizar terrenos
              baldios que serviam para descarte de lixo incorreto na comunidade
            </p>
          </article>
          <img
            src=""
            alt="img-more-linhaDoTempo"
            className="img-more-linhaDoTempo"
          />
        </div>
        <div className="div-more-linhaDoTempo">
          <article className="art-more-linhaDoTempo">
            <p className="txt-more-linhaDoTempo">
              Surgiu em 2016 por meio de uma parceria da Enactus UFRJ com o
              projeto Colhendo o Futuro, com o propósito de revitalizar terrenos
              baldios que serviam para descarte de lixo incorreto na comunidade
            </p>
          </article>
          <img
            src=""
            alt="img-more-linhaDoTempo"
            className="img-more-linhaDoTempo"
          />
        </div>
        <div className="div-more-linhaDoTempo">
          <article className="art-more-linhaDoTempo">
            <p className="txt-more-linhaDoTempo">
              Surgiu em 2016 por meio de uma parceria da Enactus UFRJ com o
              projeto Colhendo o Futuro, com o propósito de revitalizar terrenos
              baldios que serviam para descarte de lixo incorreto na comunidade
            </p>
          </article>
          <img
            src=""
            alt="img-more-linhaDoTempo"
            className="img-more-linhaDoTempo"
          />
        </div>
      </div>

      <div className="more-fotos">
        <div className="div-more-fotos">
          <img src="" alt="img-more-fotos1" className="img-more-fotos" />
          <p className="txt-more-fotos">
            parceria da Enactus UFRJ com o projeto Colhendo o Futuro, com o
            propósito de revitalizar terrenos baldios que serviam para descarte
            de lixo incorreto na comunidade{" "}
          </p>
        </div>
        <div className="div-more-fotos">
          <img src="" alt="img-more-fotos2" className="img-more-fotos" />
          <p className="txt-more-fotos">
            parceria da Enactus UFRJ com o projeto Colhendo o Futuro, com o
            propósito de revitalizar terrenos baldios que serviam para descarte
            de lixo incorreto na comunidade{" "}
          </p>
        </div>
        <div className="div-more-fotos">
          <img src="" alt="img-more-fotos3" className="img-more-fotos" />
          <p className="txt-more-fotos">
            parceria da Enactus UFRJ com o projeto Colhendo o Futuro, com o
            propósito de revitalizar terrenos baldios que serviam para descarte
            de lixo incorreto na comunidade{" "}
          </p>
        </div>
      </div>
      <div className="more-impacto">
        <h2 className="title-more-impacto">Nossso Impacto</h2>
        <div className="grafico-more-impacto">
          <div className="div-grafico-more-impacto1"></div>
          <div className="div-grafico-more-impacto2"></div>
        </div>
        <div className="more-impacto-info">
          <div className="div-more-impacto-info"></div>
          <div className="div-more-impacto-info"></div>
          <div className="div-more-impacto-info"></div>
          <div className="div-more-impacto-info"></div>
        </div>
      </div>
    </div>
  );
}
