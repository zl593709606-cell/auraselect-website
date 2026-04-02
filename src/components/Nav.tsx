import { Globe, Download } from 'lucide-react'
import { useLang } from '@/i18n/LangContext'
import { t } from '@/i18n/translations'

interface NavProps {
  onDownloadClick: () => void
}

export function Nav({ onDownloadClick }: NavProps) {
  const { s, toggle, lang } = useLang()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80"
      style={{
        background: 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        boxShadow: '0 1px 0 rgba(0,0,0,0.04)',
      }}
    >
      <div
        className="mx-auto flex items-center px-10 h-16"
        style={{ maxWidth: '1200px' }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo.png" alt="AuraSelect" className="w-8 h-8 rounded-lg object-cover" />
          <span className="text-base font-bold tracking-tight text-navy">AuraSelect</span>
        </a>

        {/* Nav links — left-aligned, immediately after logo */}
        <nav className="ml-9 flex items-center gap-8">
          {[
            { label: s(t.nav.features), href: '#features' },
            { label: s(t.nav.download), href: '#download' },
            { label: s(t.nav.changelog), href: '#changelog' },
            { label: s(t.nav.help), href: '#faq' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-slate-500 hover:text-navy transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-2.5">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-xs text-slate-400 border border-slate-200 rounded-full px-3 py-1.5 bg-white/60 hover:text-slate-600 transition-colors"
            title={lang === 'zh' ? '切换到英文' : 'Switch to Chinese'}
          >
            <Globe size={12} />
            {s(t.nav.langSwitch)}
          </button>
          <button
            onClick={onDownloadClick}
            className="flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded-lg"
            style={{
              background: '#5AB5AE',
              boxShadow: '0 2px 10px rgba(90,181,174,0.3)',
            }}
          >
            <Download size={13} />
            {s(t.nav.downloadBtn)}
          </button>
        </div>
      </div>
    </header>
  )
}
