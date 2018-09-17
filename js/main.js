function showGif (id, gif) {
	let img = document.getElementById(id)
	img.setAttribute('src', gif)
	img.style.display = 'block'
}

function hideGif (id) {
	document.getElementById(id).style.display = 'none'
}

document.addEventListener('DOMContentLoaded', () => {

	new Twitch.Embed('twitch-embed', {
		width: 854,
		height: 480,
		theme: 'dark',
		'font-size': 'medium',
		channel: 'subztep',
		autoplay: false
	})


	const ctrl = new ScrollMagic.Controller()
	const tl = new TimelineMax()

	tl.fromTo('section.panel.games', 1.5, {y: '100%'}, {x: '0%', y: '0%', ease: Linear.easeNone})
	tl.fromTo('section.panel.about', 1.5, {y: '100%'}, {x: '0%', y: '0%', ease: Linear.easeNone})

	const scene = new ScrollMagic.Scene({
		triggerElement: '.pinContainer',
		triggerHook: 'onLeave',
		duration: '600%'
	})
		.setPin('.pinContainer')
		.setTween(tl)
		.addTo(ctrl)


	Array.prototype.map.call(document.getElementsByClassName('panel'), el => {
		el.classList.remove('noBg')
		el.firstChild.style.display = 'block'
	})
})
