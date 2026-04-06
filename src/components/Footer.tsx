import {
  MessageCircle,
  MapPin,
} from "lucide-react";
import { generateWhatsAppLink } from "../utils/whatsapp";

const Footer = () => {
  return (
    <footer className="bg-text text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyIj48cGF0aCBmaWxsPSIjRkYzMzY2IiBmaWxsLW9wYWNpdHk9IjEiIGQ9Ik0wLDE2TDEyMCwyMS4zQzI0MCwyNyw0ODAsMzcsNzIwLDM3Qzk2MCwzNywxMjAwLDI3LDEzMjAsMjEuM0wxNDQwLDE2TDE0NDAsMEwxMzIwLDBDMTIwMCwwLDk2MCwwLDcyMCwwQzQ4MCwwLDI0MCwwLDEyMCwwTDBsMFoiPjwvcGF0aD48L3N2Zz4=')] bg-repeat-x"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="text-slate-300 font-bold mb-6">
              A melhor experiência em aluguel de brinquedos infláveis em Maceió.
              Diversão, segurança e pontualidade para a sua festa.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-display font-bold mb-6 text-accent ">
              Links Rápidos
            </h4>
            <ul className="space-y-3 text-slate-300 font-bold">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#catalogo"
                  className="hover:text-primary transition-colors"
                >
                  Catálogo de Brinquedos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-display font-bold mb-6 text-accent ">
              Contato
            </h4>
            <ul className="space-y-4 text-slate-300 font-bold">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={24} />
                <span>
                  Atendemos em toda Maceió - AL e região metropolitana.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle
                  className="text-primary shrink-0"
                  size={24}
                />
                <a
                  href={generateWhatsAppLink("Olá!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (82) 99335-1212
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-slate-800 pt-8 text-center text-slate-400 font-bold text-sm">
          <p>
            &copy; {new Date().getFullYear()} BrinkMais - Aluguel de Infláveis
            Alagoas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
