import { Task } from './Task'

const ENTER_KEY = 13,
  c = console.log,
  d = document,
  j = JSON,
  ls = localStorage

export class ToDoList {
  constructor(key) {
    this.key = key

    if (!ls.getItem(key)) {
      ls.setItem(key, j.stringify([]))
    }

    this.addTask = this.addTask.bind(this)
    this.editTask = this.editTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  addTask(e) {
    //c(e)
    if (!e.target.value) {
      alert('No puedes agregar una tarea vacia')
    }

    if (e.keyCode === ENTER_KEY) {
      let newTask = new Task(e.target.value),
        tasks = j.parse(ls.getItem(this.key))

      tasks.push(newTask)
      ls.setItem(this.key, j.stringify(tasks))
      e.target.value = null
      this.renderTask(newTask)
      //c(newTask, '\n', tasks, '\n', ls)
    }
  }

  editTask(e) {
    if (e.target.matches('label')) {
      let tasks = j.parse(ls.getItem(this.key)),
        toEdit = tasks.findIndex(task => task.name === e.target.textContent),
        label = d.querySelector(`[data-id="${tasks[toEdit].id}"]`)

      //c(tasks, toEdit, tasks[toEdit])

      const saveTask = e => {
        e.target.textContent = e.target.textContent
        tasks[toEdit].name = e.target.textContent
        ls.setItem(this.key, j.stringify(tasks))
        e.target.blur()
      }

      label.addEventListener('blur', e => saveTask(e))
      label.addEventListener('keyup', e => (e.keyCode === ENTER_KEY) && saveTask(e))
    }
  }

  removeTask(e) {
    if (e.target.matches('a')) {
      let tasks = j.parse(ls.getItem(this.key)),
        toRemove = tasks.findIndex(task => task.id.toString() === e.target.dataset.id)

      c(tasks, toRemove)

      tasks.splice(toRemove, 1)
      ls.setItem(this.key, j.stringify(tasks))
      e.target.parentElement.remove()
    }
  }

  renderTask(task) {
    let templateTask = `
      <li class="List-item ${task.isComplete ? 'complete' : ''}">
        <input class="List-checkbox" type="checkbox" id="${task.id}" ${task.isComplete ? 'checked' : ''}>
        <label class="List-label" data-id="${task.id}" contenteditable spellcheck>${task.name}</label>
        <a class="List-removeLink" data-id="${task.id}" href="#">🗑️</a>
      </li>
    `

    list.insertAdjacentHTML('beforeend', templateTask)
  }

  render() {
    let tasks = j.parse(ls.getItem(this.key)),
      listTasks = list.children

    c(listTasks)

    tasks.forEach(task => this.renderTask(task))

    Array.from(listTasks).forEach(input => {
      input.querySelector('input[type="checkbox"]').addEventListener('change', e => {
        let task = tasks.filter(task => task.id == e.target.id)
        //c(task)

        if (e.target.checked) {
          e.target.parentElement.classList.add('complete')
          task[0].isComplete = true
        } else {
          e.target.parentElement.classList.remove('complete')
          task[0].isComplete = false
        }

        ls.setItem(this.key, j.stringify(tasks))
      })
    })

    task.addEventListener('keyup', this.addTask)
    list.addEventListener('click', this.editTask)
    list.addEventListener('click', this.removeTask)
  }
}
