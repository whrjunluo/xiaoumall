import http from './axios'



// 获取轮播图
export function getBanner() {
  return http.get('/api/getbanner')
}
// 首页获取商品
export function getGoodsList() {
  return http.get('/api/getindexgoods')
}
// 首页获取分类树形结构
export function getCateTree() {
  return http.get('/api/getcatetree')
}

// 首页获取分类商品
export function getGoods(fid) {
  let params = {
    fid
  }
  console.log(params);
  return http.get('/api/getgoods', {
    params
  })
}
// 首页一个商品
export function getGoodsInfo(id) {
  let params = {
    id
  }
  console.log(params);
  return http.get('/api/getgoodsinfo', {
    params
  })
}
// 注册会员
export function postRegister(data) {
  return http.post('/api/register', data)
}
// 注册会员
export function postLogin(data) {
  return http.post('/api/login', data)
}

// 首页获取购物车列表
export function getCartList(uid) {
  let params = {
    uid
  }
  console.log(params);
  return http.get('/api/cartlist', {
    params
  })
}

// 购物车添加
export function postCartAdd(data) {
  return http.post('/api/cartadd', data)
}
// 购物车删除
export function postCartDelete(data) {
  console.log(data);
  return http.post('/api/cartdelete', data)
}
