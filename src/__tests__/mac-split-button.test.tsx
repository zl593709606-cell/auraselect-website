import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MacSplitButton } from '@/components/MacSplitButton'

const defaultProps = {
  label: '下载 Mac 版',
  apSiliconLabel: 'Apple Silicon',
  intelLabel: 'Intel',
  onSelect: vi.fn(),
}

describe('MacSplitButton', () => {
  it('renders main button label', () => {
    render(<MacSplitButton {...defaultProps} />)
    expect(screen.getByText('下载 Mac 版')).toBeInTheDocument()
  })

  it('dropdown is hidden by default', () => {
    render(<MacSplitButton {...defaultProps} />)
    expect(screen.queryByText('Apple Silicon')).not.toBeVisible()
  })

  it('opens dropdown when chevron is clicked', async () => {
    const user = userEvent.setup()
    render(<MacSplitButton {...defaultProps} />)
    await user.click(screen.getByLabelText('选择版本'))
    expect(screen.getByText('Apple Silicon')).toBeVisible()
  })

  it('calls onSelect with arm64 when Apple Silicon option is clicked', async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()
    render(<MacSplitButton {...defaultProps} onSelect={onSelect} />)
    await user.click(screen.getByLabelText('选择版本'))
    await user.click(screen.getByText('Apple Silicon'))
    expect(onSelect).toHaveBeenCalledWith('arm64')
  })
})
