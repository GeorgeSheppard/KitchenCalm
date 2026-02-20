export function DeviceFrame({
  label,
  width,
  children,
}: {
  label: string
  width: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3 shrink-0" style={{ width, maxWidth: "100%" }}>
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="text-xs text-muted-foreground/60">{width}</span>
      </div>
      <div className="rounded-2xl border border-border bg-background p-3 shadow-sm overflow-hidden">
        {children}
      </div>
    </div>
  )
}
