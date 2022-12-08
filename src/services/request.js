import axios from "./axios";

export function login(params) {
  return axios.post('/user/login', params)
}

export function getProfile() {
  return axios.get('/user/profile')
}

export function sendMobileCode(mobile) {
  return axios.get(`/api/passport/send-code?mobile=${mobile}`)
}

export function createOrder(body) {
  return axios.post(`/api/order/create`, body)
}

export function checkOrderStatus(orderNo) {
  return axios.get(`/api/order/status/${orderNo}`)
}

export function getOrderList() {
  return axios.get('/api/admin/order-list')
}

export function refundsOrder(params) {
  return axios.post('/api/admin/refunds', params)
}