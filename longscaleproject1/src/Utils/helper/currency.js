export const currencyFunc = (price) => {
  let finalPrice = []
  let strPrice = price.toString().split('').reverse()
  strPrice.forEach((str, index) => {
    if (index === 2) {
      finalPrice.push('.')
    } else if ((index - 2) % 3 === 0) {
      finalPrice.push(',')
    }

    finalPrice.push(str)
  })

  finalPrice.reverse().join('')

  return finalPrice
}
