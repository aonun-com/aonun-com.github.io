// 禁用F5
window.addEventListener('keydown',function(e){
	if(e.keyCode===116) {
		e.preventDefault()
		// e.returnValue=false;
	}
})

