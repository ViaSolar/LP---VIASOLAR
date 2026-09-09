import React from 'react';
import { IMAGES } from '../constants';

const VIDEOS = [
  { 
    id: 1, 
    title: "Depoimento - Família Silva", 
    location: "Barra da Tijuca, RJ",
    url: "https://www.youtube.com/embed/LXb3EKWsInQ" // Placeholder
  },
  { 
    id: 2, 
    title: "Instalação Comercial", 
    location: "Centro, RJ",
    url: "https://www.youtube.com/embed/LXb3EKWsInQ" // Placeholder
  },
  { 
    id: 3, 
    title: "Economia Comprovada", 
    location: "Niterói, RJ",
    url: "https://www.youtube.com/embed/LXb3EKWsInQ" // Placeholder
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="pt-0">
       <div className="relative h-64 md:h-80 bg-via-blue overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-30" 
             style={{ backgroundImage: `url(${IMAGES.BANNER_DESKTOP})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase drop-shadow-lg">Nossos Projetos</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
          Confira algumas das instalações realizadas pela Via Solar. Levamos economia e sustentabilidade para diversos lares e empresas no Rio de Janeiro.
        </p>

        {/* --- Video Gallery Section --- */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px bg-gray-300 w-16 md:w-32"></div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-via-blue uppercase text-center">
              Depoimentos de Clientes
            </h2>
            <div className="h-px bg-gray-300 w-16 md:w-32"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEOS.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
                <div className="relative w-full aspect-video bg-black">
                  <iframe 
                    src={video.url} 
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-via-blue text-lg mb-1">{video.title}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                    {video.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Image Gallery Section --- */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px bg-gray-300 w-16 md:w-32"></div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-via-blue uppercase text-center">
              Galeria de Fotos
            </h2>
            <div className="h-px bg-gray-300 w-16 md:w-32"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-lg aspect-video shadow-md cursor-pointer bg-gray-100">
                <img 
                  src={item % 2 === 0 ? IMAGES.SERVICE_ROOF : IMAGES.ABOUT_US} 
                  alt={`Projeto ${item}`} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-via-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <span className="font-heading font-bold text-lg mb-2">Instalação Residencial</span>
                  <span className="text-sm font-light border-t border-white/30 pt-2 px-4">Rio de Janeiro</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};