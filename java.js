document.getElementById('makebudget').addEventListener('submit', savetask)
// para gettask y savetask
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
     <div id="edit"></div>
     </div>
     <hr>
     <a class="btn btn-danger" onclick= "deltask('${namebud}')">ERASE</a>
     </div>`
 }
 gettask()
}
gettask()
