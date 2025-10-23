export default function Features() {
  return (
    <section className="py-16 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-4 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Fast</h3>
          <p>Our product works instantly and saves you time.</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Simple</h3>
          <p>The interface is intuitive and easy to use.</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Reliable</h3>
          <p>We prioritize the security and stability of our service.</p>
        </div>
      </div>
    </section>
  );
}
