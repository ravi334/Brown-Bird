const completedProjects = [
  {
    image: '/projects/mundgod-tibetan-colony-50kw.jpg',
    alt: '50 kW solar rooftop installed at Mundgod Tibetan Colony',
    eyebrow: '50 kW rooftop solar',
    title: 'Mundgod Tibetan Colony',
    description: 'A high-capacity rooftop installation delivering dependable clean power for a large institutional campus.',
  },
  {
    image: '/projects/sai-ganesh-rooftop-solar.jpg',
    alt: 'Solar rooftop installation at Sai Ganesh',
    eyebrow: 'Commercial rooftop solar',
    title: 'Sai Ganesh',
    description: 'A commercial solar installation designed to reduce operating costs and keep the business powered through the day.',
  },
];

export default function CompletedProjects() {
  return (
    <section className="section-padding site-grid" id="projects">
      <div className="container-wide">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-solar-blue">Work that speaks for itself</p>
            <h2 className="text-4xl font-bold text-brown-dark md:text-5xl">Completed Projects</h2>
            <p className="mt-4 text-lg text-gray-600">Real solar installations by Brown Bird, built for lasting performance across Karnataka.</p>
          </div>
          <div className="rounded-full border border-solar-blue/20 bg-white px-4 py-2 text-sm font-bold text-solar-blue shadow-sm">
            5,000+ installations
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {completedProjects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_35px_rgba(7,30,56,.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(25,118,210,.16)]">
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-[#0d4771] via-[#147b93] to-[#fdb913] sm:h-96">
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-white">
                  <div>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-3xl backdrop-blur-sm" aria-hidden="true">
                      &#9728;
                    </div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em]">Solar rooftop installation</p>
                    <p className="mt-2 text-sm text-cyan-50">Project photo loading soon</p>
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071e38]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">{project.eyebrow}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="leading-7 text-gray-600">{project.description}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 font-bold text-solar-blue transition hover:gap-3">
                  Discuss your project <span aria-hidden="true">&#8594;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}