import { Download, Package, Play } from 'lucide-react'
import { useLang } from '@/i18n/LangContext'
import { t } from '@/i18n/translations'

const ICONS = [Download, Package, Play]

export function InstallGuide() {
  const { s } = useLang()
  const steps = t.install.steps

  return (
    <section id="install" className="py-24 bg-white">
      <div className="mx-auto px-10" style={{ maxWidth: '1200px' }}>
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#5AB5AE' }}>
            {s(t.install.label)}
          </p>
          <h2 className="text-4xl font-extrabold text-navy" style={{ letterSpacing: '-0.025em' }}>
            {s(t.install.title)}
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = ICONS[i]
            const isLast = i === steps.length - 1
            return (
              <div
                key={i}
                className={`group relative flex flex-col items-center text-center ${!isLast ? 'step-connector' : ''}`}
              >
                {/* Step number */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold mb-5 transition-all duration-250 group-hover:scale-110"
                  style={{
                    background: '#5AB5AE',
                    boxShadow: '0 4px 14px rgba(90,181,174,0.4)',
                  }}
                >
                  {i + 1}
                </div>

                {/* Icon box */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-250"
                  style={{
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                  }}
                >
                  <Icon size={26} className="text-slate-400 group-hover:text-teal transition-colors duration-250" />
                </div>

                <h3 className="text-base font-semibold text-navy mb-2">{s(step.title)}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s(step.desc)}</p>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        #install .group:hover > div:nth-child(2) {
          background: #D0EDEB !important;
          border-color: rgba(90,181,174,0.45) !important;
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(90,181,174,0.18);
        }
        #install .group:hover > div:first-child {
          box-shadow: 0 6px 20px rgba(90,181,174,0.5);
        }
      `}</style>
    </section>
  )
}
