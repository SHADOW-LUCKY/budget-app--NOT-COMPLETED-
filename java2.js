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
function makeedit() {}
// para hacer los preupuestos y borrarlos
