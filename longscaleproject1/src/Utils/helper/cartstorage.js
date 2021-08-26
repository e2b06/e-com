export const cartStorage = {
  setItem(state) {
    localStorage.setItem('cart', JSON.stringify(state))
  },
  getItem() {
    return JSON.parse(localStorage.getItem('cart'))
  },
}
