import { useLang } from '@/i18n/LangContext'
import { t } from '@/i18n/translations'
import { LightRays } from './ui/light-rays'
import { ShuffleGrid } from './ui/shuffle-grid'
import { MacSplitButton } from './MacSplitButton'

interface HeroProps {
  onMacDownload: (variant: 'arm64' | 'intel') => void
  onWinDownload: () => void
}

export function Hero({ onMacDownload, onWinDownload }: HeroProps) {
  const { s } = useLang()

  return (
    <section className="relative" id="hero">
      <LightRays />
      <div
        className="relative z-10 mx-auto grid grid-cols-2 items-center gap-16"
        style={{ maxWidth: '1200px', padding: '60px 40px 80px' }}
      >
        {/* Left: text */}
        <div className="flex flex-col">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 w-fit mb-6 text-xs font-semibold tracking-wider rounded-full px-3 py-1.5"
            style={{
              background: 'rgba(208,237,235,0.6)',
              border: '1px solid rgba(90,181,174,0.25)',
              color: '#3D9A93',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            {s(t.hero.badge)}
          </div>

          {/* Headline */}
          <h1
            className="font-extrabold text-navy leading-tight mb-5"
            style={{ fontSize: '52px', letterSpacing: '-0.035em', lineHeight: 1.1 }}
          >
            {s(t.hero.headline1)}
            <em className="not-italic" style={{ color: '#5AB5AE' }}>
              {s(t.hero.headlineEm)}
            </em>
            <br />
            {s(t.hero.headline2)}
          </h1>

          {/* Sub */}
          <p className="text-base text-slate-500 leading-relaxed mb-9 max-w-sm">
            {s(t.hero.sub)}
          </p>

          {/* Download buttons */}
          <div className="flex items-center gap-2.5 mb-4">
            <MacSplitButton
              label={s(t.hero.macDownload)}
              apSiliconLabel={s(t.hero.apSilicon)}
              intelLabel={s(t.hero.intel)}
              onSelect={onMacDownload}
            />
            <button
              onClick={onWinDownload}
              className="flex items-center gap-2 text-sm font-semibold text-navy border border-slate-200 rounded-lg px-5 py-3 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              <svg width="17" height="17" viewBox="0 0 88 88" fill="currentColor">
                <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.529l.028 34.453L.028 75.48l-.01-29.806zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349l-.011 41.34-47.318-6.678-.066-34.739z"/>
              </svg>
              {s(t.hero.winDownload)}
            </button>
          </div>

          {/* Version note */}
          <p className="text-xs text-slate-400">
            {s(t.hero.note)}
            <a href="#changelog" className="text-teal hover:underline">
              {s(t.hero.changelog)}
            </a>
          </p>
        </div>

        {/* Right: ShuffleGrid */}
        <ShuffleGrid />
      </div>
    </section>
  )
}
