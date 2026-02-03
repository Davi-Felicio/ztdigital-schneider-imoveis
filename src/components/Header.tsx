import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/schneider-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Schneider Imóveis"
              className="h-14 w-auto object-contain sm:h-16 md:h-20"
            />
          </a>
          
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
            <a
              href="https://wa.me/5543998737544"
              className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-body">(43) 99873-7544</span>
            </a>
            <Button variant="elegant" size="sm" asChild>
              <a href="https://wa.me/5543998737544">Fale Comigo</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
