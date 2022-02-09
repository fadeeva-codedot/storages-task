const lsKey = document.querySelector('#ls-key')
const lsValue = document.querySelector('#ls-value')
const lsList = document.querySelector('#ls-elements')

const lsRender = () => {
	let keys = Object.keys(localStorage)
	lsList.innerHTML = ''
	for (let key of keys) {
		lsList.innerHTML += `<li>${key}: ${localStorage.getItem(key)}</li>`
	}

	lsKey.value = ''
	lsValue.value = ''
}

const lsAdd = () => {
	localStorage.setItem(lsKey.value, lsValue.value)
	lsRender()
}

const lsRemove = () => {
	localStorage.removeItem(lsKey.value)
	lsRender()
}

const lsClear = () => {
	localStorage.clear()
	lsRender()
}

window.onstorage = lsRender

document.querySelector('#ls-add').addEventListener('click', lsAdd)
document.querySelector('#ls-remove').addEventListener('click', lsRemove)
document.querySelector('#ls-change').addEventListener('click', lsAdd)
document.querySelector('#ls-clear').addEventListener('click', lsClear)
