import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLang } from '@/i18n/LangContext'
import { t } from '@/i18n/translations'

export function FAQ() {
  const { s } = useLang()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const items = t.faq.items

  return (
    <section id="faq" className="py-32" style={{ background: '#FAFBFF' }}>
      <div className="mx-auto px-10" style={{ maxWidth: '1200px' }}>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#5AB5AE' }}>
            {s(t.faq.label)}
          </p>
          <h2 className="text-5xl font-extrabold text-navy" style={{ letterSpacing: '-0.025em' }}>
            {s(t.faq.title)}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto divide-y divide-slate-100">
          {items.map((item, i) => {
            const isOpen = i === openIndex
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-navy pr-4">{s(item.q)}</span>
                  <ChevronDown
                    size={16}
                    className="shrink-0 text-slate-400 transition-transform duration-200"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>

                {/* Answer — visible via max-height + visibility transition */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    visibility: isOpen ? 'visible' : 'hidden',
                  }}
                  aria-hidden={!isOpen}
                >
                  <p className="pb-5 text-sm text-slate-500 leading-relaxed">{s(item.a)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
