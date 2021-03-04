export default {
    addNum(state, payLoad) {
      state.cartList[payLoad].num += 1
    },
  addCart(state, payLoad) {
    state.cartList.checked = true
      state.cartList.push(payLoad)
    }
}