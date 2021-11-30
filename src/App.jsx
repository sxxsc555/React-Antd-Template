import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import '@/styles/index.scss'
import '@/styles/antd-ui.scss'
import Login from '@/views/login' 


function App() {
  return (
    <Provider store={ store }>
		  <Login />
    </Provider>
  )
}

export default App
