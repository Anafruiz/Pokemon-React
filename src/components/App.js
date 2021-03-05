import logo from "../images/logo.svg";
import "../stylesheet/App.scss";
import list from "../data/data.json";
import React from "react";
import PokemonList from "./PokemonList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: list,
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="title">
            {" "}
            <img
              src="https://img.webme.com/pic/t/tuquiehd/pokeballgif.gif"
              widht="75px"
              height="75px"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
              widht="75px"
              height="75px"
            />
            <img
              src="https://img.webme.com/pic/t/tuquiehd/pokeballgif.gif"
              widht="75px"
              height="75px"
            />
          </h1>
        </header>
        <PokemonList pokeitem={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
