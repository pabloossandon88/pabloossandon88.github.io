// src/components/Contact.tsx
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-20 px-6 text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>

      <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm sm:text-base items-center">
        <a
          href="mailto:pabloossandon88@gmail.com"
          className="flex items-center gap-2 hover:underline"
        >
          <Mail className="w-5 h-5" /> pabloossandon88@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/pabloossandontoro/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Linkedin className="w-5 h-5" /> LinkedIn
        </a>
        <a
          href="https://github.com/pabloossandon88"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Github className="w-5 h-5" /> GitHub
        </a>
        <a
          href="/CV.Pablo.Ossandon.pdf"
          download
          className="flex items-center gap-2 hover:underline"
        >
          <FileText className="w-5 h-5" /> Descargar CV
        </a>
      </div>
    </section>
  );
}
