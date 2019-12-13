const chatList = document.querySelector('.list-group')

//gui class object
const gui = new ChatGUI(chatList)



const chat1 = new Chatroom('anon', 'random')
chat1.getChat((data)=> {
    gui.render(data)
})
