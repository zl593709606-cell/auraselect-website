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
        <svg width="14" height="17" viewBox="0 0 256 315" fill="white">
          <path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615-.35 1.116-6.599 22.563-21.757 44.716-13.104 19.153-26.705 38.235-48.13 38.63-21.05.388-27.82-12.498-51.888-12.498-24.061 0-31.582 12.11-51.51 12.886-20.68.777-36.428-20.522-49.64-39.618-27-39.1-47.633-110.49-19.928-158.64 13.763-23.89 38.36-39.017 65.056-39.386 20.307-.387 39.475 13.662 51.889 13.662 12.406 0 35.699-16.895 60.186-14.414 10.25.427 39.026 4.14 57.503 31.186zm-67.066-61.286c10.951-13.268 18.321-31.78 16.303-50.207-15.762.636-34.843 10.522-46.158 23.791-10.144 11.758-19.027 30.677-16.625 48.754 17.587 1.365 35.566-8.964 46.48-22.338z" />
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
