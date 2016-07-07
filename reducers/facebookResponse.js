const facebookResponse = (state = {}, action) => {
  switch (action.type) {
    case 'GET_FACEBOOK_RESPONSE':
      return action.response
    default:
      return state
  }
}

export default facebookResponse
