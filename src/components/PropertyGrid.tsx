import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
    title: "Casa em Condomínio Fechado",
    location: "Alphaville, Barueri - SP",
    price: "R$ 1.850.000",
    bedrooms: 4,
    bathrooms: 3,
    parking: 3,
    area: 320,
    type: "Venda",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop",
    title: "Apartamento Alto Padrão",
    location: "Jardins, São Paulo - SP",
    price: "R$ 2.400.000",
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    area: 180,
    type: "Venda",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop",
    title: "Cobertura Duplex",
    location: "Moema, São Paulo - SP",
    price: "R$ 3.200.000",
    bedrooms: 4,
    bathrooms: 5,
    parking: 4,
    area: 420,
    type: "Venda",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
    title: "Casa Térrea Moderna",
    location: "Granja Viana, Cotia - SP",
    price: "R$ 12.000/mês",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: 200,
    type: "Aluguel",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&auto=format&fit=crop",
    title: "Apartamento Garden",
    location: "Vila Mariana, São Paulo - SP",
    price: "R$ 980.000",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: 95,
    type: "Venda",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop",
    title: "Studio Mobiliado",
    location: "Pinheiros, São Paulo - SP",
    price: "R$ 4.500/mês",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: 45,
    type: "Aluguel",
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
