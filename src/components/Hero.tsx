import { useInView } from '../hooks/useInView';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export default function Hero() {
  const { ref } = useInView(); // Solo queremos la referencia aquí

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black text-white px-4"
    >
      <h1 className="text-xl sm:text-7xl font-bold text-indigo-500 ">Pablo Ossandón</h1>
      <h2 className="text-xs mt-4 text-gray-400 max-w-xl font-mono">
        Frontend Developer especializado en React, UI moderna y rendimiento web
      </h2>
      <div className="text-gray-500 flex flex-row justify-center gap-6 pt-10 text-sm sm:text-base items-center">
        <a
        
          href="mailto:pabloossandon88@gmail.com"
          className="flex items-center gap-2 hover:underline"
        >
          <Mail className="w-5 h-5" /> 
        </a>
        <a
          href="https://www.linkedin.com/in/pabloossandontoro/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Linkedin className="w-5 h-5" /> 
        </a>
        <a
          href="https://github.com/pabloossandon88"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="/CV.Pablo.Ossandon.pdf"
          download
          className="flex items-center gap-2 hover:underline"
        >
          <FileText className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
