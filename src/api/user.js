import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/go_gateway_view_demo/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/go_gateway_view_demo/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/go_gateway_view_demo/user/logout',
    method: 'post'
  })
}
