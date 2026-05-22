import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-6 right-6 bg-cyan-500 p-4 rounded-full"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}