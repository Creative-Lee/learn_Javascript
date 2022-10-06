// - [ ] [localStorage]에 데이터를 저장하여 새로고침해도 데이터가 남아있게 한다.
// - [ ] 에스프레소, 프라푸치노, 블렌디드, 티바나, 디저트 각각의 종류별로 메뉴판을 관리할 수 있게 만든다.
// - [ ] 페이지에 최초로 접근할 때는 에스프레소 메뉴가 먼저 보이게 한다.
// - [ ] 품절 상태인 경우를 보여줄 수 있게, 품절 버튼을 추가하고 `sold-out` class를 추가하여 상태를 변경한다.
// - 품절 상태 메뉴의 마크업

// localStorage에 메뉴 종류별 데이터 저장.
// 삭제 o
// 수정 o
// 추가 o

// 각 종료의 메뉴판 관리 기능

// 최초접속 시 로컬스토리지의 에스프레소 메뉴 읽어온다.

// 품절 버튼 클릭시 품절 상태값 로컬 스토리지에 업데이트
// 풀절 버튼 클릭시 li태그에 `sold-out` class를 추가
// 품절 상태 메뉴 마크업 변수화
import { $ } from './utils/dom.js'
import store from './store/index.js'

function App() {
	this.menuList = {
		espresso: [],
		frappuccino: [],
		blended: [],
		teavana: [],
		desert: [],
	}
	this.currentCategory = 'espresso'

	this.init = () => {
		if (store.getLocalStorage()) {
			this.menuList = store.getLocalStorage()
		}
		render()
		initEventListeners()
	}

	const render = () => {
		const template = this.menuList[this.currentCategory]
			.map((menuItem, idx) => {
				return `
				<li data-menu-id="${idx}" class="menu-list-item d-flex items-center py-2 ">
				<span class="w-100 pl-2 menu-name ${menuItem.soldOut ? 'sold-out' : ''}">${menuItem.menu}</span>
				<button type="button" class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button">
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
		updateMenuCount()
	}

	const updateMenuCount = () => {
		const menuCount = this.menuList[this.currentCategory].length
		$('.menu-count').innerText = `총 ${menuCount}개`
	}

	const addMenuName = () => {
		if ($('#menu-name').value === '') {
			alert('값을 입력하시오')
			return
		}

		const newMenuName = $('#menu-name').value
		this.menuList[this.currentCategory].push({ menu: newMenuName })
		store.setLocalStorage(this.menuList)
		render()
		$('#menu-name').value = ''
	}

	const editMenuName = e => {
		const menuId = e.target.closest('li').dataset.menuId
		const $MENU_NAME = e.target.closest('li').querySelector('.menu-name')
		const editedMenuName = prompt('수정할 값을 적어주세요', $MENU_NAME.innerText)
		if (editedMenuName) {
			this.menuList[this.currentCategory][menuId].menu = editedMenuName
			store.setLocalStorage(this.menuList)
			render()
		}
	}

	const removeMenuName = e => {
		const menuId = e.target.closest('li').dataset.menuId
		if (confirm('정말 삭제할래요?')) {
			this.menuList[this.currentCategory].splice(menuId, 1)
			store.setLocalStorage(this.menuList)
			render()
		}
	}

	const toggleSoldoutMenu = e => {
		const menuId = e.target.closest('li').dataset.menuId
		this.menuList[this.currentCategory][menuId].soldOut =
			!this.menuList[this.currentCategory][menuId].soldOut
		store.setLocalStorage(this.menuList)
		render()
	}
	const initEventListeners = () => {
		$('#menu-form').addEventListener('submit', e => {
			e.preventDefault()
		})

		$('#menu-name').addEventListener('keypress', e => {
			if (e.key !== 'Enter') return
			addMenuName()
		})

		$('#menu-list').addEventListener('click', e => {
			if (e.target.classList.contains('menu-sold-out-button')) {
				toggleSoldoutMenu(e)
				return
			}

			if (e.target.classList.contains('menu-edit-button')) {
				editMenuName(e)
				return
			}

			if (e.target.classList.contains('menu-remove-button')) {
				removeMenuName(e)
				return
			}
		})

		$('#menu-submit-button').addEventListener('click', addMenuName)

		$('.nav-menu').addEventListener('click', e => {
			const isCategoryButton = e.target.classList.contains('cafe-category-name')
			if (isCategoryButton) {
				const categoryName = e.target.dataset.categoryName
				this.currentCategory = categoryName
				$('#category-title').innerText = `${e.target.innerText} 메뉴 관리`

				render()
			}
		})
	}
}
new App().init()
