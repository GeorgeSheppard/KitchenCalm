import { Lightbulb } from "lucide-react"

export function RecipeNotes({ notes }: { notes: string[] }) {
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
          {"Cook\u2019s Notes"}
        </h3>
      </div>
      <ul className="flex flex-col gap-3">
        {notes.map((note, i) => (
          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-foreground">
            <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-primary/50" />
            {note}
          </li>
        ))}
      </ul>
    </div>
  )
}
