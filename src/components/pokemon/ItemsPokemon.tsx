import { SimplePokemon } from '@/interfaces';
import { Heart} from 'lucide-react';
import Image from 'next/image';


interface Props{
    pokemon: SimplePokemon
}

export const ItemsPokemon =({pokemon}:Props)=> {
    const {id, name} = pokemon;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex justify-end px-4 pt-4">
            <Heart/>
        </div>
        <div className="flex flex-col items-center pb-10 w-[200px]">
            <Image
                key={id}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                width={100}
                height={100}
                alt={pokemon.name}
                priority={false}
            />
            <h5 className="mt-4 text-xl font-medium text-gray-900">{name}</h5>
            <div className="flex mt-2">
                <a href={`/pokemon/details/${id}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver pokemon</a>
            </div>
        </div>
    </div>
  );
}