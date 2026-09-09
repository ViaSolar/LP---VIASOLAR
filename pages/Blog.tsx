import React from 'react';

export const Blog: React.FC = () => {
  return (
    <div className="pt-0 min-h-screen">
       <div className="relative h-64 md:h-80 bg-via-blue overflow-hidden mb-12">
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase drop-shadow-lg">Blog</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-via-blue mb-4">Em Breve</h2>
          <p className="text-gray-600">Estamos preparando conteúdos incríveis sobre energia solar, sustentabilidade e economia para você.</p>
        </div>
      </div>
    </div>
  );
};