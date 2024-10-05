import { Github } from 'lucide-react';

export default function FooterComponent() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/keytelpumaylle"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Github />
            Desarrollado por <span className="font-bold">Keytel Pumaylle</span>
        </a>  
    </footer>
  );
}