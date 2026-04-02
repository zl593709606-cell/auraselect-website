import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LangProvider } from '@/i18n/LangContext'
import { FAQ } from '@/components/FAQ'

function renderFAQ() {
  return render(
    <LangProvider>
      <FAQ />
    </LangProvider>,
  )
}

describe('FAQ', () => {
  it('renders 6 question items', () => {
    renderFAQ()
    expect(screen.getByText('支持哪些系统版本？')).toBeInTheDocument()
    expect(screen.getByText('如何获得更新？')).toBeInTheDocument()
    const questions = screen.getAllByRole('button')
    // 6 FAQ toggle buttons
    expect(questions.length).toBeGreaterThanOrEqual(6)
  })

  it('answer is hidden by default', () => {
    renderFAQ()
    expect(screen.queryByText(/macOS 12 Monterey 及更高版本/)).not.toBeVisible()
  })

  it('clicking a question reveals the answer', async () => {
    const user = userEvent.setup()
    renderFAQ()
    await user.click(screen.getByText('支持哪些系统版本？'))
    expect(screen.getByText(/macOS 12 Monterey 及更高版本/)).toBeVisible()
  })
})
