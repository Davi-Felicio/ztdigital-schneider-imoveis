import { Bed, Bath, Car, Maximize, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  images: string[];
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  area: number;
  type: string;
}

const PropertyCard = ({
  images,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  parking,
  area,
  type,
}: PropertyCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-500">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={images[currentIndex]}
          alt={`${title} - Imagem ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-4"
                  : "bg-background/60 hover:bg-background/80"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-body uppercase tracking-wider">
            {type}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-display text-xl font-semibold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm font-body">
            {location}
          </p>
        </div>
        
        <div className="flex items-center gap-4 mb-4 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4" />
            <span className="text-sm font-body">{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4" />
            <span className="text-sm font-body">{bathrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Car className="w-4 h-4" />
            <span className="text-sm font-body">{parking}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4" />
            <span className="text-sm font-body">{area}m²</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">
            Valor
          </p>
          <p className="font-display text-2xl font-semibold text-foreground">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
