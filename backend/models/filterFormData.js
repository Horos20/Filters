const mongoose = require("mongoose");

const FilterSchema = new mongoose.Schema({
    filterName: {
        type: String
    },
    criteria: {
        type: Array
    },
    condition1: {
        type: Array
    },
    condition2: {
        type: Array
    },
    select: {
        type: String
    }
});

const Filter = mongoose.model("Filter", FilterSchema);

module.exports = Filter;