import { setToken, getToken } from '@/utils/cookie'

const userState = {
  username: '',
  password: '',
  token: getToken('token') || ''
}

function reducer(state = userState, action) {
  const { type, info } = action

  switch (type) {
    case 'SET_USERINFO': {
      const { username, password, remember } = info
      remember && setToken('token', info.username)

      return {
        username,
        password,
        token: getToken('token') || ''
      }
    }
    case 'DELETE_USERINFO': {
      return null
    }
    default: {
      return state
    }
  }
}

export default reducer