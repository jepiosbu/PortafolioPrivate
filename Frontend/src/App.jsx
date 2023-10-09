import './App.css';


function App() {
  return (
    <main className="App">
      <main className='cortina'>
        <section className='card'>
          <img className='profile' src={require('./Imgs/Jean.jpg')} alt="" />
          <p className='role'>Soy Jean Pierre, tengo amplios conocimientos en el ambito de desarrollo web, movil y escritorio,sin embargo me enfoco al web. Manejo diferentes lenguajes de programacion, solidas bases y conocimientos en API rest,bases de datos SQL,POSTGRESQL,MYSQL,SQLITE y patrones de diseño. Soy una persona autodidacta disfruto conociendo nuevas herramientas y investigando cada una de las últimas novedades en lo que a programacion y analitica de datos se refiere</p>
          <a className='mover' href="https://github.com/jepiosbu/CvJean/archive/refs/heads/master.zip"><button>Descargar CV</button></a>
          <div className='contain-redes'>
          <a target='_blank' href=" https://w.app/jepiosbu"><img className='redes' src={require("./Imgs/logo wap.png")} alt="" /></a>
          <a target='_blank' href=" https://github.com/jepiosbu"><img className='redes' src={require("./Imgs/logo git.png")} alt="" /></a>
          <a target='_blank' href=" www.linkedin.com/in/jepiosbu"><img className='redes' src={require("./Imgs/logo lin.png")} alt="" /></a>
          </div>
          <p className='description'>"Casarse con un software es un pecado capital en este mundo de constante evolución". ✌️</p>
        </section>
        <img className='lenguaje html' src={require("./Imgs/html5.png")} alt="" />
        <img className='lenguaje css' src={require("./Imgs/css3.png")} alt="" />
        <img className='lenguaje csharp' src={require("./Imgs/csharp.png")} alt="" />
        <img className='lenguaje angular' src={require("./Imgs/angular.png")} alt="" />
        <img className='lenguaje js' src={require("./Imgs/js.jpg")} alt="" />
        <img className='lenguaje laravel' src={require("./Imgs/laravel.png")} alt="" />
        <img className='lenguaje mysql' src={require("./Imgs/mysql.png")} alt="" />
        <img className='lenguaje node' src={require("./Imgs/nodejs.png")} alt="" />
        <img className='lenguaje php' src={require("./Imgs/php.png")} alt="" />
        <img className='lenguaje psg' src={require("./Imgs/psg.png")} alt="" />
        <img className='lenguaje python' src={require("./Imgs/python.png")} alt="" />
        <img className='lenguaje react' src={require("./Imgs/react.png")} alt="" />
        <img className='lenguaje sql' src={require("./Imgs/vue.png")} alt="" />
        <img className='lenguaje vue' src={require("./Imgs/sql.png")} alt="" />
        
      </main>
    </main>
  );
}

export default App;
