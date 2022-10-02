// - [ ] [localStorage]에 데이터를 저장하여 새로고침해도 데이터가 남아있게 한다.
// - [ ] 에스프레소, 프라푸치노, 블렌디드, 티바나, 디저트 각각의 종류별로 메뉴판을 관리할 수 있게 만든다.
// - [ ] 페이지에 최초로 접근할 때는 에스프레소 메뉴가 먼저 보이게 한다.
// - [ ] 품절 상태인 경우를 보여줄 수 있게, 품절 버튼을 추가하고 `sold-out` class를 추가하여 상태를 변경한다.
// - 품절 상태 메뉴의 마크업

// localStorage에 메뉴 종류별 데이터 저장.

// 각 종료의 메뉴판 관리 기능

// 최초접속 시 로컬스토리지의 에스프레소 메뉴 읽어온다.

// 품절 버튼 클릭시 품절 상태값 로컬 스토리지에 업데이트
// 풀절 버튼 클릭시 li태그에 `sold-out` class를 추가
// 품절 상태 메뉴 마크업 변수화

const $ = (selector) => document.querySelector(selector)

const store = {
	setLocalStorage(menu) {
		localStorage.setItem('menu', JSON.stringify(menu))
	},
	getLocalStorage() {
		localStorage.getItem('menu')
	},
}

function App() {
	// 갯수, 카드 타이틀의 종류명, placeholder 종류명, 종류별 메뉴리스트의 각 메뉴명

	const updateMenuCount = () => {
		const menuCount = $('#espresso-menu-list').querySelectorAll('li').length
		$('.menu-count').innerText = `총 ${menuCount}개`
	}

	const addMenuName = () => {
		if ($('#espresso-menu-name').value === '') {
			alert('값을 입력하시오')
			return
		}

		const $NEW_MENU_NAME = $('#espresso-menu-name').value
		const menuItemTemplate = (menuItem) => {
			return `
      <li class="menu-list-item d-flex items-center py-2">
      <span class="w-100 pl-2 menu-name">${menuItem}</span>
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
		$('#espresso-menu-list').insertAdjacentHTML(
			'beforeend',
			menuItemTemplate($NEW_MENU_NAME)
		)
		updateMenuCount()
		$('#espresso-menu-name').value = ''
	}

	const editMenuName = (e) => {
		const $MENU_NAME = e.target.closest('li').querySelector('.menu-name')
		const editedMenuName = prompt(
			'수정할 값을 적어주세요',
			$MENU_NAME.innerText
		)
		if (editedMenuName) {
			$MENU_NAME.innerText = editedMenuName
		}
	}

	const removeMenuName = (e) => {
		if (confirm('정말 삭제할래요?')) {
			e.target.closest('li').remove()
			updateMenuCount()
		}
	}

	$('#espresso-menu-form').addEventListener('submit', (e) => {
		e.preventDefault()
	})

	$('#espresso-menu-list').addEventListener('click', (e) => {
		if (e.target.classList.contains('menu-edit-button')) {
			editMenuName(e)
		}

		if (e.target.classList.contains('menu-remove-button')) {
			removeMenuName(e)
		}
	})

	$('#espresso-menu-submit-button').addEventListener('click', addMenuName)

	$('#espresso-menu-name').addEventListener('keypress', (e) => {
		if (e.key !== 'Enter') return
		addMenuName()
	})
}
App()
