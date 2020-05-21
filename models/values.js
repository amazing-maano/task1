const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ValueSchema = new Schema({
    value1: {
        type: Number
    },
    value2: {
        type: Number
    },
    result1: {
        type: Number
    },
    result2: {
        type: Number
    },
    result3: {
        type: Number
    },
    result4: {
        type: Number
    }

})

const Values = mongoose.model('Values', ValueSchema);

module.exports = Values;