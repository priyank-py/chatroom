

class ChatGUI {
    constructor(list){
        this.list = list
    }
    render(data){
        const html = `
            <li class="list-group-item">
                <span>${data.username}</span>
                <span>${data.message}</span>
                <div>${data.created_at}</div>
            <li>
        `
        this.list.innerHTML += html
        
    }
}