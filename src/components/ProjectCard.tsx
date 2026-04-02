import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block overflow-hidden relative bg-stone-100"
    >
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/50 transition-all duration-500 flex items-end">
        <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-[10px] tracking-widest uppercase text-stone-300 mb-1">
            {project.category}
          </p>
          <h3 className="text-white font-semibold text-lg leading-tight">{project.title}</h3>
          <p className="text-stone-400 text-sm mt-1">{project.location} · {project.year}</p>
        </div>
      </div>
    </Link>
  );
}
