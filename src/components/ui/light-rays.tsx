import { cn } from '@/lib/utils'

interface LightRaysProps {
  className?: string
}

export function LightRays({ className }: LightRaysProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EBF4FF] via-[#F3F8FF] to-white" />

      {/* Conic ray burst from top-center */}
      <div
        className="absolute"
        style={{
          top: '-80px',
          left: '50%',
          width: '2400px',
          height: '1000px',
          background: `conic-gradient(
            from 258deg at 50% 0%,
            transparent 0deg,
            rgba(90,181,174,0.09) 6deg, rgba(90,181,174,0.04) 10deg, transparent 16deg,
            transparent 22deg,
            rgba(180,220,255,0.07) 28deg, rgba(180,220,255,0.03) 32deg, transparent 38deg,
            transparent 44deg,
            rgba(90,181,174,0.07) 50deg, rgba(90,181,174,0.03) 54deg, transparent 60deg,
            transparent 66deg,
            rgba(180,220,255,0.06) 72deg, rgba(180,220,255,0.02) 76deg, transparent 82deg,
            transparent 88deg,
            rgba(90,181,174,0.05) 94deg, rgba(90,181,174,0.02) 98deg, transparent 102deg,
            transparent 258deg
          )`,
          maskImage: 'radial-gradient(ellipse 90% 75% at 50% 0%, black 0%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 75% at 50% 0%, black 0%, black 40%, transparent 80%)',
          animation: 'rays-breathe 10s ease-in-out infinite',
        }}
      />

      {/* Secondary soft glow halo */}
      <div
        className="absolute"
        style={{
          top: '-60px',
          left: '50%',
          width: '900px',
          height: '500px',
          background: 'radial-gradient(ellipse 60% 55% at 50% 0%, rgba(90,181,174,0.12) 0%, rgba(150,210,255,0.07) 40%, transparent 70%)',
          animation: 'glow-pulse 6s ease-in-out infinite',
        }}
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(90,181,174,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 85% 65% at 50% 0%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 0%, black 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
