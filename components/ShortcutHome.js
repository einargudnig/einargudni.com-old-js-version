import { useState, useEffect } from 'react'
import { useKBar } from 'kbar'

export default function ShortcutHome() {
  const { query } = useKBar()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    const isMac = /(Mac)/i.test(navigator.userAgent)
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    if (isMobile) {
      return <button onClick={query.toggle}>Tap to start →</button>
    } else if (isMac) {
      return (
        <button onClick={query.toggle}>
          Press <span className="bg-gray-300 rounded-md text-gray-900 p-1">⌘</span>{' '}
          <span className="bg-gray-300 rounded-md text-gray-900 p-1">K</span> to start →
        </button>
      )
    } else {
      return (
        <button className="p-1 rounded-md" onClick={query.toggle}>
          Press <span className="bg-gray-300 rounded-md text-gray-900 p-1">ctrl</span>{' '}
          <span className="bg-gray-300 rounded-md text-gray-900 p-1">K</span> to start →
        </button>
      )
    }
  }
  return <div />
}
