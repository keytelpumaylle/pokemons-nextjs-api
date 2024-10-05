import { CardPokemon } from "@/components";
import { PokemonResponse, SimplePokemon } from "@/interfaces";
import Image from "next/image";

const getPokemons = async( limit = 250, offset= 0 ):Promise<SimplePokemon[]> => {
    const data:PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${ offset }`)
      .then( res => res.json() );
  
      const pokemons = data.results.map( pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
      }));

  
      return pokemons;
  }

export default async function HomePage() {

    const pokemons = await getPokemons()

    return (
      <>
      <div className="flex gap-4 items-center align-bottom">
        <h1 className="font-extrabold text-[40px]">Total Pokemons</h1><small className="text-[25px]">( 205 )</small>
      </div>
      <div className="flex flex-col">
        <CardPokemon pokemons={pokemons}/>
      </div>
      </>
    );
  }