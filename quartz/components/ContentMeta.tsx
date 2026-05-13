import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"
import { resolveRelative, simplifySlug } from "../util/path"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showMOC: boolean
  showDate: boolean
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showMOC: true,
  showDate: false,
  showReadingTime: false,
  showComma: false,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function findMocTarget(mocMeta: string, allFiles: QuartzComponentProps["allFiles"]) {
    let ref = mocMeta.trim()
    if (ref.startsWith("[[") && ref.endsWith("]]")) {
      ref = ref.slice(2, -2).trim()
    }

    if (ref.startsWith("http")) {
      return { type: "external" as const, href: ref }
    }

    const normalizedRef = ref.replace(/^\/+|\/+$/g, "")

    const target =
      allFiles.find((f) => f.slug && simplifySlug(f.slug) === normalizedRef) ??
      allFiles.find((f) => f.slug === normalizedRef) ??
      allFiles.find((f) => f.frontmatter?.title === ref)

    if (target && target.slug) {
      return { type: "internal" as const, target }
    }
    return { type: "fallback" as const, href: `/${ref.replace(/^\//, "")}` }
  }

  function ContentMetadata({ cfg, fileData, allFiles, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (options.showMOC) {
        let mocMetaRaw = 
          (fileData.frontmatter?.MOC as string | string[] | undefined) ??
          (fileData.frontmatter?.moc as string | string[] | undefined)

        if (mocMetaRaw) {
          if (Array.isArray(mocMetaRaw)) {
            for (const mocStr of mocMetaRaw) {
              const mocLabel =
                (fileData.frontmatter?.MOCTitle as string | undefined) ??
                (fileData.frontmatter?.mocTitle as string | undefined) ??
                mocStr.replaceAll("[[", "").replaceAll("]]", "").trim()
              const resolved = findMocTarget(mocStr, allFiles)

              if (resolved.type === "internal" && fileData.slug && resolved.target.slug) {
                const href = resolveRelative(fileData.slug, resolved.target.slug)
                segments.push(
                  <a href={href} class="content-meta-moc internal">
                    {mocLabel}
                  </a>,<br />,
                )
              } else if (resolved.type === "external" || resolved.type === "fallback") {
                segments.push(<a href={resolved.href} class="content-meta-moc">{mocLabel}</a>,<br />,)
              }
            }
          } else {
            const mocLabel =
              (fileData.frontmatter?.MOCTitle as string | undefined) ??
              (fileData.frontmatter?.mocTitle as string | undefined) ??
              mocMetaRaw.replaceAll("[[", "").replaceAll("]]", "").trim()

            const resolved = findMocTarget(mocMetaRaw, allFiles)

            if (resolved.type === "internal" && fileData.slug && resolved.target.slug) {
              const href = resolveRelative(fileData.slug, resolved.target.slug)
              segments.push(
                <a href={href} class="content-meta-moc internal">
                  {mocLabel}
                </a>,
              )
            } else if (resolved.type === "external" || resolved.type === "fallback") {
              segments.push(<a href={resolved.href} class="content-meta-moc">{mocLabel}</a>,)
            }
          }
        }
      }

      if (options.showDate && fileData.dates) {
        segments.push(<Date date={getDate(cfg, fileData)!} locale={cfg.locale} />)
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      )
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
