import { Award, Users, Home, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Home, value: "500+", label: "Imóveis Vendidos" },
  { icon: Users, value: "1.200+", label: "Clientes Satisfeitos" },
  { icon: Award, value: "10+", label: "Anos de Experiência" },
  { icon: ThumbsUp, value: "98%", label: "Taxa de Satisfação" },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              Sobre Mim
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Ana Oliveira
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Sou corretora de imóveis há mais de 10 anos, especializada em imóveis de 
              alto padrão na região de São Paulo. Minha missão é transformar o sonho 
              da casa própria em realidade, oferecendo um atendimento personalizado 
              e transparente.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              Com uma carteira diversificada de imóveis para venda e locação, 
              trabalho com dedicação para encontrar o imóvel perfeito para cada 
              cliente, seja para moradia ou investimento.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">
                  CRECI 123456-F
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  Corretora Credenciada
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-elegant text-center hover:shadow-hover transition-shadow duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-display text-3xl font-semibold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
