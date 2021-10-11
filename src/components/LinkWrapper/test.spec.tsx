import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('LinkWrapper Component', () => {
  it('should render Link and Children', () => {
    render(<LinkWrapper href="/my-link">Batata</LinkWrapper>)

    const children = screen.getByText(/batata/i)
    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  })
})
