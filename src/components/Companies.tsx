// src/components/Companies.tsx
import { Briefcase } from 'lucide-react';

const companies = [
  {
    name: 'La Red TV',
    link: 'https://www.lared.cl/',
    logo: '',
  },
  {
    name: 'ATV.pe',
    link: 'https://www.atv.pe/',
    logo: '',
  },
  {
    name: 'Repretel',
    link: 'https://www.repretel.com/',
    logo: '',
  },
  {
    name: 'Garmin Chile',
    link: 'https://www.garmin.cl/',
    logo: '',
  },
  {
    name: 'Bazhars',
    link: 'https://bazhars.cl/',
    logo: '',
  },
  {
    name: 'Compara Software',
    link: 'https://www.comparasoftware.cl/',
    logo: '',
  },
];

export default function Companies() {
  return (
    <section
      id="companies"
      className="bg-gray-50 text-gray-900 py-20 px-6 flex flex-col items-center justify-center text-center"
    >
      <Briefcase className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
      <h2 className="text-3xl font-bold mb-10">Trabajos</h2>
      <p className=" text-center max-w-2xl text-lg text-gray-700 leading-relaxed mb-10">Algunos de los proyectos en los que he participado en los ultimos años</p>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
        {companies.map((company) => (
          <a
            key={company.name}
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md hover:scale-105 transition-transform bg-white flex items-center justify-center text-lg font-medium gap-2"
          >
            <span>{company.logo}</span> {company.name}
          </a>
        ))}
      </div>
    </section>
  );
}
