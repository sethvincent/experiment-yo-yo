var yo = require('yo-yo')

var message = 'hi'

function oninput (e) {
  message = e.target.value
  var update = render()
  yo.update(app, update)
}

function render () {
  return yo`
    <div id="app">
      <p>${message}</p>
      <input type="text" oninput=${oninput} value="${message}">
    </div>
  `
}

var app = render()

document.body.appendChild(app)
