const BASE_URL = 'http://localhost:3000/api'

function request(url, option = {}) {
  return fetch(`${BASE_URL}/${url}`, option)
}

export default request
