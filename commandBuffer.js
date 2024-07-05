class CommandBuffer {
  depth = -1
  buffer = []
  addCommand = (cmd) => {
    if (!cmd) return
    if (this.buffer.length > 0 && this.buffer.at(-1) === cmd) {
      this.depth = this.buffer.length
      return
    }
    this.buffer.push(cmd)
    this.depth = this.buffer.length
  }
  getCommand = (depth, element) => {
    if (depth === this.buffer.length) {
      element.value = ""
    } else {
      element.value = this.buffer[depth] ? this.buffer[depth] : this.buffer.length !== 0 ? this.buffer[0] : ""
    }
  }
  reset = () => {
    this.buffer = []
    this.depth = -1
  }
}
