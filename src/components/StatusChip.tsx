interface StatusChipProps {
  label: string;
}

const statusStyles: Record<string, { bg: string; text: string }> = {
  "aktywnie":       { bg: "#E4EDE8", text: "#2D5A47" },
  "w trakcie":      { bg: "#E8EBF0", text: "#1B2E4B" },
  "w budowie":      { bg: "#E8EBF0", text: "#1B2E4B" },
  "startuje":       { bg: "#EBE8E0", text: "#8A7E6F" },
  "pierwszy event": { bg: "#E4EDE8", text: "#2D5A47" },
  "pierwsi klienci":{ bg: "#EBE8E0", text: "#8A7E6F" },
  "rozwój":         { bg: "#E8EBF0", text: "#1B2E4B" },
  "start":          { bg: "#EDEAE6", text: "#6B6560" },
};

export default function StatusChip({ label }: StatusChipProps) {
  const style = statusStyles[label.toLowerCase()] ?? {
    bg: "#EDEAE6",
    text: "#6B6560",
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
