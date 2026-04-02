import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, Terminal, Rocket } from 'lucide-react'
import { useLang } from '@/i18n/LangContext'

interface InstallModalProps {
  open: boolean
  onClose: () => void
}

export function InstallModal({ open, onClose }: InstallModalProps) {
  const { lang } = useLang()
  const isCn = lang === 'zh'

  const steps = isCn
    ? [
        { icon: Shield, title: '打开系统设置', desc: '进入「隐私与安全性」→「安全性」部分' },
        { icon: Terminal, title: '允许运行', desc: '点击「仍要打开」或「允许来自任何来源」选项' },
        { icon: Rocket, title: '启动 AuraSelect', desc: '再次双击应用图标即可正常启动' },
      ]
    : [
        { icon: Shield, title: 'Open System Settings', desc: 'Go to Privacy & Security → Security section' },
        { icon: Terminal, title: 'Allow the app', desc: 'Click "Open Anyway" or enable "Allow apps from anywhere"' },
        { icon: Rocket, title: 'Launch AuraSelect', desc: 'Double-click the app icon again to start normally' },
      ]

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 pointer-events-auto">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
                aria-label="关闭"
              >
                <X size={18} />
              </button>

              <h2 className="text-xl font-bold text-navy mb-2">
                {isCn ? 'Mac 安全提示处理' : 'Mac Security Prompt'}
              </h2>
              <p className="text-sm text-slate-500 mb-7">
                {isCn
                  ? '首次打开 AuraSelect 时 macOS 会弹出安全提示，按以下步骤处理：'
                  : 'macOS may show a security warning the first time you open AuraSelect. Follow these steps:'}
              </p>

              <div className="flex flex-col gap-5">
                {steps.map(({ title, desc }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-white text-sm font-bold"
                      style={{ background: '#5AB5AE' }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy mb-0.5">{title}</p>
                      <p className="text-sm text-slate-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={onClose}
                className="mt-8 w-full py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: '#5AB5AE' }}
              >
                {isCn ? '明白了' : 'Got it'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
