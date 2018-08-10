import request from '@/utils/request'

export function fetchDataList(page, pageSize, data) {
  return request({
    url: '/user/apiExtPage/list',
    method: 'post',
    data: {
      page,
      pageSize,
      ...data
    }
  })
}

export function infoData(id) {
  return request({
    url: '/user/apiExtPage/info',
    method: 'get',
    params: { id }
  })
}

export function delData(id) {
  return request({
    url: '/user/apiExtPage/del',
    method: 'post',
    data: { id }
  })
}

export function saveData(data) {
  return request({
    url: '/user/apiExtPage/save',
    method: 'post',
    data: { ...data }
  })
}
