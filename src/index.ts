export const tsTest = (name: string): string => `Hello ${name}!`

export const sayHello = (): void => {
  console.log(tsTest('TypeScript'))
}
