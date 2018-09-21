var term = [
["脸书","Facebook"],
["世界频道","極限頻道"],
["东印司","EIC"],
["个人战","個人賽"],
["个人资料","個人資訊"],
["争夺","強奪"],
["争夺房地产","搶奪不動產"],
["于","於"],
["休假计划","渡假計劃"],
["信息","情報"],
["修改","修复"],
["充值","儲值"],
["共享","分享"],
["几率","機率"],
["出售","販賣"],
["列表","清單"],
["创建","創建"],
["利卡","莉卡"],
["制作","製作"],
["制造","製造"],
["剩余","剩餘"],
["占领","佔領"],
["卷轴","捲軸"],
["反复","反復"],
["发布","發佈"],
["合并服务器","整合伺服器"],
["合服","整合伺服器"],
["合并","合併"],
["周","週"],
["咨询","詢問"],
["图标","圖示"],
["城市","都市"],
["城市侠盗","都市俠盜"],
["市区一日游","城市旅遊"],
["布置","佈置"],
["开始事件调查","開始調查事件"],
["开始炮击","開始砲擊"],
["心脏","心臟"],
["愿者上钩","大魚上鉤"],
["投注","投註"],
["拽过来","拉過來"],
["挑战点数","擊殺點數"],
["挑战！强打！","挑戰!強打!"],
["搜索","搜尋"],
["旅行去","去旅遊"],
["昵称","暱称"],
["服务器","伺服器"],
["橡皮筋","橡膠橡膠"],
["龙卷风","龍捲風"],
["每月限量礼包","每月限定礼包"],
["比赛道具","初始道具"],
["炮击","砲擊"],
["界面","介面"],
["登录","登入"],
["社区","社團"],
["等级","階段"],
["精选","精彩"],
["绿化带","綠化地區"],
["网络","網路"],
["袭击","突擊"],
["论坛","粉絲團"],
["设置","設置"],
["调头","迴轉"],
["豆腐渣工程","偷工建築"],
["账号","帳號"],
["贵宾","VIP"],
["起点","出發地"],
["超级建造","草雞建造"],
["超级擂台","草雞擂台"],
["通过","透過"],
["邮件","信件"],
["邮箱","郵箱"],
["采集","採集"],
["里","裡"],
["链接","連結"],
["雇用","僱用"],
["验证","認證"],
["默认","預設"],
["面包喵","麵包喵"],
['准备','準備'],
['拉面','拉麺']
];


function jian2(str) {
	var row, re=new RegExp
	for(var i in term) {
		row=term[i]
		re.compile(row[1],'g')
		str = str.replace(re,row[0])
	}
	return str
}

function fan2(str) {
	var row,re=new RegExp
	for(var i in term) {
		row=term[i]
		re.compile(row[0],'g')
		str = str.replace(re,row[1])
	}
	return str
}

