export default function Footer() {
  return (
    <footer className="bg-brown-dark py-10 text-white">
      <div className="container-wide flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p className="text-xl font-bold">Brown Bird</p>
          <p className="text-sm text-orange-100">Solar, Battery & Inverter Distributor</p>
        </div>
        <div className="text-sm text-orange-100">
          <p>Hubli & Belgaum, Karnataka</p>
          <p>+91-9481287009 · +91-9916470467</p>
        </div>
      </div>
    </footer>
  );
}
