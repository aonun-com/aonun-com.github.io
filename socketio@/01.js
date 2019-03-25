const { log, group, groupEnd } = console

let editor = CodeMirror.fromTextArea(document.getElementById('code'), { lineNumbers: true, mode: 'javascript', keyMap: 'sublime', autofocus:true })
editor.setOption('extraKeys', {
	'Ctrl-Enter': function (cm) {
		let code = editor.getValue()
		s.emit('cmd', code, (res) => {
			group(code.replace(/\r\n|\n/g, '↵'))
			log(res)
			groupEnd()
		})
	}
})

window.addEventListener('beforeunload', () => localStorage.setItem('editor', editor.getValue()))
editor.setValue(localStorage.getItem('editor'))

cssd.set('body', {background:'#333'})
// cssd.set('*', {'font-family':'D2Coding,consolas'})



let port, path, url, sid, opts, s, socket, autoConnect;
// url = `${location.protocol}//${location.hostname}:${port}`;

opt = {
	transports: ['websocket'],
	reconnection: true,
	query: {
		name: 'ddb',
	}
};

s = io('/admin', opt);
console.log(opt);

s.on('message', (...data) => {
	log('message', ...data)
})

// s.on('pingtest', (ack) => { ack() })





// // css
// function rules() {
// 	let result = {}
// 	let s = []
// 	for (let e of document.styleSheets) {
// 		/* 【CSSStyleSheet】
// 		addRule
// 		deleteRule
// 		removeRule
// 		disabled = false
// 		insertRule
// 		href
// 		media
// 		cssRules
// 		rules
// 		*/
// 		for (let rule of e.rules) {
// 			/* 【CSSStyleRule】
// 			cssText                  css字符串
// 			selectorText
// 			parentRule
// 			parentStyleSheet
// 			style
// 			styleMap
// 			type
// 			*/
// 			s.push(rule)
// 		}
// 	}

// 	function check(rule, find, equal = true) {
// 		let { cssText, selectorText, style, styleMap } = rule
// 		if (find) {
// 			if (selectorText) {
// 				let type = typeof find, b
// 				if (type === 'string') {
// 					b = selectorText.split(/ |,/).some(e => e === find)
// 				} else if (type === 'function') {
// 					b = find(selectorText)
// 				}
// 				b = equal ? b : !b
// 				return b
// 			} else {
// 				return false
// 			}
// 		} else {
// 			return true
// 		}
// 	}

// 	function is(find) {
// 		result.s = result.s.filter(e => check(e, find, true))
// 		return result
// 	}

// 	function not(find) {
// 		result.s = result.s.filter(e => check(e, find, false))
// 		return result
// 	}

// 	function set(k, v) {
// 		document.body.appendChild(rules.element)
// 		let sheet = document.styleSheets.item(document.styleSheets.length - 1)

// 		let s = result.s.filter(e => e.styleMap.has(k))
// 		if (s.length) {
// 			s.forEach(rule => rule.styleMap.set(k, v))
// 		} else {

// 		}

// 	}

// 	result.s = s
// 	result.is = is
// 	result.not = not
// 	result.set = set

// 	return result
// }
// {
// 	Object.defineProperty(rules, 'id', {
// 		value: Date.now().toString(36) + Math.random().toString(36).slice(2),
// 		enumerable: true,
// 	})
// 	let value = document.getElementById(rules.id)
// 	if (value === null) value = document.createElement('style')
// 	value.setAttribute('title', rules.id)
// 	Object.defineProperty(rules, 'element', {
// 		value,
// 		enumerable: true,
// 	})
// }






// for(let e of CUSTOMIZE_SHEET.rules[0].style) log(e)
// log(CUSTOMIZE_SHEET.rules[0].styleMap.size)


// function objectToArray(o) {
// 	// {k:v, ...}   ==>   [[k,v],...]
// 	let result = []
// 	for (let e of Object.entries(o)) {
// 		result.push(e)
// 	}
// 	return result
// }
// function arrayToObject(a) {
// 	// [[k,v],...]   ==>   {k:v, ...}
// 	return a.reduce((r, [k, v]) => r[k] = v, {})
// }
// function mapToObject(m) {
// 	return arrayToObject(Array.from(m))
// }


setTimeout(()=>{
	let s = document.head.appendChild(document.createElement('style'))
	s.innerText = 'body {color: blue}'

	cssd.merge()
	log(cssd.get('body').color)
	log(cssd.all.body.color)
}, 1000)

