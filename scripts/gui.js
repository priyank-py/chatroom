

class ChatGUI {
    constructor(list){
        this.list = list
    }
    clear(){
        this.list.innerHTML = '';
    }
    render(data){
        //converting long js time to datefns time format
        const time = dateFns.distanceInWordsToNow(data.created_at.toDate(), {addSuffix:true})
        // console.log(data.created_at.toDate())
        // console.log(data.created_at)
        const html = `
            <li class="list-group-item">
                <span>${data.username}</span>
                <span>${data.message}</span>
                <div>${time}</div>
            <li>
        `
        this.list.innerHTML += html
        
    }
}