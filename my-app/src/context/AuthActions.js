const LoginStart = (userCredentials) =>({
  type: "LOGIN_START"
})

const LoginSuccess = (user) =>({
  type: "LOGIN_SUCCESS",
  payload: user
})

const LoginFailure = (error) =>({
  type: "LOGIN_FAILURE",
  payload: error
})

export const Follow = (userId) => ({
  type: "FOLLOW",
  payload: userId,
})

export const Unfollow = (userId) => ({
  type: "UNFOLLOW",
  payload: userId,
})