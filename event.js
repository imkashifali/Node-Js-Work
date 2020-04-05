
 //Create and Trigger Custom Event in Node.js

const events=require('events');
const event = new events.EventEmitter();

event.on('click',(e,f)=> console.log('helooooooooooooo',e+f));
event.emit('click',2,13);
