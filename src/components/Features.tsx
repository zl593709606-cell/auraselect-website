import { useState } from 'react'
import { Zap, Layers, BarChart2, Lock } from 'lucide-react'
import { useLang } from '@/i18n/LangContext'
import { t } from '@/i18n/translations'

const FEATURE_IMAGES = [
  'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&fit=crop',
  'https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?w=600&fit=crop',
  'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&fit=crop',
]

const ICONS = [Zap, Layers, BarChart2, Lock]

export function Features() {
  const { s } = useLang()
  const [active, setActive] = useState(0)
  const items = t.features.items

  return (
    <section id="features" className="py-24" style={{ background: '#FAFBFF' }}>
      <div className="mx-auto px-10" style={{ maxWidth: '1200px' }}>
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#5AB5AE' }}>
            {s(t.features.label)}
          </p>
          <h2 className="text-4xl font-extrabold text-navy mb-4" style={{ letterSpacing: '-0.025em' }}>
            {s(t.features.title)}
          </h2>
          <p className="text-base text-slate-500">{s(t.features.sub)}</p>
        </div>

        {/* Two-column: cards left, image right */}
        <div className="grid grid-cols-2 gap-10 items-stretch">
          {/* Left: feature cards */}
          <div className="flex flex-col gap-3">
            {items.map((item, i) => {
              const Icon = ICONS[i]
              const isActive = i === active
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="text-left flex items-start gap-4 p-5 rounded-xl border transition-all duration-200"
                  style={{
                    background: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                    borderColor: isActive ? '#5AB5AE' : 'rgba(226,232,240,0.8)',
                    boxShadow: isActive ? '0 4px 20px rgba(90,181,174,0.12)' : 'none',
                    transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: isActive ? 'rgba(90,181,174,0.12)' : '#F1F5F9',
                    }}
                  >
                    <Icon size={18} color={isActive ? '#5AB5AE' : '#64748B'} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-1">{s(item.title)}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{s(item.desc)}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: image panel */}
          <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '360px' }}>
            {FEATURE_IMAGES.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={s(items[i].title)}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                style={{ opacity: i === active ? 1 : 0 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
