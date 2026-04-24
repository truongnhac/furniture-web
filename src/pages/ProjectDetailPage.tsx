import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { projects } from '../data/projects';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <p className="text-stone-400 text-lg mb-6">Project not found.</p>
        <Link to="/" className="text-sm tracking-widest uppercase underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const prev = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  return (
    <div>
      {/* Back */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <button
          onClick={() => navigate(-1)}
          className="text-xs tracking-widest uppercase text-stone-400 hover:text-stone-900 transition-colors flex items-center gap-2"
        >
          ← Back
        </button>
      </div>

      {/* Hero image */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div
          className="w-full aspect-[16/9] overflow-hidden cursor-zoom-in"
          onClick={() => setLightbox(project.images[0])}
        >
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Info */}
      <div className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="text-xs tracking-widest uppercase text-stone-400 mb-2">{project.category}</p>
          <h1 className="text-3xl md:text-5xl font-light text-stone-900 mb-6">{project.title}</h1>
          <p className="text-stone-600 leading-relaxed text-base max-w-prose">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs tracking-widest uppercase border border-stone-300 px-3 py-1 text-stone-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="text-sm space-y-4">
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-1">Location</p>
            <p className="text-stone-700">{project.location}</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-1">Year</p>
            <p className="text-stone-700">{project.year}</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-400 mb-1">Category</p>
            <p className="text-stone-700 capitalize">{project.category}</p>
            
          </div>
        </div>
          <div>
                  
          </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {project.images.slice(1).map((img, i) => (
          <div
            key={i}
            className="overflow-hidden cursor-zoom-in"
            onClick={() => setLightbox(img)}
          >
            <img
              src={img}
              alt={`${project.title} ${i + 2}`}
              className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      <div className="max-w-7xl mx-auto px-6 mt-20 flex justify-between border-t border-stone-200 pt-8">
        {prev ? (
          <Link to={`/projects/${prev.id}`} className="group flex flex-col gap-1">
            <span className="text-xs tracking-widest uppercase text-stone-400 group-hover:text-stone-700 transition-colors">
              ← Previous
            </span>
            <span className="text-stone-800 font-medium">{prev.title}</span>
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`/projects/${next.id}`} className="group flex flex-col gap-1 text-right">
            <span className="text-xs tracking-widest uppercase text-stone-400 group-hover:text-stone-700 transition-colors">
              Next →
            </span>
            <span className="text-stone-800 font-medium">{next.title}</span>
          </Link>
        ) : <span />}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="Full view" className="max-h-screen max-w-full object-contain" />
          <button
            className="absolute top-6 right-8 text-white text-3xl leading-none"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
