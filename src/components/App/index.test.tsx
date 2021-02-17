import * as React from 'react'
import { render, screen } from '@testing-library/react'

import { HOME_PAGE_GREETING } from '../../messages'
import App from './index'

describe('App component', () => {
  it('should render welcome message', async () => {
    console.log = jest.fn()

    render(<App />)

    expect(screen.getByRole('greeting')).toHaveTextContent(HOME_PAGE_GREETING)
    expect(console.log).toHaveBeenCalled()
  })
})
