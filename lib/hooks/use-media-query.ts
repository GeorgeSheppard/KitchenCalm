import { useEffect, useState } from 'react'

export function useMediaQuery(query: string) {
  // Initialize with undefined to avoid hydration mismatch
  const [matches, setMatches] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const media = window.matchMedia(query)

    // Set initial value on mount
    setMatches(media.matches)

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Modern browsers
    if (media.addEventListener) {
      media.addEventListener('change', listener)
      return () => media.removeEventListener('change', listener)
    } else {
      // Fallback for older browsers
      media.addListener(listener)
      return () => media.removeListener(listener)
    }
  }, [query])

  return matches ?? false
}
