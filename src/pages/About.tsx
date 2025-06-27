import React, { useEffect, useState } from 'react';

const About = () => {
  const [about, setAbout] = useState<{ title: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/about')
      .then(res => res.json())
      .then(data => {
        setAbout(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center text-sage-700">Carregando...</div>;

  return (
    <section className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow mt-8">
      <h2 className="text-3xl font-bold mb-4 text-sage-800">{about?.title}</h2>
      <p className="text-lg text-sage-600">{about?.content}</p>
    </section>
  );
};

export default About;
