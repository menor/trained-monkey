var r = new Rune({
  container: '#canvas',
  width: 800,
  height: 800,
  debug: true
})

r.circle(360, 210, 80)
  .fill(0,0,0)

r.triangle(280, 232, 440, 232, 360, 460)
  .fill(0,0,0)

r.rect(278, 230, 1164, 4)
  .fill(255,255,255)
  .stroke(false)

r.draw();
