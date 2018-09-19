const assets = {
	logoGif: 'https://media.giphy.com/media/sPuDbEFCsoN32/giphy.gif',
	blogGif: 'https://media.giphy.com/media/3wDD0Khwova4o/giphy.gif',
	tempGif: 'https://media.giphy.com/media/9EWRVH2H98z6g/giphy.gif',
	avatar: 'https://s.gravatar.com/avatar/fa1e8161f961b4abd7cc7f61aa486021?s=120',
	flyIcon: 'img/whilefly_icon.png',
	catsIcon: 'img/helptofindcats_icon.png',
	pongIcon: 'img/basicpong_icon.png',
	ucGif: 'img/under_construction.gif'
}

function showGif (id, gif = null) {
	let img = document.getElementById(id)
	img.setAttribute('src', gif != null ? gif : assets[id])
	img.style.display = 'block'
}

function hideGif (id) {
	document.getElementById(id).style.display = 'none'
}

const checkImage = path =>
    new Promise(resolve => {
        let img = new Image()
        img.onload = () => resolve({ path, status: 'ok' })
        img.onerror = () => resolve({ path, status: 'error' })
        img.src = path
	})

const loadImgs = (...paths) => Promise.all(paths.map(checkImage))

function init () {
	loadImgs(...Object.values(assets)).then(() => {
		const ctrl = new ScrollMagic.Controller()
		const tl = new TimelineMax()

		tl.fromTo(
			'section.panel.games',
			1.5,
			{ y: '100%' },
			{ x: '0%', y: '0%', ease: Linear.easeNone }
		)
		tl.fromTo(
			'section.panel.about',
			1.5,
			{ y: '100%' },
			{ x: '0%', y: '0%', ease: Linear.easeNone }
		)

		const scene = new ScrollMagic.Scene({
			triggerElement: '.pinContainer',
			triggerHook: 'onLeave',
			duration: '600%'
		})
			.setPin('.pinContainer')
			.setTween(tl)
			.addTo(ctrl)

		document.getElementById('loading').style.display = 'none'
	})
}

document.addEventListener('DOMContentLoaded', init)
