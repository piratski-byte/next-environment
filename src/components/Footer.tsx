export default function Footer() {
  return (
    <footer className="py-6 text-center border-t border-[var(--muted)] bg-background text-[var(--muted)]">
      <p>© 2025 My Company. All rights reserved.</p>
      <div className="mt-2">
        <a href="#" className="mx-2 hover:underline text-[var(--foreground)]">
          Privacy Policy
        </a>
        <a href="#" className="mx-2 hover:underline text-[var(--foreground)]">
          Contact
        </a>
      </div>
    </footer>
  );
}
