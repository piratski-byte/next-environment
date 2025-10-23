import Image from 'next/image';
import heroImage from '@/assets/images/hero-image.jpg';

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex flex-col items-center text-center text-background">
      <div className="absolute inset-0 -z-10">
        {/* Фоновая картинка */}
        <Image
          src={heroImage}
          alt="Hero background"
          priority
          className="object-cover -z-10"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Контент поверх */}
      <h1 className="text-4xl font-bold text-background mt-60 mb-4">
        Welcome to Next.js!
      </h1>
      <p className="text-xl mb-6">Turning your dreams into reality</p>
      <button className="bg-background text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-foreground cursor-pointer transition">
        Try free
      </button>
    </section>
  );
}
