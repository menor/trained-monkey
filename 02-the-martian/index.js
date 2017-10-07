// Horizontal
var r = new Rune({
  container: '#canvas',
  width: 800,
  height: 250,
  debug: true
})
r.circle(-500, 400, 800)
  .fill(255, 255, 255)

r.circle(770, 30, 10)
  .fill(255, 255, 255)

// Vertical
// var r = new Rune({
//   container: '#canvas',
//   width: 300,
//   height: 600,
//   debug: true
// })
//
// r.circle(50, 850, 500)
//   .fill(255, 255, 255)
//
// r.circle(270, 30, 10)
//   .fill(255, 255, 255)


r.draw()
