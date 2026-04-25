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
if (options.showMOC) {
	let mocMeta =
	  (fileData.frontmatter?.MOC as string | undefined) ??
	  (fileData.frontmatter?.moc as string | undefined)
	
	if (mocMeta) {
	  if (mocMeta.startsWith("http")) {
		const href = mocMeta;
	  } elseif (mocMeta.startsWith("[[")) {
		mocMeta = mocMeta.slice(2).slice(0, -2);
		const href = /${mocMeta}`;
	  } else {
		const href = `/${mocMeta}`;
	  }
	
	  const mocLabel =
		(fileData.frontmatter?.MOCTitle as string | undefined) ??
		(fileData.frontmatter?.mocTitle as string | undefined) ??
		mocMeta
	
	  segments.push(<a href={href} class="content-meta-moc">{mocLabel}</a>,)
	}
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
- [ ] baseURL: `quartz.config.ts`
- [x] Theme
	- [x] Footer websites: `quartz.layout.ts`
	- [x] Color theme: `quartz.config.ts`
	- [x] Typography : `quartz.config.ts`