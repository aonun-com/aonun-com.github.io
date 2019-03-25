log = console.log
let ta = $('textarea')

ta.on('input', (e)=>{

	setTimeout(() => {
		let t = ta.val()
		let n = t.length
		let rows = t.split('\n')
		rows = Array.from(new Set(rows))
		t = rows.join('\n')
		log(n,'->',t.length)
		ta.val(t)
	});


})