const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-primary-foreground/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-semibold text-primary-foreground">
              Schneider
            </span>
            <span className="text-primary-foreground/60 text-sm font-body">Imóveis</span>
          </div>
          
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
