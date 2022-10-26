// 기본 설정
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
// 화면 비율 구분(pc, 모바일)을 위해 생성한 변수
// 1보다 클 경우 2, 아닐 경우 1로 대입
const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1

// 배경과 메인 색상 지정
const bgColor = '#f1f1f1'
const mainColor = '#F94892'

const fps = 60
const interval = 1000 / fps
let now
let then = Date.now()
let delta

let box

// 초기 설정
function init() {
  // 캔버스의 크기 설정
  canvas.width = innerWidth * pixelRatio
  canvas.height = innerHeight * pixelRatio
  // ctx.scale(pixelRatio, pixelRatio)
  
  // 각 마우스 값
  window.mouse = {
    isDown: false,
    x: canvas.width / 2,
    y: canvas.height / 2,
    ox: canvas.width / 2,
    oy: canvas.height / 2,
    mx: canvas.width / 2,
    my: canvas.height / 2
  }
  console.log(window.devicePixelRatio, window.mouse)
  // 박스의 크기로 hypotenuse 함수에게 전달
  // 캔버스의 0.3 크기로 설정
  window.BOX_SIZE = hypotenuse(canvas.width, canvas.height) * 0.3

  // 박스 생성
  box = new Box(
    canvas.width / 2 - BOX_SIZE / 2,
    canvas.height / 2 - BOX_SIZE / 2,
    BOX_SIZE,
    BOX_SIZE
  )
}

function render() {
  requestAnimationFrame(render)

  now = Date.now()
  delta = now - then
  if (delta < interval) return

  // 캔버스 배경 색상 설정
  ctx.fillStyle = bgColor
  // 사각형의 캔버스를 원점으로부터 생성
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  box.animate()

  then = now - (delta % interval)
}

function onPointerDown(e) {
  if (!box.checkInsideBox(e.clientX * pixelRatio, e.clientY * pixelRatio)) return
  if (mouse.isDown) return
  mouse.isDown = true
  mouse.x = e.clientX * pixelRatio
  mouse.y = e.clientY * pixelRatio
  mouse.ox = e.clientX * pixelRatio
  mouse.oy = e.clientY * pixelRatio
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
}

function onPointerMove(e) {
  mouse.x = e.clientX * pixelRatio
  mouse.y = e.clientY * pixelRatio
  mouse.mx = canvas.width / 2 + mouse.x - mouse.ox
  mouse.my = canvas.height / 2 + mouse.y - mouse.oy
  if (distance(mouse.x, mouse.y, canvas.width / 2, canvas.height / 2) > BOX_SIZE * 1.3) {
    onPointerUp()
  }
}

function onPointerUp() {
  backAnimation()
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
}

function backAnimation() {
  gsap.to(mouse, {
    mx: canvas.width / 2,
    my: canvas.height / 2,
    duration: 0.4,
    ease: Elastic.easeOut.config(1, 0.1),
    onComplete: () => mouse.isDown = false
  })
}

window.addEventListener('pointerdown', onPointerDown)
window.addEventListener('resize', init)
window.addEventListener('DOMContentLoaded', () => {
  init()
  render()
})

// 그려지는 부분
class Box {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.corners = [
      // 각 네 부분
      [this.x, this.y],
      // 
      [this.x + this.width, this.y],
      [this.x + this.width, this.y + this.height],
      [this.x, this.y + this.height]
    ]
    this.points = []
    this.init()
    this.isBacking = false
    console.log(this.width)
  }

  divide(n, a, b) {
    // 3번 반복되는 for문
    for (let i = 0; i < n; i++) {
      // x축으로 
      const x = (b[0] - a[0]) * i / n + a[0]
      const y = (b[1] - a[1]) * i / n + a[1]
      this.points.push({ x, y })
    }
  }

  init() {
    // 각 네 방향으로 세 부분씩 나눠지도록 함
    this.divide(3, this.corners[0], this.corners[1])
    this.divide(3, this.corners[1], this.corners[2])
    this.divide(3, this.corners[2], this.corners[3])
    this.divide(3, this.corners[3], this.corners[0])
  }

  // 설정한 값을 대입해 그림
  draw() {
    ctx.beginPath()
    ctx.moveTo(this.points[0].x, this.points[0].y)
    for (let i = 0; i < this.points.length - 1; i++) {
      ctx.quadraticCurveTo(mouse.mx, mouse.my, this.points[i + 1].x, this.points[i + 1].y)
    }
    ctx.quadraticCurveTo(mouse.mx, mouse.my, this.points[0].x, this.points[0].y)
    ctx.strokeStyle = mainColor
    ctx.strokeWidth = 5
    ctx.stroke()
    ctx.fillStyle = mainColor
    ctx.fill()
    ctx.closePath()

    const GAP = BOX_SIZE * 0.09
    const x1 = (this.corners[0][0] + mouse.mx) / 2
    const x2 = x1 + GAP
    const x3 = x1 + this.width / 2 - GAP
    const x4 = x3 + GAP
    const y1 = (this.corners[0][1] + mouse.my) / 2
    const y2 = y1 + GAP
    const y3 = y1 + this.height / 2 - GAP
    const y4 = y3 + GAP
    ctx.beginPath()
    ctx.moveTo(x2, y1)
    ctx.lineTo(x3, y1)
    ctx.quadraticCurveTo(x4, y1, x4, y2)
    ctx.lineTo(x4, y3)
    ctx.quadraticCurveTo(x4, y4, x3, y4)
    ctx.lineTo(x2, y4)
    ctx.quadraticCurveTo(x1, y4, x1, y3)
    ctx.lineTo(x1, y2)
    ctx.quadraticCurveTo(x1, y1, x2, y1)
    ctx.closePath()
    ctx.stroke()
    ctx.fill()

    ctx.font = BOX_SIZE * 0.09 + "px Jua"
    ctx.fillStyle = bgColor
    ctx.textAlign = 'center'
    ctx.fillText(
      'Drag this',
      ((this.corners[0][0] + mouse.mx) / 2 + 2 + this.width / 4),
      ((this.corners[0][1] + mouse.my) / 2 + 2 + this.height / 4)
    )
  }

  checkInsideBox(clientX, clientY) {
    return (
      clientX > (this.corners[0][0] + this.width / 4) &&
      clientX < (this.corners[0][0] + this.width / 4) + (this.width / 2) &&
      clientY > (this.corners[0][1] + this.height / 4) &&
      clientY < (this.corners[0][1] + this.height / 4) + (this.height / 2)
    )
  }

  animate() {
    this.draw()
  }
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

function hypotenuse(width, height) {
  return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))
}