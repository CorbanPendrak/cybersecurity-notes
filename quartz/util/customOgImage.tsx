import { SocialImageOptions } from "./og"
import { getFontSpecificationName } from "./theme"

export const customImage: SocialImageOptions["imageStructure"] = ({
  cfg,
  userOpts,
  title,
  description,
  iconBase64,
}) => {
  const { colorScheme } = userOpts
  const bodyFont = getFontSpecificationName(cfg.theme.typography.body)
  const headerFont = getFontSpecificationName(cfg.theme.typography.header)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        backgroundColor: cfg.theme.colors[colorScheme].light,
        padding: "2.5rem",
        fontFamily: bodyFont,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
        {iconBase64 && (
          <img src={iconBase64} width={56} height={56} style={{ borderRadius: "50%" }} />
        )}
        <div style={{ fontSize: 32, color: cfg.theme.colors[colorScheme].gray }}>
          {cfg.baseUrl}
        </div>
      </div>

      {/* Title */}
      <div style={{ display: "flex", marginTop: "1rem", marginBottom: "1.5rem" }}>
        <h1
          style={{
            margin: 0,
            fontSize: title.length > 32 ? 64 : 72,
            fontFamily: headerFont,
            fontWeight: 700,
            color: cfg.theme.colors[colorScheme].dark,
            lineHeight: 1.2,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
          }}
        >
          {title}
        </h1>
      </div>

      {/* Description */}
      <div style={{ display: "flex", flex: 1, fontSize: 36, color: cfg.theme.colors[colorScheme].darkgray }}>
        <p style={{ margin: 0, lineHeight: 1.4 }}>{description}</p>
      </div>
    </div>
  )
}