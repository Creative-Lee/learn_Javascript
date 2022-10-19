import { $ } from './utils/dom.js'
import store from './store/index.js'

class App {
	constructor() {
		this.initEvent()
	}
	initEvent() {
		$('#menu-form').addEventListener('submit', e => {
			e.preventDefault()
		})

		$('#menu-submit-button').addEventListener('click', e => {
			this.addMenuName()
		})

		$('#menu-name').addEventListener('keypress', e => {
			if (e.key === 'Enter') {
				this.addMenuName()
			}
		})

		$('#menu-list').addEventListener('click', ({ target }) => {
			if (target.classList.contains('menu-edit-button')) {
				this.updateMenuName(target)
				return
			}
		})
	}

	getMenuItemTemplit(menuName) {
		return `<li class="menu-list-item d-flex items-center py-2">
		<span class="w-100 pl-2 menu-name">${menuName}</span>
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
	}
	addMenuName() {
		const menuName = $('#menu-name').value
		if (!menuName) {
			alert('입력 없음')
			return
		}

		$('#menu-list').insertAdjacentHTML('beforeend', this.getMenuItemTemplit(menuName))
		$('#menu-name').value = ''
	}
	updateMenuName(target) {
		const $menuName = target.closest('li').querySelector('.menu-name')
		const updatedMenuName = prompt('수정할 메뉴 이름을 입력하세요', $menuName.innerText)
		if (updatedMenuName) {
			$menuName.innerText = updatedMenuName
		}
	}
}

new App()
