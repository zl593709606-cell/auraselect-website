import { useLang } from '@/i18n/LangContext'
import { t } from '@/i18n/translations'
import { MacSplitButton } from './MacSplitButton'
import { HardDrive, Cloud } from 'lucide-react'

interface DownloadProps {
  onMacDownload: (variant: 'arm64' | 'intel') => void
  onWinDownload: () => void
}

export function Download({ onMacDownload, onWinDownload }: DownloadProps) {
  const { s, lang } = useLang()
  const isCn = lang === 'zh'

  return (
    <section id="download" className="py-32 bg-white">
      <div className="mx-auto px-10" style={{ maxWidth: '1200px' }}>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#5AB5AE' }}>
            {s(t.nav.download)}
          </p>
          <h2 className="text-5xl font-extrabold text-navy mb-5" style={{ letterSpacing: '-0.025em' }}>
            {isCn ? '立即下载，免费体验' : 'Download Free'}
          </h2>
          <p className="text-lg text-slate-500">
            {isCn ? '支持 macOS 12+ 和 Windows 10/11' : 'Supports macOS 12+ and Windows 10/11. No account required.'}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Mac card */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226,232,240,0.8)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                <HardDrive size={22} className="text-navy" />
              </div>
              <div>
                <p className="font-bold text-navy">macOS</p>
                <p className="text-xs text-slate-400">12 Monterey +</p>
              </div>
            </div>
            <MacSplitButton
              label={s(t.hero.macDownload)}
              apSiliconLabel={s(t.hero.apSilicon)}
              intelLabel={s(t.hero.intel)}
              onSelect={onMacDownload}
            />
            <p className="mt-3 text-xs text-slate-400">{isCn ? '推荐 Apple Silicon 版本以获得最佳性能' : 'Apple Silicon recommended for best performance'}</p>
          </div>

          {/* Windows card */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(226,232,240,0.8)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                <Cloud size={22} className="text-navy" />
              </div>
              <div>
                <p className="font-bold text-navy">Windows</p>
                <p className="text-xs text-slate-400">10 / 11 (64-bit)</p>
              </div>
            </div>
            <button
              onClick={onWinDownload}
              className="flex items-center gap-2 text-sm font-semibold text-navy border border-slate-200 rounded-lg px-5 py-3 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              {s(t.hero.winDownload)}
            </button>
            <p className="mt-3 text-xs text-slate-400">{isCn ? 'NSIS 安装包，双击即可安装' : 'NSIS installer, double-click to install'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
