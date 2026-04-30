import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { customImage } from "./quartz/util/customOgImage"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Corban Pendrak",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "corbanpendrak.github.io/cybersecurity-notes",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Roboto Mono",
        body: "Roboto",
        code: "Roboto Mono",
      },
      // light: page background
      // lightgray: borders
      // gray: heavy borders
      // darkgray: body text
      // dark: header
      // secondary: link color
      // tertiary: hover states
      // highlight: highlighted text
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1a1a1a",
          lightgray: "#3a2964",
          gray: "#584b75",
          darkgray: "#b9b7be",
          dark: "#a5a1ad",
          secondary: "#9d81e0",
          tertiary: "#8185e0",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
        ocean: {
          light: "#0C2231",
          lightgray: "#3a7ca5",
          gray: "#3a7ca5",
          darkgray: "#d9dcd6",
          dark: "#B0C7D4",
          secondary: "#81c3d7",
          tertiary: "#3a7ca5",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
        blood: {
          light: "#130501",
          lightgray: "#c48287",
          gray: "#38040E",
          darkgray: "#c48287",
          dark: "#A5121A",
          secondary: "#C62F39",
          tertiary: "#A5121A",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
        hacker: {
          light: "#000000",
          lightgray: "#007200",
          gray: "#00ba00",
          darkgray: "#aeafae",
          dark: "#00bd00",
          secondary: "#73af73",
          tertiary: "#397539",
          highlight: "#8f9fa926",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages({
        colorScheme: "darkMode",
        height: 630,
        width: 1200,
        imageStructure: customImage,
      }),
    ],
  },
}

export default config
