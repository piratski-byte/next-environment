export default function Testimonials() {
  const reviews = [
    {
      text: 'Amazing service! Everything works fast and smoothly.',
      author: 'Alexey',
    },
    {
      text: 'Highly recommend! Very simple and easy-to-use product.',
      author: 'Maria',
    },
    { text: 'Great support and intuitive interface.', author: 'Igor' },
  ];

  return (
    <section className="py-16 bg-[var(--background)]">
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
        Customer Testimonials
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-6 bg-[var(--foreground)] text-[var(--background)] rounded-lg shadow-lg"
          >
            <p>"{review.text}"</p>
            <p className="mt-4 font-semibold">— {review.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
