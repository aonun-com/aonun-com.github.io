// 누적결제
let _term=`
￥5.88	$0.99
￥12	$1.99
￥17.64	$2.99
￥29.3	$4.99
￥52.89	$8.99
￥58.77	$9.99
￥117.54	$19.99
￥176.32	$29.99
￥293.86	$49.99
￥294	$49.99
￥588	$89.99
￥587.72	$99.99
￥587.72	$99.99
￥1,175.62	$199.99
￥1,763.52	$299.99
￥2,351.42	$399.99
￥5,880	$999.99
￥293.86	$49.99
￥176.32	$29.99
￥177	$24
￥1,763.52	$299.9
`;

/* 
// 배너
￥59	$8
￥118	$16
￥177	$24
￥236	$32
￥295	$40
￥353	$48
￥412	$56
￥471	$64
￥530	$72
￥589	$80
￥883	$120
￥1177	$160
￥2942	$400
￥5883	$800
￥7	$0.88
￥13	$1.76
￥20	$2.64
￥583	$79.2
￥1295	$176
￥1942	$264
￥648	$88
*/

_term=_term.trim().split('\n').map(e=>e.split('\t'));
term=term.concat(_term);
term=term.filter(e=>Array.isArray(e)&&(typeof e[0]==='string'&&e[0].length>0)&&(typeof e[1]==='string'&&e[1].length>0))