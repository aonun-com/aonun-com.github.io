function toUTC(dateStr) {
	let o = {
		$: new Date(dateStr),
		get Y() { return this.$.getUTCFullYear().toString().padStart(2, '0') },
		get m() { return (this.$.getUTCMonth() + 1).toString().padStart(2, '0') },
		get d() { return this.$.getUTCDate().toString().padStart(2, '0') },
		get H() { return this.$.getUTCHours().toString().padStart(2, '0') },
		get i() { return this.$.getUTCMinutes().toString().padStart(2, '0') },
		get s() { return this.$.getUTCSeconds().toString().padStart(2, '0') },
	}


	let { Y, m, d, H, i, s } = o
	return `${Y}.${m}.${d} ${H}:${i} UTC`
}


let ui = {
	get sourceElement() {
		return document.querySelector('#source')
	},
	get targetElement() {
		return document.querySelector('#target')
	},
	get source() {
		return document.querySelector('#source').value
	},

	set source(v) {
		return document.querySelector('#source').value = v
	},

	get target() {
		return document.querySelector('#target').value
	},

	set target(v) {
		return document.querySelector('#target').value = v
	},
}



ui.sourceElement.addEventListener('input', (e)=>{
	try{
		ui.target = toUTC(ui.source)
	}catch(err){
		ui.target = err.message
		console.error(err)
	}
})