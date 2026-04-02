import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Lang, BiStr } from './translations'

interface LangContextValue {
  lang: Lang
  toggle: () => void
  s: (entry: BiStr) => string
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('zh')
  const toggle = () => setLang((l) => (l === 'zh' ? 'en' : 'zh'))
  const s = (entry: BiStr) => entry[lang]
  return (
    <LangContext.Provider value={{ lang, toggle, s }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
