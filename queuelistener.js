const axios = require("axios")
const redis = require("redis")

const httpEndpoint = process.env.HTTP_CALLBACK_ENDPOINT;
const redisHost = process.env.REDIS_HOST;
const redisPort = process.env.REDIS_PORT;

console.log(redisHost, redisPort)


const redisClient = redis.createClient({
    host: redisHost,
    port: redisPort
})

redisClient.on('message', (channel, message) => {
    console.log('message!');
    let result = parseInt(message) + 2;
    axios.post(httpEndpoint, {result})
})

redisClient.on("subscribe", (channel) => {
    console.log('subscribed on ' + channel + ' channel');
})

redisClient.subscribe('queue')
