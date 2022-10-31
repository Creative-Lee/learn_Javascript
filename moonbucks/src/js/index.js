import { $ } from './utils/dom.js'
import store from './store/index.js'

class App {
	constructor() {
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
}

new App()
