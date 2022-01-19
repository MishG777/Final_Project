import React, { useState, useEffect } from "react";
import "../pokemonApp/pokemonlist.css";
import axios from "axios";
import Movies from "../movies/Movies";

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

  // ===========================================================================
  // const movies = ["1", "2", "3"];

  const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

  const [movies, setMoviesz] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMoviesz(data.results);
      });
  }, []);

  return (
    <div className="main-div">
      <div className="left-div">
        <div className="left-cont">
          {movies.map((movie) => (
            <Movies {...movie} key={movie.id} />
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------------------- */}
      <div className="right-div">
        <div className="right-cont">
          <h3>It's my Pokemon API</h3>
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
