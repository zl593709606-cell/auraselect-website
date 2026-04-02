import { useLang } from '@/i18n/LangContext'
import { t } from '@/i18n/translations'

export function Footer() {
  const { s } = useLang()

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div
        className="mx-auto px-10 py-12 flex items-center justify-between"
        style={{ maxWidth: '1200px' }}
      >
        {/* Left: logo + copyright */}
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #5AB5AE, #3D9A93)',
              boxShadow: '0 2px 8px rgba(90,181,174,0.3)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="8" cy="8" r="2" fill="white" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-navy">AuraSelect</p>
            <p className="text-xs text-slate-400">{s(t.footer.copyright)}</p>
          </div>
        </div>

        {/* Right: link groups */}
        <div className="flex items-start gap-14">
          <div>
            <p className="text-xs font-semibold text-navy mb-3">{s(t.footer.product)}</p>
            <div className="flex flex-col gap-2">
              {[
                { label: s(t.footer.links.features), href: '#features' },
                { label: s(t.footer.links.download), href: '#download' },
                { label: s(t.footer.links.changelog), href: '#changelog' },
              ].map(({ label, href }) => (
                <a key={href} href={href} className="text-sm text-slate-500 hover:text-navy transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-navy mb-3">{s(t.footer.legal)}</p>
            <div className="flex flex-col gap-2">
              {[
                { label: s(t.footer.links.privacy), href: '/privacy' },
                { label: s(t.footer.links.terms), href: '/terms' },
              ].map(({ label, href }) => (
                <a key={href} href={href} className="text-sm text-slate-500 hover:text-navy transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
