import React from "react";
import PropTypes from "prop-types";

import "../stylesheet/Pokemon.scss";
const Pokemon = (props) => {
  const pokeType = props.pokemon.types.map((TypePoke, index) => {
    return <li key={index}>{TypePoke}</li>;
  });
  return (
    <>
      <img src={props.pokemon.url} width="150px" height="150px" />
      <h2 className="name">{props.pokemon.name}</h2>
      <div>
        <ul className="typepoke">{pokeType}</ul>
      </div>
    </>
  );
};
Pokemon.propTypes = {
  name: PropTypes.string,
  types: PropTypes.string,
};
export default Pokemon;
