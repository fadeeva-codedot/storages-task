const cookieKey = document.querySelector('#cookie-key')
const cookieValue = document.querySelector('#cookie-value')
const cookieList = document.querySelector('#cookie-elements')

let lastState = 0

const cookieRender = () => {
	cookieList.innerHTML = ''
	document.cookie.split(';').forEach((el) => {
		cookieList.innerHTML += `<li>${el}</li>`
	})

	cookieKey.value = ''
	cookieValue.value = ''
}

const cookieAdd = (options = {}) => {
	options = {
		path: '/',
		...options
	}

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString()
	}

	let updatedCookie =
		encodeURIComponent(cookieKey.value) +
		'=' +
		encodeURIComponent(cookieValue.value)

	for (let optionKey in options) {
		updatedCookie += '; ' + optionKey
		let optionValue = options[optionKey]
		if (optionValue !== true) {
			updatedCookie += '=' + optionValue
		}
	}

	document.cookie = updatedCookie
	cookieRender()
}

const cookieRemove = () => {
	cookieAdd({
		'max-age': -1
	})
}

const cookieClear = () => {
	document.cookie.split(';').forEach((el) => {
		const name =
			el.indexOf('=') > -1 ? el.substring(0, el.indexOf('=')) : el
		document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;'
	})

	cookieRender()
}

const cookieSync = () => {
	const t = document.cookie
	if (t != lastState) {
		lastState = t
		cookieRender()
	}
	window.setTimeout(cookieSync, 500)
}

cookieSync()

document.querySelector('#cookie-add').addEventListener('click', cookieAdd)
document.querySelector('#cookie-remove').addEventListener('click', cookieRemove)
document.querySelector('#cookie-change').addEventListener('click', cookieAdd)
document.querySelector('#cookie-clear').addEventListener('click', cookieClear)
