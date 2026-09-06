export default function Footer() {
  return (
    <footer className="bg-[#071e38] py-12 text-white">
      <div className="container-wide flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p className="text-xl font-bold">Brown Bird<span className="text-gold">.</span></p>
          <p className="text-sm text-cyan-100">Solar, Battery & Inverter Distributor</p>
        </div>
        <div className="text-sm text-cyan-100">
          <p>Hubli & Belgaum, Karnataka</p>
          <p className="mt-1 font-semibold text-white">+91-9481287009 <span className="text-gold">&#183;</span> +91-9916470467</p>
        </div>
      </div>
    </footer>
  );
}
