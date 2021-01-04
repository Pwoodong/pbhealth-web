import request from '@/utils/request'

export function getSumData() {
  const params = {
    userId: 1
  }
  return request({
    url: 'health-calculate/statistics/sum',
    method: 'post',
    params
  })
}

export function getReportData() {
  const params = {
    userId: 1
  }
  return request({
    url: 'health-calculate/statistics/healthReport',
    method: 'post',
    params
  })
}
