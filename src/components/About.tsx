// src/components/About.tsx
import { User } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white text-gray-900 px-6 py-20 flex flex-col items-center justify-center text-center"
    >
      <User className="w-10 h-10 text-indigo-600 mb-4" />
      <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
      <p className="max-w-2xl text-lg text-gray-700 leading-relaxed">
        Soy desarrollador frontend con más de 10 años de experiencia en la creación de productos digitales. He trabajado en proyectos para medios de comunicación, salud, finanzas y servicios, especializándome en rendimiento web, arquitectura de componentes y experiencia de usuario. Me gusta trabajar donde el diseño, el código y el negocio se conectan.
      </p>
      
    </section>
  );
}
