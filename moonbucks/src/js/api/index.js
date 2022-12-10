const BASE_URL = 'http://localhost:3000/api'

async function request(url, option = {}) {
  const response = await fetch(`${BASE_URL}/${url}`, option)

  if (!response.ok) {
    console.error('error')
  }

  return response.json()
}

async function requestWithoutJson(url, option = {}) {
  const response = await fetch(`${BASE_URL}/${url}`, option)

  if (!response.ok) {
    console.error('error')
  }

  return response
}

const HTTP_METHOD = {
  POST(data) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  },

  PUT(data) {
    return {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: data ? JSON.stringify(data) : null,
    }
  },

  DELETE() {
    return {
      method: 'DELETE',
    }
  },
}

const MenuApi = {
  async getAllMenuByCategory(category) {
    return request(`category/${category}/menu`)
  },

  async createMenu(category, name) {
    return request(`category/${category}/menu`, HTTP_METHOD.POST({ name }))
  },

  async updateMenu(category, name, menuId) {
    return request(`category/${category}/menu/${menuId}`, HTTP_METHOD.PUT({ name }))
  },

  async toggleSoldoutMenu(category, menuId) {
    return request(`category/${category}/menu/${menuId}/soldout`, HTTP_METHOD.PUT())
  },

  async deleteMenu(category, menuId) {
    return requestWithoutJson(`category/${category}/menu/${menuId}`, HTTP_METHOD.DELETE())
  },
}

export default MenuApi
