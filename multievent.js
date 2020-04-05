//Create and Trigger Custom Multiple Events in Node.js

const events=require('events');
 const event = new events.EventEmitter();

 const first_event=function(e,f){
        console.log(e*f);
        //calling 2nd events
        event.emit('click2');
        event.emit('click3');
 }
 const second_event=function(e,f){
    console.log("second_event click now");
}
const third_event=function(e,f){
    console.log("third click now");
}

event.on('click3',third_event);
 event.on('click2',second_event);
 event.on('click',first_event);
 event.emit('click',2,13);
