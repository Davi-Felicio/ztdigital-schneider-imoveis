import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: 1,
    images: [
      "/src/assets/barracoes/barracoes1.jpeg",
      "/src/assets/barracoes/barracoes2.jpeg",
      "/src/assets/barracoes/barracoes3.jpeg",
      "/src/assets/barracoes/barracoes4.jpeg",
      "/src/assets/barracoes/barracoes5.jpeg",
    ],
    title: "Barracões em Toledo",
    location: "Rua Protásio Alves, 2117, Vila Industrial. Toledo-PR",
    price: "R$ 1.850.000",
    bedrooms: 4,
    bathrooms: 3,
    parking: 3,
    area: 320,
    type: "Aluguel",
  },
  {
    id: 2,
    images: [
      "/src/assets/beirario/Beirario1.jpeg",
      "/src/assets/beirario/Beirario2.jpeg",
      "/src/assets/beirario/Beirario3.jpeg",
      "/src/assets/beirario/Beirario4.jpeg",
      "/src/assets/beirario/Beirario5.jpeg",
    ],
    title: "Linha Alto Palmares - Beira Rio",
    location: "Distrito de Barra Bonita, Três Barras do Paraná-PR",
    price: "",
    area: 3957,
    type: "Venda",
  },
  {
    id: 3,
    images: [
      "/src/assets/beirario2/beirario22.jpeg",
      "/src/assets/beirario2/beirario21.jpeg",
      "/src/assets/beirario2/beirario23.jpeg",
      "/src/assets/beirario2/beirario24.jpeg",
      "/src/assets/beirario2/beirario25.jpeg",
    ],
    title: "2 Lotes Beira Rio - Linha Alto Palmares",
    location: "Distrito de Barra Bonita, Três Barras do Paraná-PR",
    price: "",
    area: 2500,
    type: "Venda",
  },
  {
    id: 4,
    images: [
      "/src/assets/beirario3/beirario31.jpeg",
      "/src/assets/beirario3/beirario32.jpeg",
      "/src/assets/beirario3/beirario33.jpeg",
      "/src/assets/beirario3/beirario34.jpeg",
      "/src/assets/beirario3/beirario35.jpeg",
    ],
    title: "Casa Beira Rio Mobiliada",
    location: "Linha Alto Palmares, Distrito de Barra Bonita, Três Barras do Paraná-PR",
    price: "",
    bedrooms: 3,
    bathrooms: 1,
    area: 200,
    type: "Venda",
  },
  {
    id: 5,
    images: [
      "/src/assets/colegiointegral/colegiointegral4.jpeg",
      "/src/assets/colegiointegral/colegiointegral2.png",
      "/src/assets/colegiointegral/colegiointegral3.png",
      "/src/assets/colegiointegral/colegiointegral1.png",
      "/src/assets/colegiointegral/colegiointegral5.jpeg",
    ],
    title: "Imóvel Comercial - Vila Industrial",
    location: "Rua 13 de Abril, 81, Vila Industrial, Toledo-PR",
    price: "",
    bathrooms: 8,
    parking: 20,
    area: 1100,
    type: "Venda",
  },
  
];

const PropertyGrid = () => {
  return (
    <section id="imoveis" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Portfólio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Imóveis em Destaque
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Uma seleção exclusiva de imóveis cuidadosamente escolhidos para atender 
            aos mais exigentes padrões de qualidade e conforto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
