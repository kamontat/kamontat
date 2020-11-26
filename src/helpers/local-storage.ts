export const getLocalData = (key: string): string | undefined => {
  try {
    return localStorage.getItem(key) ?? undefined
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export const setLocalData = (key: string, value: string): boolean => {
  try {
    localStorage.setItem(key, value)
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}
