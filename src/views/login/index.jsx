import React from 'react'
import './index.scss'
import { Form, Input, Button, Checkbox } from 'antd'
import { setUserInfoAction } from '@/store/user/action'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const mapDispatchToProps = (dispatch) => ({
	setUserInfo: (info) => dispatch(setUserInfoAction(info))
})

function login({ setUserInfo }) {
	const navigate = useNavigate()
	console.log(navigate)
	
	const onFinish = (values) => {
		setUserInfo(values)
		navigate('/')
	}

	return (
		<div className="login-container">
			<Form
				name="normal_login"
				className="login-form"
				layout="vertical"
				initialValues={{ remember: true }}
				onFinish={ onFinish }
			>
				<Form.Item>
					<img src="src/assets/icons/svg/logo.svg" style={{ width: '50px' }} />
					<h1 className="login-title">React Antd Template</h1>
					<span className="login-subTitle">欢迎！</span>
				</Form.Item>
				
				<Form.Item
					name="username"
					label="用户名："
					rules={[{ required: true, message: '请输入用户名' }]}
				>
					<Input />
				</Form.Item>
				
				<Form.Item
					name="password"
					label="密码："
					rules={[{ required: true, message: '请输入密码' }]}
				>
					<Input type="password" />
				</Form.Item>
				
				<Form.Item>
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>记住密码</Checkbox>
					</Form.Item>
				</Form.Item>
	
				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
						登录
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default connect(null, mapDispatchToProps)(login)