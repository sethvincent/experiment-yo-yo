var yo = require('yo-yo')

var count = 0

var element = yo`
  <p>count: ${count}</p>
`

setInterval(function () {
  count++
  var newElement = yo`
    <p>count: ${count}</p>
  `
  yo.update(element, newElement)
}, 1000)

document.body.appendChild(element)
