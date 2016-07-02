var Chart = require('chart.js')
var yo = require('yo-yo')

var count = 0
var canvas = yo`
  <canvas id="chart" width="400" height="400" onload=${onload}></canvas>
`

function onload (element) {
  var lineChart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['count', 'count * 2', 'count * 3'],
        datasets: [{
          label: 'count',
          data: [count, count * 2, count * 3]
        }]
      }
  })
}

function render () {
  return yo`
    <div id="app">
      <p>count: ${count}</p>
      <button onclick=${onclick}>increase count</button>
      ${canvas}
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
