import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LangProvider } from '@/i18n/LangContext'
import { Nav } from '@/components/Nav'

function renderNav() {
  return render(
    <LangProvider>
      <Nav onDownloadClick={() => {}} />
    </LangProvider>,
  )
}

describe('Nav', () => {
  it('renders the AuraSelect logo', () => {
    renderNav()
    expect(screen.getByText('AuraSelect')).toBeInTheDocument()
  })

  it('renders 4 navigation links in Chinese by default', () => {
    renderNav()
    expect(screen.getByText('功能特性')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '下载' })).toBeInTheDocument()
    expect(screen.getByText('更新日志')).toBeInTheDocument()
    expect(screen.getByText('帮助')).toBeInTheDocument()
  })

  it('toggles language to English when lang button is clicked', async () => {
    const user = userEvent.setup()
    renderNav()
    await user.click(screen.getByRole('button', { name: /中文/i }))
    expect(screen.getByText('Features')).toBeInTheDocument()
  })
})
