import request from '@/utils/request'

export function searchUser(name) {
  return request({
    url: '/go_gateway_view_demo/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return request({
    url: '/go_gateway_view_demo/transaction/list',
    method: 'get',
    params: query
  })
}
