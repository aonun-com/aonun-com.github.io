let _term=`
利卡	莉卡
东印司	EIC
争夺	強奪
争夺房地产	搶奪不動產
于	於
休假计划	渡假計劃
信息	情報
利卡	莉卡
咨询	詢問
城市侠盗	都市俠盜
市区一日游	城市旅遊
开始事件调查	開始調查事件
开始炮击	開始砲擊
愿者上钩	大魚上鉤
拽过来	拉過來
挑战点数	擊殺點數
挑战！强打！	挑戰!強打!
旅行去	去旅遊
橡皮筋	橡膠橡膠
龙卷风	龍捲風
比赛道具	初始道具
等级	階段
精选	精彩
绿化带	綠化地區
设置	設置
调头	迴轉
豆腐渣工程	偷工建築
起点	出發地
超级建造	草雞建造
超级擂台	草雞擂台
里	裡
面包喵	麵包喵
`;

_term=_term.trim().split('\n').map(e=>e.split('\t'));
term=term.concat(_term);
term=term.filter(e=>Array.isArray(e)&&(typeof e[0]==='string'&&e[0].length>0)&&(typeof e[1]==='string'&&e[1].length>0));