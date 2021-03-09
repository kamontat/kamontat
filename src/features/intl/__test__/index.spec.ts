import { ENG, getLanguageName, THAI, UNKNOWN } from ".."

describe("Intl", () => {
  it("convert th to Thai", () => {
    expect(getLanguageName("th")).toEqual(THAI)
  })

  it("convert en to English", () => {
    expect(getLanguageName("en")).toEqual(ENG)
  })

  it("convert th-TH to Thai", () => {
    expect(getLanguageName("th-TH")).toEqual(THAI)
  })

  it("convert en-US to English", () => {
    expect(getLanguageName("en-US")).toEqual(ENG)
  })

  it("convert abc to Unknown", () => {
    expect(getLanguageName("abc")).toEqual(UNKNOWN)
  })
})
