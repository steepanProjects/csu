'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isVisible].
 * Once the element scrolls into the viewport it stays visible (no reverse).
 * threshold – fraction of element that must be visible to trigger (default 0.15)
 */
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, visible] as const
}
