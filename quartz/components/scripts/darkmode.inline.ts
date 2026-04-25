const allThemes = ["dark", "light", "ocean", "blood", "hacker"] as const
type ThemeName = (typeof allThemes)[number]

const userPref: ThemeName  = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
const stored = localStorage.getItem("theme") as ThemeName | null
const initialTheme: ThemeName = stored && allThemes.includes(stored) ? stored : userPref
document.documentElement.setAttribute("saved-theme", initialTheme)

const emitThemeChangeEvent = (theme: ThemeName) => {
  const event: CustomEventMap["themechange"] = new CustomEvent("themechange", {
    detail: { theme },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  const switchTheme = () => {
    const current =
      document.documentElement.getAttribute("saved-theme") as ThemeName | null
    const currentIndex = current ? allThemes.indexOf(current) : -1
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % allThemes.length : 0
    const nextTheme = allThemes[nextIndex]

    document.documentElement.setAttribute("saved-theme", nextTheme)
    localStorage.setItem("theme", nextTheme)
    emitThemeChangeEvent(nextTheme)
  }

  const themeChange = (e: MediaQueryListEvent) => {
    const newTheme = e.matches ? "dark" : "light"
    document.documentElement.setAttribute("saved-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    emitThemeChangeEvent(newTheme)
  }

  for (const darkmodeButton of document.getElementsByClassName("darkmode")) {
    darkmodeButton.addEventListener("click", switchTheme)
    window.addCleanup(() => darkmodeButton.removeEventListener("click", switchTheme))
  }

  // Listen for changes in prefers-color-scheme
  const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  colorSchemeMediaQuery.addEventListener("change", themeChange)
  window.addCleanup(() => colorSchemeMediaQuery.removeEventListener("change", themeChange))
})
