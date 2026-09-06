export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-brown-dark via-brown-light to-solar-blue text-white">
      <div className="container-wide flex min-h-[520px] items-center py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-200">
            Brown Bird Solar Distributor
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Reliable Solar & Power Solutions for Karnataka
          </h2>
          <p className="mb-8 max-w-2xl text-lg leading-8 text-blue-50 md:text-xl">
            Quality solar panels, batteries, inverters, and complete energy systems for homes, businesses, and industries.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="rounded-lg bg-gold px-8 py-4 text-center font-bold text-brown-dark transition hover:bg-yellow-300">
              Explore Products
            </a>
            <a href="#contact" className="rounded-lg border-2 border-white px-8 py-4 text-center font-bold transition hover:bg-white hover:text-brown-dark">
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
