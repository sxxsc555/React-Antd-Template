import React, { useState } from 'react'
import { Menu } from 'antd'
import './index.scss'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'

function Sidebar() {
	return (
		<div className="Sidebar-container">
			<div className="logo">
				<img src="src/assets/icons/svg/logo.svg" style={{ width: '30px' }} />
				<span v-show="!collapsed">React-Antd-Template</span>
			</div>
			
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
				<Menu.Item key="1" icon={<UserOutlined />}>
					nav 1
				</Menu.Item>
				<Menu.Item key="2" icon={<VideoCameraOutlined />}>
					nav 2
				</Menu.Item>
				<Menu.Item key="3" icon={<UploadOutlined />}>
					nav 3
				</Menu.Item>
			</Menu>
		</div>
	)
}

export default Sidebar