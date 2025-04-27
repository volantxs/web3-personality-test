export function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

export function getColorForArchetype(index: number): string {
  const neonColors = [
    "#39FF14", // Neon Green
    "#FF073A", // Neon Red
    "#00F0FF", // Neon Cyan
    "#FFFB00", // Neon Yellow
    "#FF00E4", // Neon Pink
    "#FF9900", // Neon Orange
    "#00FF85", // Neon Mint
    "#8D00FF", // Neon Purple
  ];
  return neonColors[index % neonColors.length];
}