import { Shield, Upload, Code } from 'lucide-react'
import { useLang } from '@/i18n/LangContext'
import { t } from '@/i18n/translations'

const ICONS = [Shield, Upload, Code]

export function Privacy() {
  const { s } = useLang()
  const cards = t.privacy.cards

  return (
    <section id="privacy" className="py-32" style={{ background: '#1B2B3A' }}>
      <div className="mx-auto px-10" style={{ maxWidth: '1200px' }}>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#5AB5AE' }}>
            {s(t.privacy.label)}
          </p>
          <h2 className="text-5xl font-extrabold text-white mb-5" style={{ letterSpacing: '-0.025em' }}>
            {s(t.privacy.title)}
          </h2>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {s(t.privacy.sub)}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={i}
                className="group rounded-2xl p-7 cursor-default transition-all duration-250"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-250 group-hover:bg-[rgba(90,181,174,0.28)]"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                >
                  <Icon size={20} color="#5AB5AE" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{s(card.title)}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {s(card.desc)}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        #privacy .group:hover {
          background: rgba(90,181,174,0.1) !important;
          border-color: rgba(90,181,174,0.4) !important;
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(90,181,174,0.15);
        }
      `}</style>
    </section>
  )
}
