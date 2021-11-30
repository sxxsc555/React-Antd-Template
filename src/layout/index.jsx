import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import './index.scss'
import { LSidebar, LHeader, LContent } from './components'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'

function layout() {
	const { Header, Sider, Content } = Layout;
	const [collapsed, setCollapsed] = useState(false)
	
  const toggle = () => setCollapsed(!collapsed)
	
	return (
		<div className="Layout-container">
			<Layout>
				<Sider 
					style={{'overflow-y': 'auto'}}
					trigger={null}
					collapsible
					collapsed={ collapsed }
				>
					<LSidebar />
				</Sider>
				
			  <Layout className="site-layout">
					<Header className="site-layout-header">
						{ React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
								className: 'trigger',
								onClick: toggle,
							})	
						}
						<LHeader />
					</Header>
					
					<Content className="site-layout-content" >
					  <LContent />
					</Content>
			  </Layout>
			</Layout>
		</div>
	)
}

export default layout