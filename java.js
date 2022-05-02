document.getElementById('makebudget').addEventListener('submit', savetask)
// para gettask y savetask
document.getElementById('editbudget').addEventListener('submit', saveedit)
//  para edittask y saveedit
// para las ediciones
function saveedit(e) {
 let nameed = document.getElementById('nameed').value
 let editbal = document.getElementById('editbal').value
 let actual =
  document.getElementById('initbud').value +
  document.getElementById('editbal').value
 const edits = {
  editbal,
  nameed,
  actual,
 }
 if (localStorage.getItem('edit') === null) {
  let edit = []
  edit.push(edits)
  localStorage.setItem('edit', JSON.stringify(edit))
 } else {
  let edit = JSON.parse(localStorage.getItem('edit'))
  edit.push(edits)
  localStorage.setItem('edit', JSON.stringify(edit))
 }
 document.getElementById('editbudget').reset()
 e.preventDefault()
}
// pa guardar los preupuestos
function savetask(e) {
 let namebud = document.getElementById('namebud').value
 let initbud = document.getElementById('initbud').value
 let monuse = document.getElementById('monuse').value
 let desc = document.getElementById('description').value
 let date = document.getElementById('date').value
 const task = {
  namebud,
  initbud,
  monuse,
  desc,
  date,
 }
 if (localStorage.getItem('tasks') === null) {
  let tasks = []
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
 } else {
  let tasks = JSON.parse(localStorage.getItem('tasks'))
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
 }
 gettask()
 document.getElementById('makebudget').reset()
 e.preventDefault()
}
// para hacer los preupuestos
function deltask(namebud) {
 let tasks = JSON.parse(localStorage.getItem('tasks'))
 for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].namebud == namebud) {
   tasks.splice(i, 1)
  }
 }
 localStorage.setItem('tasks', JSON.stringify(tasks))
 gettask()
}
function gettask() {
 let tasks = JSON.parse(localStorage.getItem('tasks'))
 let viewtask = document.getElementById('tasks')
 viewtask.innerHTML = ''
 for (let i = 0; i < tasks.length; i++) {
  let namebud = tasks[i].namebud
  let initbud = tasks[i].initbud
  let monuse = tasks[i].monuse
  let desc = tasks[i].desc
  let date = tasks[i].date
  viewtask.innerHTML += `
     <div class = "card mb-4"> 
     <div class= "card-body">
     <p> ${namebud} budget = ${initbud}${monuse} - Creation date :${date}<p><hr>
     <p>main purpose: ${desc}<p>
     <div id="changes">
        <div id="edit">
        </div>
     </div>
     <div>
     <div id="budget balance class="row pt-2"">
     <h6>status $<h6>
     <div class="progress">
     <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
     </div>
     </div>
     <hr>
     <a class="btn btn-danger" onclick= "deltask('${namebud}')">ERASE</a>
     </div>`
 }
 gettask()
}
gettask()
