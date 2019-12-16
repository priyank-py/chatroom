//add chat
//get chat
//update username
//update chatroom

class Chatroom {
    constructor(username, room){
        this.username = username;
        this.room = room
        this.chats = db.collection('chats');
        this.unsub;
    }
    //Adding chats to our firestore collection
    async addChat(msg){
        const now = new Date();

        const response = await this.chats.add({
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now),
            message: msg
        })
        return response
    }
    //getting live chats from firestore collection
    getChat(callback){
        this.unsub = this.chats.where('room', '==', this.room).onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type==='added' & change.doc.data().room===this.room){
                    callback(change.doc.data())
                }
            })
        })
    }
    
    //update Username
    updateUsername(username){
        this.username = username
        localStorage.setItem('username', username)
    }
    //update current chatroom
    updateRoom(room){
        this.room = room
        if(this.unsub){
            this.unsub()
        }
    }
}



