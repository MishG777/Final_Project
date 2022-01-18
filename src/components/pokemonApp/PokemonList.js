import React, { useState } from "react";
import "../pokemonApp/pokemonlist.css";
import axios from "axios";
import { Button } from "reactstrap";

function Pokemonlist() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const res = await axios.get(url);
    toArray.push(res.data);
    setPokemonType(res.data.types[0].type.name);
    setPokemonData(toArray);
  };

  return (
    <div className="main-div">
      <div className="left-div">
        <div className="left-cont">
          <h1>HEREE WILL BE MOVIIEEE</h1>
        </div>
      </div>
      <div className="right-div">
        <div className="right-cont">
          <p className="text">
            Pikachu bulbasaur charmander charizard butterfree pidgeot wartortle
            kakuna raticate
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="inputdefault">
              <input
                type="text"
                onChange={handleChange}
                placeholder="Enter Poki Name"
                id="usr"
                className="input-value"
              />
            </label>
          </form>

          {pokemonData.map((data) => {
            return (
              <>
                <div className="container">
                  <img
                    className="img"
                    src={data.sprites["front_default"]}
                    alt="here is poki"
                  />
                </div>
                <div className="poki-details">
                  <h2>Type: {pokemonType}</h2>
                  <h2>Abilities: {data.abilities[0].ability.name}</h2>
                  <h2>Height: {data.height}</h2>
                  <h2>weight: {data.weight}</h2>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Pokemonlist;
