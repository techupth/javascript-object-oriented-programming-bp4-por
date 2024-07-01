class EmailNotification {
    constructor(notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }

    send() {
        return console.log(`Notification has been sent to ${this.receiver}`)
    }
}

class SMSNotification {
    constructor(notificationId, createdTime, content, phoneNumber) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send() {
        return console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
}

const userEmail = new EmailNotification("id01", "4.00 PM", "Hello, there", "test01@gmail.com");
const userSms = new SMSNotification("id01", "4.00 PM", "Hello, there", "0852442516");

userEmail.send("test01@gmail.com");
userSms.send("0852442516");