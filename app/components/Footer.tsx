export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-[6.25%]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-foreground/60">
        <p>© {currentYear} Naphak Jaengjaikul. All rights reserved.</p>
        <p>Designed & built by Naphak Jaengjaikul</p>
      </div>
    </footer>
  );
}
