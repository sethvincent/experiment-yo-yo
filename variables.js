var yo = require('yo-yo')

var message = 'oh cool'

var element = yo`
  <p>${message}</p>
`

document.body.appendChild(element)
