export const getLanguageName = (code: string): string => {
  if (code.toLowerCase().includes("th")) return "Thai"
  else if (code.toLowerCase().includes("en")) return "English"
  else return "Unknown"
}
