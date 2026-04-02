import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { ShuffleGrid } from '@/components/ui/shuffle-grid'

// Mock fetch to return our 16 images
const mockImages = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `https://example.com/photo-${i + 1}.jpg`,
  alt: `Photo ${i + 1}`,
  author: 'Author',
  authorUrl: 'https://unsplash.com',
}))

beforeEach(() => {
  global.fetch = vi.fn().mockResolvedValue({
    json: () => Promise.resolve(mockImages),
  } as unknown as Response)
})

describe('ShuffleGrid', () => {
  it('renders 16 cells (skeleton placeholders before images load)', () => {
    render(<ShuffleGrid />)
    // 16 skeleton divs should be present immediately
    const cells = document.querySelectorAll('[aria-hidden="true"]')
    expect(cells.length).toBe(16)
  })
})
