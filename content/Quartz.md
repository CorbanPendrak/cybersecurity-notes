---
MOC: "[[index]]"
---
-- --
[Quartz](https://quartz.jzhao.xyz/#-get-started) is used to generate this website. Since this is at least the third iteration of the website, I'm making this note to remind me how to setup/use it if I forget again. 

By default, everything in a folder named `private` (technically at any level of nesting) is hidden/unbuilt, but you need to restart the server if the notes were recently moved, since it keeps the previous versions. This also needs to be configured in `.gitignore`.

- [Install](https://quartz.jzhao.xyz/#-get-started)
- [Configure](https://quartz.jzhao.xyz/configuration)
- [Setup GitHub](https://quartz.jzhao.xyz/setting-up-your-GitHub-repository)
- [Hosting](https://quartz.jzhao.xyz/hosting)

```typescript
// quartz.config.ts

// quartz/components/ContentMeta.tsx
import {resolveRelative, simplifySlug } from "../util/path"
interface ContentMetaOptions {
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

function findMocTarget(mocMeta: string, allFiles: QuartzComponentProps["allFiles"]) {
    let ref = mocMeta.trim()
    if (ref.startsWith("[[") && ref.endsWith("]]")) {
      ref = ref.slice(2, -2).trim()
    }

    if (ref.startsWith("http")) {
      return { type: "external" as const, href: ref }
    }

    const targetSlug = simplifySlug(ref)

    const target =
      allFiles.find((f) => f.slug && simplifySlug(f.slug) === targetSlug) ??
      allFiles.find((f) => f.slug === ref) ??
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
          (fileData.frontmatter?.MOC as string | undefined) ??
          (fileData.frontmatter?.moc as string | undefined)
    if (mocMetaRaw) {
          const mocLabel =
            (fileData.frontmatter?.MOCTitle as string | undefined) ??
            (fileData.frontmatter?.mocTitle as string | undefined) ??
            mocMetaRaw.slice(2,-2).trim()

          const resolved = findMocTarget(mocMetaRaw, allFiles)

          if (resolved.type === "internal" && fileData.slug && resolved.target.slug) {
            const href = resolveRelative(fileData.slug, resolved.target.slug)
            segments.push(
              <a href={href} class="content-meta-moc internal">{mocLabel}</a>,)
          } else if (resolved.type === "external" || resolved.type === "fallback") {
            segments.push(<a href={resolved.href} class="content-meta-moc">{mocLabel}</a>,)
          }
        }
      }

      if (options.showDate && fileData.dates) {
        segments.push(<Date date={getDate(cfg, fileData)!} locale={cfg.locale} />)
      }
```

# TODO
- [x] Page layout
	- [x] Remove time to read/ date published
	- [x] Move ToC to left instead of explorer
		- [x] Edit `quartz.layout.ts`
	- [x] Show MOC link at top
- [x] [Private Pages](https://quartz.jzhao.xyz/features/private-pages)
- [ ] [404 Page](https://quartz.jzhao.xyz/plugins/NotFoundPage)
- [x] [Favicon](https://quartz.jzhao.xyz/plugins/Favicon)
- [x] [TableOfContents](https://quartz.jzhao.xyz/plugins/TableOfContents)
- [ ] [CustomOgImages](https://quartz.jzhao.xyz/plugins/CustomOgImages)
- [ ] [RSS Feed](https://quartz.jzhao.xyz/features/RSS-Feed)
- [x] pageTitleSuffix for browser tabs name: `quartz.config.ts`
- [x] baseURL: `quartz.config.ts`
- [x] Theme
	- [x] Footer websites: `quartz.layout.ts`
	- [x] Color theme: `quartz.config.ts`
	- [x] Typography : `quartz.config.ts`
	- [x] Multiple themes (Lots of components stuff, just use AI next time)