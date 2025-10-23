'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 max-w-xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-[var(--foreground)]">
        Contact Us
      </h2>
      {submitted ? (
        <p className="text-center text-green-500">
          Thank you! We will get back to you shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-[var(--muted)] p-2 rounded bg-[var(--background)] text-[var(--foreground)]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-[var(--muted)] p-2 rounded bg-[var(--background)] text-[var(--foreground)]"
          />
          <button
            type="submit"
            className="bg-[var(--primary)] text-foreground p-2 rounded font-semibold hover:bg-[var(--background2)] cursor-pointer transition"
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
}
