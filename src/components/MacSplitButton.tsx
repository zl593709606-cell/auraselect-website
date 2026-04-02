import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

interface MacSplitButtonProps {
  label: string
  apSiliconLabel: string
  intelLabel: string
  onSelect: (variant: 'arm64' | 'intel') => void
}

export function MacSplitButton({ label, apSiliconLabel, intelLabel, onSelect }: MacSplitButtonProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div ref={ref} className="relative flex">
      {/* Main button */}
      <button
        onClick={() => onSelect('arm64')}
        className="flex items-center gap-2 text-sm font-semibold text-white px-5 py-3 rounded-l-lg"
        style={{
          background: '#1B2B3A',
          boxShadow: '0 4px 16px rgba(27,43,58,0.2)',
        }}
      >
        {/* Apple logo */}
        <svg width="15" height="17" viewBox="0 0 814 1000" fill="white">
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.6-155.5-127.4C46 376.7 0 249.1 0 228.7c0-5.1.3-10.2 1-15.3 0 0 0 .6-.3 1.9C4.5 108.5 72.8 27 143.2 27c38.8 0 66.9 25.2 87.7 53.1 20.2 27.9 35.2 62.5 42.7 97.7h1.3c6.4-22.8 40.9-97.5 86.5-137.5 39.1-34.8 82.7-54.6 128.6-54.6 70.5 0 135.5 45 179.7 118.1 14.6 24.1 27 54.5 33.9 80.9-.3.2-.6.4-.6.7zM550.6 212.1c-18.3 0-67.2 6.4-96.1 51.1-22.7 35.2-37.8 79-37.8 131.8v5.9c11 1.9 22.5 3.2 31.8 3.2 75.7 0 139.5-53.8 139.5-168.4-.1-22.9-37.4-23.6-37.4-23.6z" />
        </svg>
        {label}
      </button>

      {/* Chevron / toggle button */}
      <button
        aria-label="选择版本"
        onClick={(e) => { e.stopPropagation(); setOpen((o) => !o) }}
        className="flex items-center justify-center px-3 py-3 rounded-r-lg border-l border-white/10 text-white"
        style={{
          background: '#253d52',
          boxShadow: '0 4px 16px rgba(27,43,58,0.2)',
        }}
      >
        <ChevronDown
          size={15}
          className="transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {/* Dropdown */}
      <div
        className="absolute top-full left-0 mt-2 w-64 rounded-xl overflow-hidden z-50"
        style={{
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(226,232,240,0.8)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          visibility: open ? 'visible' : 'hidden',
          opacity: open ? 1 : 0,
          transition: 'opacity 0.15s ease, visibility 0.15s ease',
        }}
      >
        {[
          { label: apSiliconLabel, variant: 'arm64' as const },
          { label: intelLabel, variant: 'intel' as const },
        ].map(({ label: optLabel, variant }) => (
          <button
            key={variant}
            onClick={() => { onSelect(variant); setOpen(false) }}
            className="w-full text-left px-4 py-3 text-sm text-navy hover:bg-teal-light/40 transition-colors"
          >
            {optLabel}
          </button>
        ))}
      </div>
    </div>
  )
}
