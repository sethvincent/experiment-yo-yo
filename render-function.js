var yo = require('yo-yo')

var count = 0

function render () {
  return yo`
    <div id="app">
      <p>count: ${count}</p>
      <button onclick=${onclick}>increase count</button>
    </div>
  `
}

var app = render()

function onclick () {
  count++
  var update = render()
  yo.update(app, update)
}

document.body.appendChild(app)
