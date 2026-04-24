export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="container-shell py-4">
        <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.16em] text-[#7b756e] md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Noirumi Studio</p>

          <div className="flex gap-5">
            <a
              href="/privacy"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Terms
            </a>
            <a
              href="/accessibility"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}