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
          <span className="text-lg">Press</span>{' '}
          <span className="p-1 text-lg text-gray-900 bg-gray-300 rounded-md">⌘</span>{' '}
          <span className="text-lg">+ </span>
          <span className="p-1 text-lg text-gray-900 bg-gray-300 rounded-md">K</span>{' '}
          <span className="text-lg">to start →</span>
        </button>
      )
    } else {
      return (
        <button className="p-1 rounded-md" onClick={query.toggle}>
          <span className="text-lg">Press</span>{' '}
          <span className="text-gray-900 bg-gray-300 rounded-md  text-lgp-1">ctrl</span>{' '}
          <span className="text-lg">+ </span>
          <span className="p-1 text-lg text-gray-900 bg-gray-300 rounded-md">K</span>{' '}
          <span className="text-lg">to start →</span>
        </button>
      )
    }
  }
  return <div />
}
