import request from '@/utils/request'

export function getAllCollect() {
  const params = {
    page: 0,
    size: 9999,
    enabled: true
  }
  return request({
    url: 'health-collect/runRecord',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'health-collect/runRecord',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'health-collect/runRecord',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'health-collect/runRecord',
    method: 'put',
    data
  })
}

export default { add, edit, del }
