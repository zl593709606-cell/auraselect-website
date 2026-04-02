import { describe, it, expect } from 'vitest'
import { t } from '@/i18n/translations'

describe('translations', () => {
  const sections = [
    t.nav.features,
    t.nav.download,
    t.hero.badge,
    t.hero.macDownload,
    t.hero.winDownload,
    t.features.label,
    t.privacy.label,
    t.install.label,
    t.faq.label,
    t.footer.copyright,
  ]

  it('every key has both zh and en values', () => {
    sections.forEach((entry) => {
      expect(entry.zh).toBeTruthy()
      expect(entry.en).toBeTruthy()
    })
  })

  it('feature items all have zh and en title + desc', () => {
    t.features.items.forEach((item) => {
      expect(item.title.zh).toBeTruthy()
      expect(item.title.en).toBeTruthy()
      expect(item.desc.zh).toBeTruthy()
      expect(item.desc.en).toBeTruthy()
    })
  })

  it('faq has exactly 6 items', () => {
    expect(t.faq.items).toHaveLength(6)
  })

  it('privacy has exactly 3 cards', () => {
    expect(t.privacy.cards).toHaveLength(3)
  })

  it('install has exactly 3 steps', () => {
    expect(t.install.steps).toHaveLength(3)
  })
})
