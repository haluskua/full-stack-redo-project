import request from 'superagent'

export function getFound() {
  return request
      .get('/api/information')
      .then(res => res.body)
}
