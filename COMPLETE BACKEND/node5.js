// node is event based architectural language
// done  using event emitter

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('waterfall', ()=> {
    console.log('please turn of motor!')
    setTimeout(() => {
        console.log('again turn off ');
    }, 3000);
});
console.log('one')
myEmitter.emit('waterfall');
console.log('two')