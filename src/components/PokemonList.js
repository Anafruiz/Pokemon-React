import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

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
PokemonList.propTypes = {
  name: PropTypes.string,
  types: PropTypes.string,
  id: PropTypes.number,
};
export default PokemonList;
