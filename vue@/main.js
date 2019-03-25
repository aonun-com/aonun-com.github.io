//input tab key
$(document).delegate('textaera,input[type="text"]', 'keydown', function (e) {
	var keyCode = e.keyCode || e.which;
	if (keyCode == 9) {
		e.preventDefault();
		var start = this.selectionStart;
		var end = this.selectionEnd;
		// set textarea value to: text before caret + tab + text after caret
		$(this).val($(this).val().substring(0, start)
			+ "\t"
			+ $(this).val().substring(end));
		// put caret at right position again
		this.selectionStart = this.selectionEnd = start + 1;
	}
});


let node = {
	id(id) {
		return document.getElementById(id)
	},
	name(name) {
		return document.getElementsByName(name)
	},
	tag(name) {
		return document.getElementsByTagName(name)
	},
	q(query) {
		return document.querySelector(query)
	},
	qs(query) {
		return document.querySelectorAll(query)
	}
}



{
	console.time('a');


	let n = /[0-9]/;
	let en = /[a-zA-Z]/;
	let cn = /[\u4e00-\u9fa5]/
	let ko = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;// /[ㄱ-ㅎㅏ-ㅣ가-힣]/
	let jp = /[\u3040-\u30ff\u31f0-\u31ff]/;

	let checkList = { n, en, cn, ko, jp };

	let r = { n: 0, en: 0, cn: 0, ko: 0, jp: 0, other: 0 }
	for (let i = 0, h = str.value.length; i < h; i++) {
		let c = str[i]
		if (n.test(c)) {
			r.n++
		} else if (en.test(c)) {
			r.en++
		} else if (cn.test(c)) {
			r.cn++
		} else if (ko.test(c)) {
			r.ko++
		} else if (jp.test(c)) {
			r.jp++
		} else {
			r.other++
		}

	}
	console.timeEnd('a');
	console.log(r)
}