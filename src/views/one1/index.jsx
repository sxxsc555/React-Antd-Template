import React, { useState } from 'react'
import './index.scss'

function one1() {
	const [text, setText] = useState('')
	const newHours = new Date().getHours()
	if (newHours > 5 && newHours < 12) {
		setText('上午好，打工人，来杯咖啡吧')
	} else if (newHours === 12) {
		setText('中午好，打工人，干饭时间到')
	} else if (newHours > 12 && newHours < 18) {
		setText('下午好，打工人，休息一下吧')
	} else if (newHours > 17) {
		setText('晚上好，打工人，游戏时间到')
	} else {
		setText('凌晨好，注意休息，别当夜猫哦')
	}

	return (
		<div className="one1-container">
			<div className="article-content">

				<div className="content-left">
					<div className="title-text"></div>
					<div className="content-text">前端攻城狮 | 阿里某SmallBaby - 某某某事业 - VUE平台</div>
				</div>

				<div className="statistic-box">
					<div className="state-item">
					</div>
				</div>
				
			</div >
		</div >
	)
}

export default one1