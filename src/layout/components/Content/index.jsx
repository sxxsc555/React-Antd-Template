import React from 'react'
import './index.scss'
import { Outlet } from "react-router-dom"

function Content() {
	return(
		<div className="Content-container">
			<Outlet />
		</div>
	)
}

export default Content