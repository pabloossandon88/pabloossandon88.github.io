// src/components/Projects.tsx
import { Code } from 'lucide-react';

const projects = [
  {
    title: 'DR-AI (Asistente médico)',
    link: 'https://dr-ai-cl.web.app/',
    repo: 'https://github.com/pabloossandon88/dr-ai-frontend',
    stack: ['React', 'Firebase', 'OpenAI'],
    description:
      'Aplicación web para asistencia médica con IA. Permite a pacientes acceder a información clínica de forma simple.',
  },
  /*
  {
    title: 'Co-Bros (Gestión de pagos grupales)',
    link: '#',
    repo: '#',
    stack: ['React', 'Express', 'MongoDB'],
    description:
      'App colaborativa (en desarrollo) para organizar deudas y pagos entre grupos sociales o deportivos.',
  },
  */
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white text-gray-900 py-20 px-6 text-center"
    >
      <Code className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
      <h2 className="text-3xl font-bold mb-10">Proyectos</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="border border-gray-200 rounded-lg p-6 shadow bg-gray-50 text-left hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{proj.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-white">
              {proj.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-indigo-600 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              {proj.link !== '#' && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline text-sm"
                >
                  Ver proyecto
                </a>
              )}
              {proj.repo !== '#' && (
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 underline text-sm"
                >
                  Código fuente
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
