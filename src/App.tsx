import { useState } from 'react'
import { LangProvider } from './i18n/LangContext'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Download } from './components/Download'
import { Privacy } from './components/Privacy'
import { InstallGuide } from './components/InstallGuide'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { InstallModal } from './components/InstallModal'

// Download URL stubs — replace with real CDN links
const DOWNLOAD_URLS = {
  arm64: 'https://wanqiang.xyz/download/AuraSelect-arm64.dmg',
  intel: 'https://wanqiang.xyz/download/AuraSelect-intel.dmg',
  win:   'https://wanqiang.xyz/download/AuraSelect-Setup.exe',
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const handleMacDownload = (variant: 'arm64' | 'intel') => {
    window.location.href = DOWNLOAD_URLS[variant]
    // Show Mac security guide after a short delay
    setTimeout(() => setModalOpen(true), 800)
  }

  const handleWinDownload = () => {
    window.location.href = DOWNLOAD_URLS.win
  }

  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <LangProvider>
      <Nav onDownloadClick={scrollToDownload} />

      <main className="pt-16">
        <Hero onMacDownload={handleMacDownload} onWinDownload={handleWinDownload} />
        <Features />
        <Privacy />
        <InstallGuide />
        <Download onMacDownload={handleMacDownload} onWinDownload={handleWinDownload} />
        <FAQ />
      </main>

      <Footer />

      <InstallModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </LangProvider>
  )
}
