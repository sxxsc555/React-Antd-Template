import React from 'react'
import { Menu } from 'antd'
import './index.scss'
import {
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

function Sidebar(props) {
	const { collapsed } = props

	return (
		<div className="Sidebar-container">
			<div className="logo">
				<img src="src/assets/icons/svg/logo.svg" style={{ width: '30px' }} />
				<span style={{ display: !collapsed ? 'block' : 'none' }}>React-Antd-Template</span>
			</div>

			<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
				<Menu.Item key="1" icon={<UserOutlined />}>
					<Link to="/">home</Link>
				</Menu.Item>
				<Menu.Item key="2" icon={<VideoCameraOutlined />}>
					<Link to="/one">one</Link>
				</Menu.Item>
				<Menu.Item key="3" icon={<UploadOutlined />}>
					<Link to="/two">two</Link>
				</Menu.Item>
			</Menu>
		</div>
	)
}

export default Sidebar