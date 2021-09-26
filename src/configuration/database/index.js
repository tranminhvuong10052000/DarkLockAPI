const mongoose = require('mongoose')

const connect = async () => {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/dark_lock_store')
        console.log('Connecting successfully!!!')
    } catch (error) {
        console.error("Error connecting!!!" + error.message)
    }
    
}

module.exports = { connect }
