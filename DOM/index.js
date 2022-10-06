const $target = document.querySelector('.target-div')

const $ul바구니 = document.createElement('ul')

const liArray = [1, 2, 3]
liArray.forEach(num => {
	const $li = document.createElement('li')
	$li.textContent = num
	$ul바구니.appendChild($li)
})

$target.appendChild($ul바구니)
console.log($ul바구니)
