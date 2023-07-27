const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')


const createTodo = () => {
    if( input.value === '') {
        return alert ('пустую строку нельзя создать')
    }else{
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const divButtons = document.createElement('button')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')
        div.setAttribute('class', 'block_text')
        divButtons.setAttribute('class', 'div_buttons')
        deleteButton.setAttribute('class', 'delete_buttons')
        editButton.setAttribute('class', 'edit_buttons')
        deleteButton.innerHTML = 'delete'
        editButton.innerHTML = 'edit'
        deleteButton.onclick = ()=> div.remove()

        editButton.onclick = () => {
            const editText = prompt(`EDIT ${text.innerHTML} `).trim()
            editText === '' ? alert('нельзя поменять на пустое пространство'): text.innerText = editText
        }

        text.innerHTML = input.value
        divButtons.append(deleteButton, editButton)
        div.append(text, divButtons)
        todoList.prepend(div)
        input.value = ''
        text.onclick=()=>{
            text.classList.toggle('select')
        }
    }
}
createButton.onclick = () => createTodo()
window.addEventListener('keydown',(event) =>{
    if(event.code === 'Enter'){
        createTodo()
    }
    // console.log(event.code)
})
window.onkeydown = (event) =>{
    if(event.keyCode === 13) {
        createTodo()
    }}