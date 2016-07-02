var yo = require('yo-yo')

var count = 0

var element = yo`
  <p>count: ${count}</p>
`

var input = yo`
  <button onclick=${onclick}>increase count</button>
`

function onclick () {
  count++
  var newElement = yo`
    <p>count: ${count}</p>
  `
  yo.update(element, newElement)
}

document.body.appendChild(element)
document.body.appendChild(input)
