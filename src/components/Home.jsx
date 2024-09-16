import Header from "./Header";



export default function Home() {
  return (
    <div className="Home">
      <div
        style={{
          backgroundColor: 'blue',
          //backgroundImage: `url(${grafiteLogo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 'cover',
          //width: '100vw',
          //height: '100vh',
          display:'flex',
          justifyItems: 'center'
          
        }}
      ></div>
      <button className="btn-more-home">CONHEÇA O PROJETO</button>
    </div>
  );
}
