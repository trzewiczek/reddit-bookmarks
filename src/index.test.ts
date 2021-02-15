import { sayHello, tsTest } from './index'

describe('Index testing', () => {
  it('should create a greeting', () => {
    const result = tsTest('TypeScript')

    expect(result).toMatch('Hello TypeScript!')
  })

  it('should say hello', () => {
    console.log = jest.fn()

    sayHello()

    expect(console.log).toHaveBeenCalledWith('Hello TypeScript!')
  })
})
