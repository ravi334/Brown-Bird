'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-lg md:p-8">
      <h3 className="mb-2 text-2xl font-bold text-brown-dark">Send an Enquiry</h3>
      <p className="mb-6 text-gray-600">Tell us what you need and our team will get back to you.</p>
      <div className="space-y-4">
        <label className="block text-sm font-semibold text-gray-700">
          Name
          <input required name="name" type="text" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none focus:border-solar-blue focus:ring-2 focus:ring-blue-100" />
        </label>
        <label className="block text-sm font-semibold text-gray-700">
          Phone
          <input required name="phone" type="tel" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none focus:border-solar-blue focus:ring-2 focus:ring-blue-100" />
        </label>
        <label className="block text-sm font-semibold text-gray-700">
          Requirement
          <textarea required name="message" rows={4} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none focus:border-solar-blue focus:ring-2 focus:ring-blue-100" />
        </label>
        <button type="submit" className="w-full rounded-lg bg-solar-blue px-6 py-3 font-bold text-white transition hover:bg-blue-600">
          Submit Enquiry
        </button>
        {submitted && <p className="text-sm font-semibold text-green-700">Thanks. We will contact you shortly.</p>}
      </div>
    </form>
  );
}
