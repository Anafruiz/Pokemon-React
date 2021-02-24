import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheet/PokemonList.scss";
const PokemonList = (props) => {
  const item = props.pokeitem.map((pokemonItem, index) => {
    return (
      <li className="itemPoke" key={pokemonItem.id} id={index}>
        <Pokemon pokemon={pokemonItem} />
      </li>
    );
  });
  return (
    <div>
      <ul className="containerPok">{item}</ul>
    </div>
  );
};
export default PokemonList;
