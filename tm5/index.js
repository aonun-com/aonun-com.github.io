window.onload = function (e) {
	vue = new Vue({
		el: '#app',
		data: {
			userType: '',
			email: '',
			password: '',
			numOnline: 1,
			users:[],
		},
		methods: {
			login,
		}
	})

	connect = connect.bind(null,vue)
	s = connect()
}
let vue;
let s;
let connect = function (vue) {
	let s, opt;
	opt = {
		autoConnect: true,
		reconnection: false,
		transports: ['websocket'],
		forceNew: false,
		timeout: 5000,
		rememberUpgrade: true,
		// query: { token: '' },
	};
	s = io(`/`, opt);
	s.on('connect', function(){
		document.querySelector('#app').removeAttribute('style')
		// vue.userType = ''
		// console.log('connect')
	});
	s.on('disconnect', function () {
		vue.userType = 'guest'
	});
	s.on('message', function (...m) {
		console.log(...m);
	});
	s.on('vue',function(o){
		if(typeof o==='object' && o===null) return ;
		for(let k in o){
			let v = o[k]
			console.log(k,v,vue)
			vue[k] = v
		}
	})
	return s;
}






function login(){
	let e, v, s, opt;
	e = event
	v = this
}

!async function () {
	
}()




{
	let tips = $('#statusDict tr').toArray().map(e => [$(e).find('.source').text(), $(e).find('.target').text()])
	tips.sort((a,b)=>{
		let al, bl;
		al = a[0].length
		bl = b[0].length
		if(al>bl){
			return -1
		}else if(al<bl){
			return 1
		}else{
			return a[0]>b[0] ? -1 : (a[0]<b[0] ? 1 : 0)
		}
	})

	function encode(s, tips){
		tips.forEach(function(e,i){
			while(s.indexOf(e)>-1){
				s = s.replace(e,`[${i}]`)
			}
		})
		return s;
	}
	let s = '고급 해적 모집 속도'

	console.log(encode(s, tips));
	

}