port.on('connect', (id) => console.log('我的连接', id))
port.on('close', (...m) => console.log('我的关闭', ...m))
port.on('message', (...m) => console.log('我的消息', ...m))
port.on('otherconnect', (id) => console.log('其他连接', id))
port.on('otherclose', (...m) => console.log('其他关闭', ...m))
port.on('broadcast', (id, ...m) => console.log('群发消息', id, ...m))
port.on('unique', () => location.replace('about:blank'))

window.addEventListener('beforeunload',(e)=>{
	port.emit('close')
})