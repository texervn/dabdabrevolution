// var elems = {
// 	tl: [ document.getElementById('btn-tl'), document.getElementById('tl') ],
// 	tr: [ document.getElementById('btn-tr'), document.getElementById('tr') ],
// 	bl: [ document.getElementById('btn-bl'), document.getElementById('bl') ],
// 	br: [ document.getElementById('btn-br'), document.getElementById('br') ],
// 	tick: [ document.getElementById('btn-tick'), document.getElementById('tick') ],
// 	cross: [ document.getElementById('btn-cross'), document.getElementById('cross') ]
// };

// document.getElementById('btn-cl').addEventListener('click', rmvall)

// Object.values(elems).map((elem) => {
// 	elem[0].addEventListener('click', () => {
// 		Object.values(elems).map((elem) => {
// 			elem[1].classList.remove('visible');
// 		});
// 		elem[1].classList.add('visible');
// 	});
// });

// function rmvall() {
// 	Object.values(elems).map((elem) => {
// 		elem[1].classList.remove('visible');
// 	});
// };

const addAndRemove = (selector) => {
	document.getElementById(selector).classList.add('visible');
	document.querySelectorAll(`.arrow:not(#${selector})`).map((e) => {
		e.classList.remove('visible');
	});
};

const getMove = () => {
	$.get('/result', (data) => {
		switch(data) {
			case 'tr':
				addAndRemove('tr');
				break;
			case 'tl':
				addAndRemove('tl')
				break;
			case 'br':
				addAndRemove('br')
				break;
			case 'bl':
				addAndRemove('bl')
				break;
			case 'tick':
				addAndRemove('tick')
				break;
			case 'cross':
				addAndRemove('cross')
				break;
			case 'clear':
				document.querySelectorAll('.arrow').map((e) => { e.classList.remove('visible'); });
				break;
		}
	});
};

(() => {
	setInterval(getMove, 100);
})();