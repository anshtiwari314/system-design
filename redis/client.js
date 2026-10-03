const Redis = require('ioredis')

let redis = new Redis({
    host: '192.168.1.36',
    port:6379 
})


module.exports = redis;
