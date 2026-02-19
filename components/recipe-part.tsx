"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import type { RecipePart } from "@/lib/recipe-data"

export function RecipePartSection({
  part,
  partIndex,
  totalParts,
}: {
  part: RecipePart
  partIndex: number
  totalParts: number
}) {
  return (
    <section className="flex flex-col gap-6 @container">
      <div className="flex items-center gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
          {partIndex + 1}
        </span>
        <h2 className="font-serif text-xl text-foreground @[480px]:text-2xl">
          {part.title}
        </h2>
        <span className="text-xs text-muted-foreground ml-auto">
          {"Part "}
          {partIndex + 1}
          {" of "}
          {totalParts}
        </span>
      </div>

      <div className="grid gap-6 @[520px]:grid-cols-[260px_1fr] @[600px]:grid-cols-[300px_1fr]">
        <IngredientsList ingredients={part.ingredients} partIndex={partIndex} />
        <InstructionsList instructions={part.instructions} partIndex={partIndex} />
      </div>
    </section>
  )
}

function IngredientsList({
  ingredients,
  partIndex,
}: {
  ingredients: RecipePart["ingredients"]
  partIndex: number
}) {
  const [checked, setChecked] = useState<Set<number>>(new Set())

  function toggle(index: number) {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <div className="rounded-xl bg-secondary/60 p-5">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        Ingredients
      </h3>
      <ul className="flex flex-col gap-2">
        {ingredients.map((item, i) => {
          const isChecked = checked.has(i)
          return (
            <li key={`${partIndex}-ing-${i}`}>
              <button
                type="button"
                onClick={() => toggle(i)}
                className={`flex w-full items-start gap-3 rounded-lg px-2 py-1.5 text-left text-sm transition-colors hover:bg-accent/60 ${
                  isChecked ? "text-muted-foreground" : "text-foreground"
                }`}
                aria-pressed={isChecked}
              >
                <span
                  className={`flex size-5 shrink-0 items-center justify-center rounded border transition-colors ${
                    isChecked
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card"
                  }`}
                >
                  {isChecked && <Check className="size-3" />}
                </span>
                <span className={isChecked ? "line-through" : ""}>
                  <span className="font-medium">
                    {item.amount}
                    {item.unit ? ` ${item.unit}` : ""}
                  </span>{" "}
                  {item.name}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function InstructionsList({
  instructions,
  partIndex,
}: {
  instructions: string[]
  partIndex: number
}) {
  const [completed, setCompleted] = useState<Set<number>>(new Set())

  function toggleStep(index: number) {
    setCompleted((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        Instructions
      </h3>
      <ol className="flex flex-col gap-4">
        {instructions.map((step, i) => {
          const isDone = completed.has(i)
          return (
            <li key={`${partIndex}-step-${i}`}>
              <button
                type="button"
                onClick={() => toggleStep(i)}
                className="flex items-start gap-3 text-left group w-full"
                aria-pressed={isDone}
              >
                <span
                  className={`relative flex w-6 h-6 shrink-0 grow-0 items-center justify-center rounded-full text-xs font-semibold leading-none transition-colors ${
                    isDone
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground group-hover:bg-primary/20"
                  }`}
                >
                  <span className={`transition-opacity ${isDone ? "opacity-0" : "opacity-100"}`}>
                    {i + 1}
                  </span>
                  <Check className={`size-3.5 absolute transition-opacity ${isDone ? "opacity-100" : "opacity-0"}`} />
                </span>
                <p
                  className={`text-sm leading-relaxed transition-colors ${
                    isDone
                      ? "text-muted-foreground line-through"
                      : "text-foreground"
                  }`}
                >
                  {step}
                </p>
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
