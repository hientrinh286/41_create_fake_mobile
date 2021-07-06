const MAX_PIN = 100;
class Mobile {
    constructor(name){
    this.name = name;
    this.battery = MAX_PIN;
    this.message = '';
    this.inbox = [];
    this.outbox = [];
    this.status = false;
    }

    checkStatus(){
        return this.status;
    }

    turnOn(){
        this.status = true;
    }

    turnOff(){
        this.status = false;
    }

    chargeBattery(){
        this.battery++;
        if (this.battery == (MAX_PIN+1)){
            alert('Your phone is fully charged.')
            this.battery--;
        }
    }

    writeMessage(message){
        if (this.status){
            this.changeBattery();
            this.message = message;
        }
    }

    sendMessage(phone){
        if (this.status){
            this.changeBattery();
            phone.inbox.push(this.message);
            this.outbox.push(this.message);
        }
    }

    readInbox(){
        if (this.status){
            this.changeBattery();
            return this.inbox;
        }
    }

    readOutbox(){
        if (this.status){
            this.changeBattery();
            return this.outbox;
        }
    }

    changeBattery(){
        this.battery--;
    }
    
    batteryEmty(){
        if (this.battery == 0) {
            this.turnOff();
        }
    }
}