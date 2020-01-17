//var looger = require('./logger') //Loading for node Module
const Logger = require('./logger') //Loading for node Module
const logger = new Logger();

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url==='/')
        res.write('Welcome to Node JSS Application');
    if (req.url === '/api/course')
        res.write(JSON.stringify(["Java Script", "HTML 5", "CSS-3", "Node-JS", "Angular", "ASP .Net Web API","MY SQL"]));

    res.end();
});
server.listen(3000);
const osModule = require('os') //Loading for builtin os Module

//console.log(osModule);
//Logger('My Name is Vishnu')
//Logger(osModule.freemem())

var freeMemry = osModule.freemem();
//Concaneting string echmaScript
//Logger(`This is total memory ${freeMemry}`)

const EventEmitter = require('events') //Loading for Event
const eventEmitter = new EventEmitter();
//register a listener
eventEmitter.on('Sriyan', function (eventArg) { console.log(`Event  raised ${eventArg.name}`) });
//or
eventEmitter.on('Sriyan',  (eventArg)=> { console.log(`2Event  raised ${eventArg.name}`) });

//Raise an event 
eventEmitter.emit('Sriyan', { name: 'sriyan', lastName: 'Badsah' });


logger.on('Manmohan', function (eventArg) { console.log(`Event  raised ${eventArg.name}`) });

logger.log();


