import request from '@/utils/request'

export function getSumData() {
  const params = {
  }
  return request({
    url: 'health-calculate/statistics/sum',
    method: 'post',
    params
  })
}

export function getReportData() {
  const params = {
  }
  return request({
    url: 'health-calculate/statistics/healthReport',
    method: 'post',
    params
  })
}
