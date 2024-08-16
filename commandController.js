class CommandController {
  constructor(output) {
    this.output = output
  }
  helpData = [
    "<u>about</u>       Who am i?",
    "<u>skills</u>      My experience and tech stack",
    "<u>projects</u>    My best projects",
    "<u>socials</u>     I think it's obvious",
    "<u>cls</u>         Clear screen"
  ]
  aboutData = `My name is Yaroslav. I'm from Belarus. I want to be a frontend developer. 
    I'm also interested not only in this part, but have experience with backend, some neural networks, 
    games, executable programs. Also i know basic algorithms (linked lists, trees traversal, graphs, binary search, 
    sorting algorithms) and solved some tasks on LeetCode in prime time.`
  projectsData = [
    "Here is the list of the best projects, you can watch them in details via link. All of them are web apps:",
    "Colly - collections web-site                          <a target='_blank' href='https://github.com/Yarik7610/colly'>https://github.com/Yarik7610/colly</span>",
    "Messenger with real time message sending              Client: <a target='_blank' href='https://github.com/Yarik7610/messenger-client'>https://github.com/Yarik7610/messenger-client</span></a>, Server: <a target='_blank' href='https://github.com/Yarik7610/messenger-server'>https://github.com/Yarik7610/messenger-server</span></a>",
    "Todo - make your todolists, complete your tasks       Client: <a target='_blank' href='https://github.com/Yarik7610/todo-client'>https://github.com/Yarik7610/todo-client</span></a>, Server: <a target='_blank' href='https://github.com/Yarik7610/todo-server'>https://github.com/Yarik7610/todo-server</span>",
    "Interlinked - social network                          <a target='_blank' href='https://github.com/Yarik7610/interlinked'>https://github.com/Yarik7610/interlinked</span>",
    "React-pizza-v2 - pizza store                          <a target='_blank' href='https://github.com/Yarik7610/react-pizza-v2'>https://github.com/Yarik7610/react-pizza-v2</span>",
    "Other projects :)                                     <a target='_blank' href='https://github.com/Yarik7610?tab=repositories'>https://github.com/Yarik7610?tab=repositories</span>"
  ]
  skillsData = [
    "From my experience i can say that i like programming because of solving some problems that happen while doing usual tasks.",
    "I'm diligent, determined, follow through. So, when i solve the hard thing that have been interrupting me for hours, i feel very enthusiastically.",
    "First of all here is the list of technologies that i use in frontend part:",
    [
      "HTML, CSS, JavaScript (Usually i write sites using React)",
      "React and lot of useful libs",
      "Redux / Redux Toolkit",
      "TypeScript",
      "Next.js",
      "Sass, Tailwind CSS, Shadcn",
      "Socket.IO (Client)",
      "Zod (Server and client validation)"
    ],
    "Now here is the list of all technologies that i use in backend part:",
    [
      "Express.js",
      "MongoDB",
      "MySQL",
      "Prisma ORM",
      "PostgreSQL",
      "JWT token library and auth functionality",
      "Auth.js",
      "Socket.IO (Server)",
      "Zod (Server and client validation)"
    ],
    `Also i touched upon Python, Java, C#, C++ and Rust (my favourite and most learned from this list).`
  ]
  socialsData = [
    "GitHub                       <a target='_blank' href='https://github.com/Yarik7610'>https://github.com/Yarik7610</span>",
    "LeetCode                     <a target='_blank' href='https://leetcode.com/u/Yarik7610/'>https://leetcode.com/u/Yarik7610</span>",
    "Mail (Questions / offers)    <a target='_blank' href='mailto:yaroslavyanovich1@gmail.com'>yaroslavyanovich1@gmail.com</span>"
  ]

  help = () => {
    const padded = this.createPadded()
    this.helpData.forEach((row) => {
      const line = document.createElement("pre")
      line.innerHTML = row
      padded.appendChild(line)
    })
    this.output.appendChild(padded)
  }
  about = () => {
    const p = document.createElement("p")
    p.textContent = this.aboutData
    this.output.appendChild(p)
  }
  skills = () => {
    const wrap = document.createElement("div")
    this.skillsData.forEach((row) => {
      if (Array.isArray(row)) {
        const padded = this.createPadded()
        row.forEach((line) => {
          const lineWrap = document.createElement("li")
          lineWrap.innerHTML = line
          padded.appendChild(lineWrap)
        })
        wrap.appendChild(padded)
      } else {
        const line = document.createElement("p")
        line.innerHTML = row
        wrap.append(line)
      }
    })
    this.output.appendChild(wrap)
  }
  projects = () => {
    const p = document.createElement("p")
    p.innerHTML = this.projectsData[0]
    this.output.appendChild
    const padded = this.createPadded()
    this.projectsData.forEach((row, i) => {
      if (i === 0) return
      const line = document.createElement("pre")
      line.innerHTML = row
      padded.appendChild(line)
    })
    this.output.appendChild(p)
    this.output.appendChild(padded)
  }
  socials = () => {
    const padded = this.createPadded()
    this.socialsData.forEach((row) => {
      const line = document.createElement("pre")
      line.innerHTML = row
      padded.appendChild(line)
    })
    this.output.append(padded)
  }
  notFound = () => {
    const p = document.createElement("p")
    p.innerHTML = `No such command. For a list of available commands type '<u>help</u>'.`
    output.appendChild(p)
  }

  cls = () => {
    this.output.innerHTML = ""
  }
  createPadded = () => {
    const padded = document.createElement("ul")
    padded.classList.add("padded")
    return padded
  }
}
