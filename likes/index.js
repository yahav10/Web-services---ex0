'use strict'
var events = require('events');
var util = require('util');
var log = "";

module.exports = class Likes extends events{
    constructor() {
        super();
        this.balance = 0;
    }

    increase(amount) {
        this.balance += amount;
        this.emit('likesbalanceChanged');
    }

    decrease(amount) {
        this.balance -= amount;
        this.emit('likesbalanceChanged');
    }

    displayBalance() {
        var msg = "Likes balance is: " + this.balance;
        console.log(msg);
        log += msg + "\n";
    }

    getLog(){
        return log;
    }
    checkMinimum() {
        if (this.balance == 0) {
            console.log("Likes is zero!!" + this.balance);
        }
    }
    
    
}
