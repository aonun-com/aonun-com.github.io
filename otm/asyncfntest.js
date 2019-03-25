let { log } = console




// async function asyncFn() {
// 	log('start')
// 	let v
// 	v = await new Promise((y, n) => {
// 		setTimeout(() => {
// 			y('结果A')
// 		}, 1000)
// 	})

// 	console.log(1, v)
// 	console.log(2, v)


// 	let v2 = await new Promise((y, n) => {
// 		setTimeout(() => {
// 			y('结果B')
// 		}, 500)
// 	})
// 	log(3, v2)
// 	log('end')

// 	return { v, v2 }
// }



// // asyncFn().then(v=>log(v))



async function afn(...fs) {
	let s = fs.filter(f => typeof f === 'function')
	let f, v, m;
	while (f = s.shift()) {
		v = await new Promise((yes, no) => {
			m = { yes, no }
			Reflect.apply(f, m, [v])
		})
	}
	return v
}

async function afn2(...fs) {
	let s = afn2.s;
	s.push(...fs.filter(f => typeof f === 'function'))
	if (afn2.b) {
		return Promise.resolve(true);
	}
	afn2.b = true
	let f, v, m;
	while (f = s.shift()) {
		v = await new Promise((yes, no) => {
			m = { yes, no }
			Reflect.apply(f, m, [v])
		})
	}
	afn2.b = false
	return v
}
afn2.b = false
Object.defineProperty(afn2, 's', { value: [], enumerable: true })

// // test
// {
// 	console.time('afn')

// 	afn(
// 		function () {
// 			log('start 1')
// 			setTimeout(() => {
// 				this.yes(1)
// 			}, 1000)
// 		},
// 		function (v) {
// 			log('start 2')
// 			setTimeout(() => {
// 				log(v)
// 				this.yes(2)
// 			}, 1000)
// 		},
// 		function (v) {
// 			log('start 3')
// 			setTimeout(() => {
// 				log(v)
// 				this.no(3)
// 				console.timeEnd('afn')
// 			}, 1000)
// 		}).then(v => log(v)).catch(e => log('Error', e))


// }


// test
{
	console.time('afn')

	afn2(
		function () {
			log('start 1')
			setTimeout(() => {
				this.yes(1)
			}, 1000)
		},
		function (v) {
			log('start 2')
			setTimeout(() => {
				log(v)
				this.yes(2)
			}, 1000)
		},
		function (v) {
			log('start 3')
			setTimeout(() => {
				log(v)
				// this.no(3)
				this.yes(3)
				
			}, 1000)
		}).then(v => log('ending1', v)).catch(e => log('Error', e))

	setTimeout(() => {
		afn2(
			function (v){
				log('start 4')
				setTimeout(()=>{
					this.yes(4)
				},1000)
			},
			function (v){
				log('start 5')
				setTimeout(()=>{
					this.yes(5)
					console.timeEnd('afn')
				},1000)
			},
		).then(v=>log('ending2',v))
	}, 2000)
}