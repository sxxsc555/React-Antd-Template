import { setToken, getToken } from '@/utils/cookie'

const userState = getToken('token') || null

function reducer(state = userState, action) {
  const { type, info } = action

  switch (type) {
    case 'SET_USERINFO': {
      setToken('token', info.username)
      return info
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