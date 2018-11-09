export class Data {

  createUser = (username) => {
    // get all current users
    let users = this.getUsers();

    // add new user if user doesn't already exist
    if (users[username] === undefined) {
      // create unique id for new user
      let user_id = Object.keys(users).length;
      let user = { user_id, username };

      // add user to list
      users[username] = user;
      window.localStorage.setItem("users", JSON.stringify(users));
    }
  }

  getUser = (username) => {
    let users = this.getUsers();
    let user = users[username];
    if (user) return user;
    else return null;
  }

  getUsers = () => {
    let users = window.localStorage.getItem("users");
    if (users === null) return ({});
    else return JSON.parse(users);
  }

  getFriends = (user_id) => {
    let users = this.getUsers();
    let friends = ({});
    for (var user in users) {
      if (users[user].user_id !== user_id) friends[user] = users[user];
    }
    return friends;
  }




  getMessage = (message_id) => {
    let message = window.localStorage.getItem(message_id);
    if (message !== null) message = JSON.parse(message);
    return message;
  }

  writeMessage = (message_data) => {
    let { text, timestamp, delay, sender_id, recipients_ids } = message_data;
    let message_id = "" + sender_id + timestamp;
    console.log(message_id, text);
    this.setMessage(message_id, message_data);
  }

  setMessage = (message_id, message) => {
    message = { ...message, read: [] };
    window.localStorage.setItem(message_id, JSON.stringify(message));

    let midstring = window.localStorage.getItem("message_ids");
    let message_ids = [];
    if (midstring !== null) message_ids = JSON.parse(midstring);
    message_ids = [...message_ids, message_id];
    window.localStorage.setItem("message_ids", JSON.stringify(message_ids));

  }

  getSent = (user_id) => {

    let midstring = window.localStorage.getItem("message_ids");
    let message_ids = [];
    if (midstring !== null) message_ids = JSON.parse(midstring);

    let sentMessages = []
    for (var id in message_ids) {
      let message = this.getMessage(message_ids[id]);
      if (message !== null && message.sender_id === user_id) {
        sentMessages = [...sentMessages, message]
      }
    }

    return sentMessages;

  }

  getReceived = (user_id) => {

    let midstring = window.localStorage.getItem("message_ids");
    let message_ids = [];
    if (midstring !== null) message_ids = JSON.parse(midstring);

    let received = []
    for (var id in message_ids) {
      let message = this.getMessage(message_ids[id]);
      if (message !== null && message.recipients_ids.includes(user_id)) {
        received = [...received, message]
      }
    }

    let unread = [];
    let read = [];
    for (var index in received) {
      if (!received[index].read.includes(user_id)) {
        unread = [...unread, received[index]];
      }
      else {
        read = [...read, received[index]];
      }
    }

    return { read, unread };

  }

  readMessage = (message_id, user_id) => {
    let message = this.getMessage(message_id);
    if(!message.read.includes(user_id)) message.read = [...message.read, user_id];
  }

}

var db = new Data();
export default db;
