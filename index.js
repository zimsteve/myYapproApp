const { createStore } = require('redux')
const { update } = require('yo-yo')
const reducer = require('./reducer')

const CreateApp = require('./components/app')

const initialState = {
  messages: []
}

const { dispatch, getState, subscribe } = createStore(reducer, initialState)

const main = document.querySelector('main')
const initView = document.createElement('div')
main.appendChild(initView)

const App = CreateApp(dispatch)

subscribe(() => {
  const view = App(getState())
  update(initView, view)
})

dispatch({type: 'INIT'})
