import React from 'react'
import './index.scss'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteUser } from '@/store/user/action'

const mapDispatchToProps = (dispatch) => ({
	delUserInfo: () => dispatch(deleteUser())
})

function Header({ delUserInfo }) {
	const navigate = useNavigate()
	
	function btnClick() {
		delUserInfo()
		navigate('/login')
	}

	return(
		<div className="Header-container">
			<Button type="link" onClick={btnClick}>退出</Button>
		</div>
	)
}

export default connect(null, mapDispatchToProps)(Header)