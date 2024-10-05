import Link from "next/link";
import { House, Search, Heart,Github } from 'lucide-react';
import Image from "next/image";
import LogoPokemon from "@/public/pokemon-logo.png"

export default function NavbarComponent() {
  return (
    <nav className="w-[200px] p-4 flex flex-col justify-between h-screen">
        <div>
            <Image
                src={LogoPokemon}
                width={150}
                height={50}
                alt="Logo oficial de pokemon"
                className="py-6"
            />

            <ul className="my-4">
                <li>
                    <Link href="/" className="flex gap-4 py-2 items-center"><House strokeWidth={1.3} size={24}/> Inicio</Link>
                </li>
                <li>
                    <Link href="/search" className="flex gap-4 py-2 items-center"><Search strokeWidth={1.3} size={24}/> Buscar</Link>
                </li>
                <li>
                    <Link href="/favorites" className="flex gap-4 py-2 items-center"><Heart strokeWidth={1.3} size={24}/> Mis favoritos</Link>
                </li>
            </ul>
        </div>
        <div className="mt-auto flex flex-col items-center text-center">
            <Github className="mb-2" />
            <a
                className="hover:underline hover:underline-offset-4 mb-8"
                href="https://github.com/keytelpumaylle"
                target="_blank"
                rel="noopener noreferrer"
            >
                Desarrollado por <span className="font-bold">Keytel Pumaylle</span>
            </a>  
        </div>
    </nav>
  );
}