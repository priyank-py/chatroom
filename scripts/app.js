const chatList = document.querySelector('.list-group')
const newMessage = document.querySelector('.message')
const updateUser = document.querySelector('.user')
const chatRooms = document.querySelector('.chat-rooms')

newMessage.addEventListener('submit', e => {
    e.preventDefault()
    const msg = newMessage.message.value.trim();
    chat1.addChat(msg)
        .then(() => newMessage.reset())
        .catch(err => console.log(err))
})

updateUser.addEventListener('submit', e => {
    e.preventDefault()
    const user1 = updateUser.username.value.trim();
    chat1.updateUsername(user1)
    updateUser.reset()
})

chatRooms.addEventListener('click', e => {
    if(e.target.tagName==='BUTTON'){
        gui.clear()
        chat1.updateRoom(e.target.getAttribute('name'))
        chat1.getChat(data => gui.render(data))
        const btns = chatRooms.querySelectorAll('button')
        btns.forEach(btn => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
    }
})


//gui class object
const gui = new ChatGUI(chatList)


const username = localStorage.getItem('username') ? localStorage.getItem('username'): 'anon';
const chat1 = new Chatroom(username, 'random')
chat1.getChat((data)=> {
    gui.render(data)
})
