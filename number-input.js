var yo = require('yo-yo')

var number = 0

function oninput (e) {
  number = e.target.value
  var update = render()
  yo.update(app, update)
}

function render () {
  return yo`
    <div id="app">
      <p>${number}</p>
      <input type="number" value="${number}" oninput=${oninput}>
    </div>
  `
}

var app = render()

document.body.appendChild(app)
