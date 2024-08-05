import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('Button is in correct status', () => {
  render(<App />)
  const statusButton = screen.getByRole('button', { name: 'Pass' })
  fireEvent.click(statusButton)
  // Expect the button text to be'Fail'
  expect(statusButton.textContent).toBe('Fail')
})
  test('Translating or not', () => {
  render(<App />)
  const statusButton = screen.getByRole('button', { name: 'Pass' })
  fireEvent.click(statusButton)
  expect(statusButton.textContent).toBe('Fail')
})