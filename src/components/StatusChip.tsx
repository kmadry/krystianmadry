interface StatusChipProps {
  label: string;
  dark?: boolean;
}

const lightStyles: Record<string, { bg: string; text: string }> = {
  "aktywnie":       { bg: "#E4EDE8", text: "#2D5A47" },
  "w trakcie":      { bg: "#E8EBF0", text: "#1B2E4B" },
  "w budowie":      { bg: "#E8EBF0", text: "#1B2E4B" },
  "startuje":       { bg: "#EBE8E0", text: "#8A7E6F" },
  "pierwszy event": { bg: "#E4EDE8", text: "#2D5A47" },
  "pierwsi klienci":{ bg: "#EBE8E0", text: "#8A7E6F" },
  "rozwój":         { bg: "#E8EBF0", text: "#1B2E4B" },
  "start":          { bg: "#EDEAE6", text: "#6B6560" },
};

const darkStyles: Record<string, { bg: string; text: string }> = {
  "aktywnie":       { bg: "#1A3D2E", text: "#5BAF85" },
  "w trakcie":      { bg: "#152846", text: "#7AAAD4" },
  "w budowie":      { bg: "#152846", text: "#7AAAD4" },
  "startuje":       { bg: "#2A2318", text: "#9A8B72" },
  "pierwszy event": { bg: "#1A3D2E", text: "#5BAF85" },
  "pierwsi klienci":{ bg: "#2A2318", text: "#9A8B72" },
  "rozwój":         { bg: "#152846", text: "#7AAAD4" },
  "start":          { bg: "#252220", text: "#7A706A" },
};

export default function StatusChip({ label, dark = false }: StatusChipProps) {
  const map = dark ? darkStyles : lightStyles;
  const style = map[label.toLowerCase()] ?? {
    bg: dark ? "#1E2A3A" : "#EDEAE6",
    text: dark ? "#6B8BB5" : "#6B6560",
  };

  return (
    <span
      className="inline-block text-[10px] font-medium tracking-[0.08em] uppercase px-2.5 py-1 shrink-0"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {label}
    </span>
  );
}
