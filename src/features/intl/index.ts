export const THAI = "Thai"
export const ENG = "English"

export const UNKNOWN = "Unknown"

export const getLanguageName = (code: string): string => {
  if (code.toLowerCase().includes("th")) return THAI
  else if (code.toLowerCase().includes("en")) return ENG
  else return UNKNOWN
}
