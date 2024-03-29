import { $ } from './utils/dom.js'
import MenuApi from './api/index.js'

/*
- [ ] [링크](https://github.com/blackcoffee-study/moonbucks-menu-server)에 있는 
			웹 서버 저장소를 clone하여 로컬에서 웹 서버를 실행시킨다.
- [ ] 웹 서버를 띄워서 실제 서버에 데이터의 변경을 저장하는 형태로 리팩터링한다.
	- [ ] 서버에 새로운 메뉴 저장 요청을 한다.
	- [ ] 서버에 저장된 카테고리별 메뉴리스트를 불러온다.
	- [ ] 서버에 저장된 메뉴 수정 요청을 한다.
	- [ ] 서버에 메뉴의 품절 상태를 토글 요청 한다.
	- [ ] 서버에 저장된 메뉴를 삭제 요청 한다.

	// 리팩토링
  - [ ] localStorage에 저장하는 로직은 지운다.
  - [ ] fetch 비동기 api를 사용하는 부분을 async await을 사용하여 구현한다.
  - [ ] API 통신이 실패하는 경우에 대해 사용자가 알 수 있게 [alert](https://developer.mozilla.org/ko/docs/Web/API/Window/alert)으로 예외처리를 진행한다.
- [ ] 중복되는 메뉴는 추가할 수 없다.
*/

class App {
  constructor() {
    this.cafeMenu = {
      espresso: [],
      frappuccino: [],
      blended: [],
      teavana: [],
      desert: [],
    }
    this.currentMenuCategory = 'espresso'
    this.init()
  }

  async init() {
    this.render()
    this.initEventListeners()
  }

  initEventListeners() {
    $('#menu-form').addEventListener('submit', e => {
      e.preventDefault()
    })

    $('#menu-submit-button').addEventListener('click', () => this.addMenuName())

    $('#menu-name').addEventListener('keypress', ({ key }) => {
      if (key !== 'Enter') return
      this.addMenuName()
    })

    $('#menu-list').addEventListener('click', ({ target }) => {
      if (target.classList.contains('menu-sold-out-button')) {
        this.toggleSoldout(target)
        return
      }
      if (target.classList.contains('menu-edit-button')) {
        this.updateMenuName(target)
        return
      }
      if (target.classList.contains('menu-remove-button')) {
        this.removeMenuName(target)
      }
    })

    $('.nav-menu').addEventListener('click', ({ target }) => {
      this.changeCategory(target)
    })
  }

  async render() {
    const data = await MenuApi.getAllMenuByCategory(this.currentMenuCategory)
    this.cafeMenu[this.currentMenuCategory] = data

    const template = this.cafeMenu[this.currentMenuCategory]
      .map(menu => {
        return `
				<li data-list-id='${menu.id}' class="menu-list-item d-flex items-center py-2">
				<span class="w-100 pl-2 menu-name ${menu.isSoldOut ? 'sold-out' : ''}">${menu.name}</span>
				<button
				type="button"
				class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
				>
					품절
				</button>
				<button
				type="button"
				class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
				>
					수정
				</button>
				<button
					type="button"
					class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
				>
					삭제
				</button>
				</li>`
      })
      .join('')
    $('#menu-list').innerHTML = template

    const menuCount = this.cafeMenu[this.currentMenuCategory].length
    $('.menu-count').innerText = `총 ${menuCount}개`
  }

  async addMenuName() {
    const menuName = $('#menu-name').value
    if (!menuName) {
      alert('입력 없음')
      return
    }

    const duplicateItem = this.cafeMenu[this.currentMenuCategory].find(
      item => item.name === menuName
    )
    if (duplicateItem) {
      alert('중복된 메뉴 이름')
      $('#menu-name').value = ''
      return
    }

    await MenuApi.createMenu(this.currentMenuCategory, menuName)

    this.render()
    $('#menu-name').value = ''
  }

  async updateMenuName(target) {
    const targetListId = target.closest('li').dataset.listId
    const updatedMenuName = prompt(
      '수정할 메뉴 이름을 입력하세요',
      target.closest('li').querySelector('.menu-name').innerText
    )
    if (updatedMenuName) {
      await MenuApi.updateMenu(this.currentMenuCategory, updatedMenuName, targetListId)

      this.render()
    }
  }

  async removeMenuName(target) {
    if (confirm('삭제할래요?')) {
      const targetListId = target.closest('li').dataset.listId

      await MenuApi.deleteMenu(this.currentMenuCategory, targetListId)

      this.render()
    }
  }

  async toggleSoldout(target) {
    const targetMenuListId = target.closest('li').dataset.listId

    await MenuApi.toggleSoldoutMenu(this.currentMenuCategory, targetMenuListId)

    this.render()
  }

  changeCategory(target) {
    const isCategoryButton = target.classList.contains('cafe-category-name')
    if (isCategoryButton) {
      const categoryName = target.dataset.categoryName
      this.currentMenuCategory = categoryName
      $('#category-title').innerText = `${target.innerText} 메뉴 관리`

      this.render()
    }
  }
}

new App()
