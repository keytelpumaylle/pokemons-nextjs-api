import { SimplePokemon } from "@/interfaces";
import { ItemsPokemon } from "./ItemsPokemon";

interface Props{
    pokemons: SimplePokemon[];
}

export const CardPokemon=({pokemons}:Props)=> {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
        
            {
                pokemons.map(pokemon =>(
                    <ItemsPokemon key={pokemon.id} pokemon={pokemon}/>
                ))
            }
    </div>
  );
}