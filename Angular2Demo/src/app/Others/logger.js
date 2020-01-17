//All variable and functions are private in node module,  Every js file in node js is module . There are some builting Module also

var url = 'http://mylogger.io/log';
function log(message) {
    console.log(message);
}
module.exports = log;   // Exporting node modules
//module.exports.endUrl = url;

const EventEmitter = require('events') //Loading for Event
class Logger extends EventEmitter {
    log() {

        //Raise an event 
        this.emit('Manmohan', { name: 'Manmohan', lastName: 'Badsah' });
    }

}

module.exports = Logger;   // Exporting node modules