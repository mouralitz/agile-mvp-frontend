import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch('http://localhost:4000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(data.message);
        setForm({ name: '', email: '', message: '' });
      } else {
        setError(data.error || 'Erro ao enviar.');
      }
    } catch {
      setError('Erro de conexão.');
    }
    setLoading(false);
  };

  return (
    <section className="max-w-xl mx-auto p-8 bg-white rounded-xl shadow mt-8">
      <h2 className="text-3xl font-bold mb-4 text-sage-800">Contato</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-sage-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-sage-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          required
        />
        <textarea
          name="message"
          placeholder="Sua mensagem"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-sage-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          rows={5}
          required
        />
        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
        {success && <div className="text-green-600 font-semibold mt-2">{success}</div>}
        {error && <div className="text-red-600 font-semibold mt-2">{error}</div>}
      </form>
    </section>
  );
};

export default Contact;
