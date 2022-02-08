import React, { useState, useEffect } from 'react'
import { Statistic, Card, Skeleton, Avatar } from 'antd'
import { LikeOutlined } from '@ant-design/icons'
import './index.scss'

const gridData = [
	{
		title: 'Vue.js',
		src: 'https://cn.vuejs.org/images/logo.png',
		description: 'Vue是一套用于构建用户界面的JavaScript渐进式框架',
		author: '科学搬砖组',
		dataTime: '6小时前'
	},
	{
		title: 'React.js',
		src: 'https://www.runoob.com/wp-content/uploads/2016/02/react.png',
		description: 'React 是一个用于构建用户界面的JavaScript库',
		author: '最强打工人',
		dataTime: '8小时前'
	},
	{
		title: 'TypeScript',
		src: 'https://www.runoob.com/wp-content/uploads/2019/01/typescript-logo.jpg',
		description: 'TypeScript 是 JavaScript 的一个超集',
		author: 'CV高级工程师',
		dataTime: '12小时前'
	},
	{
		title: 'Node.js',
		src: 'https://www.runoob.com/wp-content/uploads/2014/03/nodejs.jpg',
		description: 'Node.js 就是运行在服务端的 JavaScript',
		author: '科学搬砖组',
		dataTime: '6小时前'
	},
	{
		title: 'Webpack',
		src: 'https://www.runoob.com/wp-content/uploads/2017/01/what-is-webpack.png',
		description: 'Webpack 是一个前端资源加载/打包工具',
		author: '最强打工人',
		dataTime: '8小时前'
	},
	{
		title: 'Ant Design',
		src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
		description: '基于 Ant Design 设计体系的 React UI 组件库',
		author: 'CV高级工程师',
		dataTime: '12小时前'
	}
]

function home() {
	const [text, setText] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
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
	}, [])

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	})

	return (
		<div className="home-container">
			<div className="article-content">
				<div className="content-left">
					<div className="title-text">{text}</div>
					<div className="content-text">前端攻城狮 | 阿里某SmallBaby - 某某某事业 - VUE平台</div>
				</div>

				<div className="statistic-box">
					<div className="state-item">
						<Statistic
							title="点赞数"
							value={666}
							prefix={<LikeOutlined />}
							style={{ marginRight: '40px' }}
						/>
					</div>

					<Statistic
						title="比例"
						value={80}
						suffix="/ 100"
					/>
				</div>
			</div >

			<Card title="进行中的项目" style={{ width: '100%', marginTop: 20 }}>
				{
					gridData.map((item, index) => (
						<Card.Grid key={index}>
							<Skeleton loading={loading} avatar active>
								<Card.Meta
									avatar={<Avatar src={item.src} />}
									title={item.title}
									description={item.description}
								/>
								<div className="grid-footer">
									<div className="footer-item">{item.author}</div>
									<div className="data-time">{item.dataTime}</div>
								</div>
							</Skeleton>
						</Card.Grid>
					))
				}
			</Card>
		</div >
	)
}

export default home