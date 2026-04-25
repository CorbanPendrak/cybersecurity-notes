import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

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

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (options.showMOC) {
        let mocMeta = 
          (fileData.frontmatter?.MOC as string | undefined) ??
          (fileData.frontmatter?.moc as string | undefined)

        let href = ""
        if (mocMeta) {
          if (mocMeta.startsWith("http")) {
            href = mocMeta;
          } else if (mocMeta.startsWith("\[\[")) {
            mocMeta = mocMeta.slice(2).slice(0, -2);  
            href = `/${mocMeta}`;
          } else {
            href = `/${mocMeta}`;
          }

	  const mocLabel = 
            (fileData.frontmatter?.MOCTitle as string | undefined) ??
            (fileData.frontmatter?.mocTitle as string | undefined) ??
            mocMeta

          segments.push(<a href={href} class="content-meta-moc">{mocLabel}</a>,)
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
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
