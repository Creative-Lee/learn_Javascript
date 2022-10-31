export default class View {
  render() {
		const template = this.cafeMenu[this.currentMenuCategory]
			.map((menu, idx) => {
				return `
				<li data-list-id='${idx}' class="menu-list-item d-flex items-center py-2">
				<span class="w-100 pl-2 menu-name ${menu.soldOut ? 'sold-out' : ''}">${menu.name}</span>
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
}