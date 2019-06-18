function stringifyKeyboardEvent(event) {
	let { ctrlKey, altKey, shiftKey, metaKey, key } = event
	let k = key.toLowerCase()
	let o = {
		'~': '`',
		'!': '1',
		'@': '2',
		'#': '3',
		'$': '4',
		'%': '5',
		'^': '6',
		'&': '7',
		'*': '8',
		'(': '9',
		')': '0',
		'_': '-',
		'+': '+',
		'{': '[',
		'}': ']',
		'|': '\\',
		':': ';',
		'"': '\'',
		'<': ',',
		'>': '.',
		'?': '/',
		'arrowleft': 'left',
		'arrowup': 'up',
		'arrowright': 'right',
		'arrowdown': 'down',
	}
	let ret = []
	if (metaKey) ret.push('meta')
	if (ctrlKey) ret.push('ctrl')
	if (shiftKey) ret.push('shift')
	if (altKey) ret.push('alt')
	if (k !== 'control' && k !== 'shift' && k !== 'alt' && k !== 'meta') {
		ret.push(o[k] || k)
	}
	// let shortcut = ret.join('+')
	// let j = '"' + shortcut + '"'
	// let f = function () { return shortcut }
	// return { ctrlKey, altKey, shiftKey, metaKey, code, key, repeat, event, toString: f, inspect: f, toJSON() { return j } }
	return ret.join('+')
}