const lsKey = document.querySelector('#key')
const lsValue = document.querySelector('#value')
const lsList = document.querySelector('.localstorage__elements')

const lsRender = () => {
	let keys = Object.keys(localStorage)
	lsList.innerHTML = ''
	for (let key of keys) {
		lsList.innerHTML += `<li>${key}: ${localStorage.getItem(key)}</li>`
	}
}

const lsAdd = () => {
	localStorage.setItem(lsKey.value, lsValue.value)
	lsRender()
	lsKey.value = ''
	lsValue.value = ''
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
