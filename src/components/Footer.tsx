export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#DAD7D2] px-6 md:px-10 py-8">
      <div className="max-w-site mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span className="text-[12px] tracking-[0.08em] text-taupe font-medium uppercase">
          Krystian Mądry
        </span>
        <span className="text-[12px] text-muted font-light">
          {year} — Od pomysłu do formy.
        </span>
      </div>
    </footer>
  );
}
