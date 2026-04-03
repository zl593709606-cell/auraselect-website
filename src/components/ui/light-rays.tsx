import { cn } from '@/lib/utils'

interface LightRaysProps {
  className?: string
}

export function LightRays({ className }: LightRaysProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {/* Base white background */}
      <div className="absolute inset-0 bg-white" />

      {/* Rainbow gradient blur — magicui style */}
      {/* Left orb: violet/purple */}
      <div
        className="absolute"
        style={{
          top: '-10%',
          left: '5%',
          width: '600px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.18) 0%, rgba(109,40,217,0.08) 45%, transparent 70%)',
          filter: 'blur(48px)',
          animation: 'glow-pulse 8s ease-in-out infinite',
        }}
      />

      {/* Center-left orb: pink/rose */}
      <div
        className="absolute"
        style={{
          top: '-5%',
          left: '25%',
          width: '500px',
          height: '420px',
          background: 'radial-gradient(ellipse at center, rgba(236,72,153,0.14) 0%, rgba(244,63,94,0.07) 45%, transparent 70%)',
          filter: 'blur(56px)',
          animation: 'glow-pulse 10s ease-in-out infinite 1s',
        }}
      />

      {/* Center orb: teal (brand color) */}
      <div
        className="absolute"
        style={{
          top: '-15%',
          left: '42%',
          width: '560px',
          height: '460px',
          background: 'radial-gradient(ellipse at center, rgba(90,181,174,0.20) 0%, rgba(61,154,147,0.09) 45%, transparent 70%)',
          filter: 'blur(52px)',
          animation: 'rays-breathe 9s ease-in-out infinite',
        }}
      />

      {/* Center-right orb: sky blue */}
      <div
        className="absolute"
        style={{
          top: '-8%',
          left: '60%',
          width: '480px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(56,189,248,0.14) 0%, rgba(14,165,233,0.07) 45%, transparent 70%)',
          filter: 'blur(52px)',
          animation: 'glow-pulse 11s ease-in-out infinite 0.5s',
        }}
      />

      {/* Right orb: indigo */}
      <div
        className="absolute"
        style={{
          top: '-5%',
          right: '2%',
          width: '420px',
          height: '380px',
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.14) 0%, rgba(79,70,229,0.07) 45%, transparent 70%)',
          filter: 'blur(48px)',
          animation: 'rays-breathe 12s ease-in-out infinite 2s',
        }}
      />

      {/* Bottom fade to white */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: '40%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.8) 60%, white 100%)',
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(100,116,139,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 75%)',
        }}
      />
    </div>
  )
}
