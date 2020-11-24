import React from 'react';
import './App.css';

const obtenerPelicula = require("./library");

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { pelicula: null};
    this.consultarAPI = this.consultarAPI.bind(this);
  }

  /*
  consultarAPI(peliculaExtraida){
    this.setState({pelicula: peliculaExtraida.Title});
  }
*/

  consultarAPI(peliculaExtraida){
    this.setState({pelicula: peliculaExtraida.Title,
      director: peliculaExtraida.Director,
      duracion: peliculaExtraida.Runtime,
      anio: peliculaExtraida.Year,
      genero: peliculaExtraida.Genre,
      sinopsis: peliculaExtraida.Plot,
      puntaje: peliculaExtraida.imdbRating});
  }


  render(){
    return (
      <div className="App">
        <main>
          <h1>Peliculas</h1>
          <button onClick={this.handlerClick.bind(this)}>
          Info pelicula
          </button>
            <h2>{this.state.pelicula}   ({this.state.duracion})</h2>
            <p>{this.state.puntaje}(imdb Rating)</p>
            <p>Genero: {this.state.genero}</p>
            <p>Director: {this.state.director}</p>
            <p>Resumen: {this.state.sinopsis}</p>
        </main>
  
      </div>
    );
  }

  handlerClick(){
    obtenerPelicula(this.consultarAPI);
  }
}

export default App;
