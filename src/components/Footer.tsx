import logo from "@/assets/schneider-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-primary-foreground/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Schneider Imóveis"
              className="h-12 w-auto object-contain brightness-0 invert sm:h-14 md:h-16"
            />
          </a>
          
          <p className="text-primary-foreground/60 font-body text-sm text-center">
            © {new Date().getFullYear()} Schneider Imóveis. Todos os direitos reservados.
          </p>
          
          <p className="text-primary-foreground/60 font-body text-sm">
            CRECI 123456-F
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
