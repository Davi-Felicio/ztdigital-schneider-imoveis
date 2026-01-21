import { Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-semibold text-foreground">
              Schneider
            </span>
            <span className="text-muted-foreground text-sm font-body">Imóveis</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#imoveis" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">
              Imóveis
            </a>
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">
              Sobre
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+5511999999999" className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-body">(11) 99999-9999</span>
            </a>
            <Button variant="elegant" size="sm">
              Fale Comigo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
