module.exports={
    port:process.env.PORT || 3001,
    db:process.env.MONGOBD || 'mongodb://proyectoapi:Abc123@ds127936.mlab.com:27936/heroku_hq6msf95',
    options:{
        useMongoClient: true,
        autoIndex: false, // Don't build indexes
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        reconnectInterval: 500, // Reconnect every 500ms
        poolSize: 10, // Maintain up to 10 socket connections
        // If not connected, return errors immediately rather than waiting for reconnect
        bufferMaxEntries: 0
    }
}