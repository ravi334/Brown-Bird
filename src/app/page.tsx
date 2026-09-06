'use client';

import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import ContactForm from '@/components/ContactForm';
import { products, categories, getProductsByCategory } from '@/data/products';
import { useState } from 'react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('solar-panel');

  const solarPanelProducts = getProductsByCategory('solar-panel');
  const batteryProducts = getProductsByCategory('battery');
  const inverterProducts = getProductsByCategory('inverter');
  const upsProducts = getProductsByCategory('ups');
  const solarPcuProducts = getProductsByCategory('solar-pcu');
  const solarSystemProducts = getProductsByCategory('solar-system');

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-brown-dark mb-6">About Brown Bird</h2>
            <div className="mb-6 inline-block bg-solar-blue text-white px-6 py-2 rounded-full font-bold text-lg">
              🏆 Authorised Distributor of Tata Power Solar
            </div>
            <p className="text-xl text-gray-700 mb-4">
              Brown Bird is an authorized distributor of Tata Power Solar, UTL solar panels, batteries, inverters, and power solutions 
              serving Hubli, Belgaum, and across Karnataka. We provide End to End,  complete renewable energy and power backup solutions 
              for residential, commercial, and industrial applications.
            </p>
            <p className="text-lg text-gray-600">
              With years of industry expertise and a comprehensive product catalog from Tata Power Solar and UTL (A Brand of Fujiyama Power Systems), 
              we ensure quality products and reliable customer support for all your power and energy needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Navigation */}
      <section className="section-padding site-grid" id="products">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-brown-dark mb-12 text-center">Our Products</h2>
          
          {/* Category Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-lg text-center transition transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-solar-blue text-white shadow-lg'
                    : 'bg-white text-brown-dark border-2 border-solar-blue hover:bg-blue-50'
                }`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <p className="font-semibold text-sm">{category.name}</p>
              </button>
            ))}
          </div>

          {/* Solar Panels Category */}
          {activeCategory === 'solar-panel' && (
            <div>
              <h3 className="text-3xl font-bold text-brown-dark mb-2 text-center">Solar Panels</h3>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                High-efficiency monocrystalline solar panels with latest technologies: TOPCon, PERC, Bifacial, and DCR compliant options
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {solarPanelProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* Batteries Category */}
          {activeCategory === 'battery' && (
            <div>
              <h3 className="text-3xl font-bold text-brown-dark mb-2 text-center">Batteries</h3>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Complete battery solutions: Inverter batteries, Solar batteries, and advanced Lithium batteries
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {batteryProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* Home Inverters Category */}
          {activeCategory === 'inverter' && (
            <div>
              <h3 className="text-3xl font-bold text-brown-dark mb-2 text-center">Home Inverters</h3>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Reliable inverters for homes and offices with capacities from 1kVA to 3kVA
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inverterProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* Commercial UPS Category */}
          {activeCategory === 'ups' && (
            <div>
              <h3 className="text-3xl font-bold text-brown-dark mb-2 text-center">Commercial UPS</h3>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Enterprise-grade UPS systems for business continuity and critical infrastructure protection
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upsProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* Solar PCU & Inverters Category */}
          {activeCategory === 'solar-pcu' && (
            <div>
              <h3 className="text-3xl font-bold text-brown-dark mb-2 text-center">Solar Inverters & PCU</h3>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                On-Grid, Off-Grid, and Hybrid solar inverters for all types of solar installations
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solarPcuProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* Solar System Kits Category */}
          {activeCategory === 'solar-system' && (
            <div>
              <h3 className="text-3xl font-bold text-brown-dark mb-2 text-center">Solar System Kits</h3>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Complete ready-to-install solar systems: On-Grid, Off-Grid, Hybrid, and Government Subsidy eligible kits
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solarSystemProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product Summary Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-brown-dark mb-12 text-center">Complete Product Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-brown-dark mb-4">☀️ Solar Panels</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ TOPCon Monocrystalline (22-23% efficiency)</li>
                <li>✓ PERC Monocrystalline (20-21% efficiency)</li>
                <li>✓ Bifacial Solar Panels</li>
                <li>✓ DCR Compliant (Government subsidy eligible)</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-brown-dark mb-4">🔋 Batteries</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Inverter Batteries (100-200Ah)</li>
                <li>✓ Solar Batteries (150-200Ah)</li>
                <li>✓ Lithium Batteries (LiFePO4 48V 100-200Ah)</li>
                <li>✓ Cycle Life up to 5000+ (Lithium)</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-brown-dark mb-4">⚡ Home Inverters</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 1kVA to 3kVA capacity</li>
                <li>✓ Automatic voltage stabilization</li>
                <li>✓ Overload protection</li>
                <li>✓ Digital display & monitoring</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-brown-dark mb-4">🏢 Commercial UPS</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 1kVA to 10kVA capacity</li>
                <li>✓ Single & Three-phase options</li>
                <li>✓ Enterprise-grade reliability</li>
                <li>✓ Hot-swappable batteries</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-brown-dark mb-4">🔌 Solar Inverters & PCU</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ On-Grid Solar Inverters (3-5kW)</li>
                <li>✓ Off-Grid Solar Inverters</li>
                <li>✓ Hybrid Solar PCU (5-10kW)</li>
                <li>✓ Built-in MPPT controllers</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-brown-dark mb-4">🌞 Solar System Kits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ On-Grid Systems (3kW)</li>
                <li>✓ Off-Grid Systems (5kW)</li>
                <li>✓ Hybrid Systems (10kW)</li>
                <li>✓ Government Subsidy Kits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-padding" id="applications">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-brown-dark mb-12 text-center">Applications & Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏠', title: 'Residential', desc: 'Rooftop solar systems and power backup for homes' },
              { icon: '🏢', title: 'Commercial', desc: 'Solar solutions and UPS for offices, shops, and businesses' },
              { icon: '🏭', title: 'Industrial', desc: 'Large-scale industrial solar and three-phase UPS systems' },
              { icon: '🌾', title: 'Agricultural', desc: 'Solar pump systems and standalone power for farms' },
              { icon: '🏥', title: 'Healthcare', desc: 'Reliable power backup for hospitals and clinics' },
              { icon: '🏫', title: 'Education', desc: 'Solar solutions for schools, colleges, and institutions' },
              { icon: '🛒', title: 'Retail', desc: 'POS systems and continuous power for retail stores' },
              { icon: '🏗️', title: 'Construction', desc: 'Temporary power solutions and site electrification' },
            ].map((app, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
                <div className="text-5xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-bold text-brown-dark mb-2">{app.title}</h3>
                <p className="text-gray-600">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50" id="services">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-brown-dark mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Product Selection & Consultation', desc: 'Expert guidance to choose the right solar, battery, and power solution for your specific needs' },
              { title: 'System Design & Engineering', desc: 'Custom system design based on your location, load requirements, and energy goals' },
              { title: 'Installation & Setup', desc: 'Professional installation and commissioning by certified technicians' },
              { title: 'Technical Support', desc: '24/7 technical support, troubleshooting, and maintenance services' },
              { title: 'Warranty & After-Sales', desc: 'Comprehensive warranty coverage and reliable after-sales support' },
              { title: 'Subsidy & Financing', desc: 'Assistance with government subsidies, loans, and financing options' },
              { title: 'Performance Monitoring', desc: 'Real-time monitoring and analytics of your solar and power systems' },
              { title: 'System Upgrades', desc: 'Expansion and upgrade services for your existing power systems' },
              { title: 'Training & Support', desc: 'User training and comprehensive documentation for system operation' },
            ].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-solar-blue to-blue-600 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-blue-100">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-brown-dark mb-12 text-center">Service Areas</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-6 text-center">
              Brown Bird serves the following areas in Karnataka with dedicated support and service:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-brown-dark mb-4 text-lg">Primary Service Areas</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2"><span className="text-solar-blue font-bold text-xl">●</span> Hubli (Hubballi)</li>
                  <li className="flex items-center gap-2"><span className="text-solar-blue font-bold text-xl">●</span> Belgaum (Belagavi)</li>
                  <li className="flex items-center gap-2"><span className="text-solar-blue font-bold text-xl">●</span> Dharwad</li>
                  <li className="flex items-center gap-2"><span className="text-solar-blue font-bold text-xl">●</span> Gadag</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-brown-dark mb-4 text-lg">Extended Coverage</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2"><span className="text-solar-blue font-bold text-xl">●</span> North Karnataka region</li>
                  <li className="flex items-center gap-2"><span className="text-solar-blue font-bold text-xl">●</span> All major cities in Karnataka</li>
                  <li className="flex items-center gap-2"><span className="text-solar-blue font-bold text-xl">●</span> Pan-Karnataka service network</li>
                  <li className="flex items-center gap-2"><span className="text-solar-blue font-bold text-xl">●</span> Custom project deliveries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50" id="contact">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-brown-dark mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-brown-dark mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-4xl">📞</div>
                  <div>
                    <h4 className="font-bold text-brown-dark text-lg">Phone</h4>
                    <p className="text-gray-700 text-lg">+91-9481287009</p>
                    <p className="text-gray-700 text-lg">+91-9916470467</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h4 className="font-bold text-brown-dark text-lg">Location</h4>
                    <p className="text-gray-700">Hubli & Belgaum, Karnataka</p>
                    <p className="text-gray-700">Service across Karnataka state</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl">💼</div>
                  <div>
                    <h4 className="font-bold text-brown-dark text-lg">Business</h4>
                    <p className="text-gray-700">Authorised Distributor of Tata Power Solar</p>
                    <p className="text-gray-700">Solar, Battery & Power Solutions</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-4xl">🏢</div>
                  <div>
                    <h4 className="font-bold text-brown-dark text-lg">Products</h4>
                    <p className="text-gray-700">Solar Panels, Batteries, Inverters</p>
                    <p className="text-gray-700">UPS, Solar PCU, Complete Systems</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brown-dark to-solar-blue text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Future?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact Brown Bird today for a free consultation and site assessment. 
            Discover the right solar, battery, and power solution for your home, business, or industry. 
            Let us help you switch to clean, reliable, and sustainable energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-brown-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-brown-dark transition">
              Call: +91-9481287009
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
