import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-primary-foreground/70 font-body text-sm tracking-[0.3em] uppercase mb-4">
              Contato
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Vamos Conversar?
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg leading-relaxed mb-10">
              Estou à disposição para ajudá-lo a encontrar o imóvel ideal. 
              Entre em contato e agende uma conversa sem compromisso.
            </p>
            
            <div className="space-y-6">
              <a 
                href="tel:+5511999999999"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body text-sm text-primary-foreground/60">Telefone</p>
                  <p className="font-body text-lg">(11) 99999-9999</p>
                </div>
              </a>
              
              <a 
                href="mailto:ana@example.com"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body text-sm text-primary-foreground/60">E-mail</p>
                  <p className="font-body text-lg">ana@example.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body text-sm text-primary-foreground/60">Localização</p>
                  <p className="font-body text-lg">São Paulo, SP</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-10">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="bg-primary-foreground/5 rounded-lg p-8">
            <h3 className="font-display text-2xl font-semibold mb-6">
              Envie uma mensagem
            </h3>
            <form className="space-y-6">
              <div>
                <label className="font-body text-sm text-primary-foreground/60 mb-2 block">
                  Nome
                </label>
                <input 
                  type="text"
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-4 py-3 font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="font-body text-sm text-primary-foreground/60 mb-2 block">
                  E-mail
                </label>
                <input 
                  type="email"
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-4 py-3 font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="font-body text-sm text-primary-foreground/60 mb-2 block">
                  Telefone
                </label>
                <input 
                  type="tel"
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-4 py-3 font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className="font-body text-sm text-primary-foreground/60 mb-2 block">
                  Mensagem
                </label>
                <textarea 
                  rows={4}
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-4 py-3 font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/40 transition-colors resize-none"
                  placeholder="Como posso ajudá-lo?"
                />
              </div>
              <Button variant="hero" size="xl" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
