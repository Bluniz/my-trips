import { render, screen } from '@testing-library/react'
import Map from '.'

describe('Map Component', () => {
  it('should render without any marker', () => {
    render(<Map />)

    screen.logTestingPlaygroundURL()
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /openstreetmap/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Santo Amaro',
      slug: 'santo_amaro',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    const placeTwo = {
      id: '2',
      name: 'Salvador',
      slug: 'salvador',
      location: {
        latitude: 129,
        longitude: -50
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/santo amaro/i)).toBeInTheDocument()
    expect(screen.getByTitle(/salvador/i)).toBeInTheDocument()
  })
})
