const cmdContainer = document.getElementById("cmd-container")
const output = document.getElementById("output")
const input = document.getElementById("input")

const commandBuffer = new CommandBuffer()

input.focus()
window.addEventListener("click", () => {
  input.focus()
})

const commandController = new CommandController(output)

const handleCommand = (cmd) => {
  if (!cmd) return
  switch (cmd.toLowerCase()) {
    case "help":
      commandController.help()
      break
    case "about":
      commandController.about()
      break
    case "skills":
      commandController.skills()
      break
    case "projects":
      commandController.projects()
      break
    case "socials":
      commandController.socials()
      break
    case "cls":
      commandController.cls()
      commandBuffer.reset()
      break
    default:
      commandController.notFound()
  }
}

const handleKeydown = (e) => {
  switch (e.key) {
    case "Enter":
      appendCloneCmdContainer(e.target.value)
      handleCommand(e.target.value)
      if (e.target.value !== "cls") commandBuffer.addCommand(e.target.value)
      clearInput()
      gotoInput()
      break
    case "ArrowUp":
      e.preventDefault()
      if (commandBuffer.depth > 0) commandBuffer.depth--
      commandBuffer.getCommand(commandBuffer.depth, input)
      break
    case "ArrowDown":
      e.preventDefault()
      if (commandBuffer.depth < commandBuffer.buffer.length - 1) commandBuffer.depth++
      commandBuffer.getCommand(commandBuffer.depth, input)
      break
  }
}
input.addEventListener("keydown", handleKeydown)

const appendCloneCmdContainer = (cmd) => {
  const path = cmdContainer.firstElementChild.cloneNode(true)
  const clone = document.createElement("div")
  clone.classList.add("cmd-fake-container")
  clone.appendChild(path)
  if (cmd) {
    const fakeInput = document.createElement("span")
    fakeInput.textContent = cmdContainer.lastElementChild.value
    fakeInput.classList.add("fakeInput")
    clone.appendChild(fakeInput)
  }
  output.append(clone)
}

const gotoInput = () => {
  input.scrollIntoView({ behavior: "smooth" })
}

const clearInput = () => {
  input.value = ""
}
