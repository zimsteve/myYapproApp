module.exports = (state, action) => {
  const newState = require('clone')(state)
  const {type, payload} = action
  switch (type) {
    case 'INIT':
      return newState
    case 'STORE_MESSAGE':
      newState.messages.push(payload)
      return newState
    default:
      return newState
  }
}
