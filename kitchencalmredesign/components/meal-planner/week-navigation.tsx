"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react"
import { format, startOfWeek, endOfWeek } from "date-fns"

interface WeekNavigationProps {
  weekStart: Date
  onPreviousWeek: () => void
  onNextWeek: () => void
  onToday: () => void
}

export function WeekNavigation({
  weekStart,
  onPreviousWeek,
  onNextWeek,
  onToday,
}: WeekNavigationProps) {
  const weekEnd = endOfWeek(weekStart, { weekStartsOn: 1 })
  const isSameMonth = weekStart.getMonth() === weekEnd.getMonth()

  const label = isSameMonth
    ? `${format(weekStart, "MMM d")} - ${format(weekEnd, "d, yyyy")}`
    : `${format(weekStart, "MMM d")} - ${format(weekEnd, "MMM d, yyyy")}`

  const isCurrentWeek =
    startOfWeek(new Date(), { weekStartsOn: 1 }).getTime() === weekStart.getTime()

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={onPreviousWeek}
        aria-label="Previous week"
        className="size-8"
      >
        <ChevronLeft className="size-4" />
      </Button>

      <span className="text-sm font-medium text-foreground min-w-[180px] text-center">
        {label}
      </span>

      <Button
        variant="outline"
        size="icon"
        onClick={onNextWeek}
        aria-label="Next week"
        className="size-8"
      >
        <ChevronRight className="size-4" />
      </Button>

      {!isCurrentWeek && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onToday}
          className="ml-1 h-8 text-xs text-muted-foreground"
        >
          <CalendarDays className="size-3.5 mr-1" />
          Today
        </Button>
      )}
    </div>
  )
}
