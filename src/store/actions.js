export default {
  addList(context, payLoad) {
    return new Promise((resolve, reject) => {
      for (let i in context.state.cartList) {
        if (context.state.cartList[i].iid === payLoad.iid) {
          context.commit('addNum', i)
          resolve('该商品购买数量加1')
          return
        }
      }
      payLoad.num = 1
      context.commit('addCart', payLoad)
      resolve('该商品已经添加到您的购物车了')
    })
  }
}