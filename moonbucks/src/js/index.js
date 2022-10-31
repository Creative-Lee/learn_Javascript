import { $ } from './utils/dom.js'
import store from './store/index.js'

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

	init() {
		const cafeMenuData = store.getLocalStorage()
		if (cafeMenuData) {
			this.cafeMenu = cafeMenuData
		}
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
}

new App()
