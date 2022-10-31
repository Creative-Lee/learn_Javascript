export default class CafeMenuController{
  addMenuName() {
		const menuName = $('#menu-name').value
		if (!menuName) {
			alert('입력 없음')
			return
		}
		this.cafeMenu[this.currentMenuCategory].push({ name: menuName })
		store.setLocalStorage(this.cafeMenu)
		this.render()
		$('#menu-name').value = ''
	}
	updateMenuName(target) {
		const targetListId = target.closest('li').dataset.listId
		const updatedMenuName = prompt('수정할 메뉴 이름을 입력하세요', target.closest('li').querySelector('.menu-name').innerText)
		if (updatedMenuName) {
			this.cafeMenu[this.currentMenuCategory][targetListId].name = updatedMenuName
			store.setLocalStorage(this.cafeMenu)
			this.render()
		}
	}
	removeMenuName(target) {
		if (confirm('삭제할래요?')) {
			const targetListId = target.closest('li').dataset.listId
			this.cafeMenu[this.currentMenuCategory].splice(targetListId, 1)
			store.setLocalStorage(this.cafeMenu)
			this.render()
		}
	}
	toggleSoldout(target) {
		const targetMenuListId = target.closest('li').dataset.listId
		this.cafeMenu[this.currentMenuCategory][targetMenuListId].soldOut =
			!this.cafeMenu[this.currentMenuCategory][targetMenuListId].soldOut
		store.setLocalStorage(this.cafeMenu)
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