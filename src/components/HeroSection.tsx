export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#071e38] via-[#0d4771] to-[#147b93] text-white">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(120deg, transparent 35%, rgba(255,255,255,.12) 35.2%, transparent 35.5%), linear-gradient(0deg, rgba(0,0,0,.24), transparent)' }} />
      <div className="container-wide relative grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_#fdb913]" />
            Authorised Tata Power Solar and UTL Solar Distributor
          </div>
          <h2 className="mb-6 max-w-2xl text-5xl font-bold leading-[1.03] md:text-7xl">
            Make your power <span className="text-gold">brighter.</span>
          </h2>
          <p className="mb-8 max-w-xl text-lg leading-8 text-cyan-50 md:text-xl">
            Reliable solar, storage, and backup systems designed for homes, businesses, and industries across Karnataka.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="rounded-lg border border-white/60 bg-white/5 px-8 py-4 text-center font-bold backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white hover:text-brown-dark">
              Explore Products <span aria-hidden="true">&#8594;</span>
            </a>
            <a href="#contact" className="rounded-lg border border-white/60 bg-white/5 px-8 py-4 text-center font-bold backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white hover:text-brown-dark">
              Request a Consultation
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-cyan-100">
            <span><strong className="text-white">15+</strong> years of expertise</span>
            <span><strong className="text-white">6</strong> complete product lines</span>
            <span><strong className="text-white">5,000+</strong> installations across Karnataka</span>
            <span><strong className="text-white">24/7</strong> support</span>
          </div>
        </div>
        <div className="relative flex min-h-[320px] items-center justify-center lg:min-h-[430px]">
          <div className="hero-sun" aria-hidden="true" />
          <div className="absolute bottom-8 left-1/2 h-24 w-[90%] -translate-x-1/2 rounded-[50%] bg-[#071e38]/60 blur-2xl" />
          <div className="hero-panel" aria-label="Illustration of a solar panel" role="img" />
          <div className="absolute bottom-0 right-4 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm backdrop-blur-md">
            <span className="mr-2 text-gold">&#9670;</span> Clean energy, built to last
          </div>
        </div>
      </div>
    </section>
  );
}
