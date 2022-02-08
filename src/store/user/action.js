const setUserInfoAction = (info) => ({
  type: 'SET_USERINFO',
  info
})
const deleteUser = () => ({
  type: 'DELETE_USERINFO'
})

export {
  setUserInfoAction,
  deleteUser
}