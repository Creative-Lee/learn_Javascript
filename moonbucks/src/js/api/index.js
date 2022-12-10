const BASE_URL = 'http://localhost:3000/api'

function request(url, option = {}) {
  return fetch(`${BASE_URL}/${url}`, option)
}

const MenuApi = {
  async getAllMenuByCategory(category) {
    const response = await request(`category/${category}/menu`)

    return response.json()
  },

  async createMenu(category, name) {
    const response = await request(`category/${category}/menu`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    })

    if (!response.ok) {
      console.error('error')
    }

    return response.json()
  },

  async updateMenu(category, name, menuId) {
    const response = await request(`category/${category}/menu/${menuId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    })

    if (!response.ok) {
      console.error('error')
    }

    return response.json()
  },

  async toggleSoldoutMenu(category, menuId) {
    const response = await request(`category/${category}/menu/${menuId}/soldout`, {
      method: 'PUT',
    })

    if (!response.ok) {
      console.error('error')
    }
  },

  async deleteMenu(category, menuId) {
    const response = await request(`category/${category}/menu/${menuId}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      console.error('error')
    }
  },
}

export default MenuApi
