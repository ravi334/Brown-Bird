'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hi Brown Bird! I have an enquiry:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nRequirement: ${formData.message}`;
    const whatsappLink = `https://wa.me/919481287009?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
    
    // Show confirmation message
    setSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 2000);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-lg md:p-8">
      <h3 className="mb-2 text-2xl font-bold text-brown-dark">Send an Enquiry</h3>
      <p className="mb-6 text-gray-600">Tell us what you need and we'll connect via WhatsApp.</p>
      <div className="space-y-4">
        <label className="block text-sm font-semibold text-gray-700">
          Name
          <input 
            required 
            name="name" 
            type="text" 
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none focus:border-solar-blue focus:ring-2 focus:ring-blue-100"
          />
        </label>
        <label className="block text-sm font-semibold text-gray-700">
          Phone
          <input 
            required 
            name="phone" 
            type="tel" 
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none focus:border-solar-blue focus:ring-2 focus:ring-blue-100"
          />
        </label>
        <label className="block text-sm font-semibold text-gray-700">
          Requirement
          <textarea 
            required 
            name="message" 
            rows={4} 
            value={formData.message}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none focus:border-solar-blue focus:ring-2 focus:ring-blue-100"
          />
        </label>
        <button type="submit" className="w-full rounded-lg bg-solar-blue px-6 py-3 font-bold text-white transition hover:bg-blue-600 flex items-center justify-center gap-2">
          <span>💬</span> Contact via WhatsApp
        </button>
        {submitted && <p className="text-sm font-semibold text-green-700">✓ Opening WhatsApp. Our team will respond shortly!</p>}
      </div>
    </form>
  );
}
