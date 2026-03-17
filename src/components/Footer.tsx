export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 md:px-10 py-8"
      style={{
        backgroundColor: "#152338",
        borderTop: "1px solid #1F3455",
      }}
    >
      <div className="max-w-site mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span
          className="text-[12px] tracking-[0.08em] font-medium uppercase"
          style={{ color: "#6B8BB5" }}
        >
          Krystian Mądry
        </span>
        <span
          className="text-[12px] font-light"
          style={{ color: "#3D5C82" }}
        >
          {year} — Od pomysłu do formy.
        </span>
      </div>
    </footer>
  );
}
