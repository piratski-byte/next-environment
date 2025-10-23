export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-primary cursor-default">
          Next Environment
        </h1>
        <nav className="flex gap-6 text-foreground font-medium">
          <a href="#features" className="hover:text-primary transition">
            Features
          </a>
          <a href="#testimonials" className="hover:text-primary transition">
            Testimonials
          </a>
          <a href="#contacts" className="hover:text-primary transition">
            Contacts
          </a>
        </nav>
      </div>
    </header>
  );
}
