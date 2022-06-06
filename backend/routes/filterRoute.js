const express = require('express')
const app = express();
const filterModel = require('../models/filterFormData')

app.post('/', async (req, res) => {
    const filterData = new filterModel({
        filterName: req.body.filterName,
        criteria: req.body.criteria,
        condition1: req.body.condition1,
        condition2: req.body.condition2,
        select: req.body.select
    });
    
    try {
        await filterData.save();
        res.send(filterData)
    } catch (err) {
        res.status(500).send(err)
    }
});

app.get("/", async (req, res) => {
    const getFilterData = await filterModel.find({});

    try {
        res.send(getFilterData);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = app;