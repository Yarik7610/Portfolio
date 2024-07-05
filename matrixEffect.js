const app = document.getElementById("app")
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let letters =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
letters = letters.split("")

const fontSize = 16
const columns = canvas.width / fontSize

const drops = []
for (let i = 0; i < columns; i++) {
  drops[i] = 1
}

ctx.font = "16px Roboto Mono, monospace"

const draw = () => {
  ctx.fillStyle = "rgba(0, 0, 0, .1)"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)]
    ctx.fillStyle = "#00ff2b"
    ctx.fillText(text, i * fontSize, drops[i] * fontSize)
    drops[i]++
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0
    }
  }
}

const id = setInterval(draw, 30)

setTimeout(() => {
  canvas.classList.add("fade-out")
  app.classList.add("fade-in")
  canvas.addEventListener("animationend", () => {
    canvas.remove()
    clearInterval(id)
  })
}, 3500)
