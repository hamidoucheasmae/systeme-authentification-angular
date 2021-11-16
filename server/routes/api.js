const express = require('express')
const router =express.Router()

const mongoose = require ('mongoose')
const db = "mongodb+srv://ah-user:ah-user@cluster0.y8kt0.mongodb.net/auth-db?retryWrites=true&w=majority"
mongoose.connect(db, err=>{
    if (err){
        console.error('Error!'+ err)
    }else {

        console.log ('connected to mongodb')
    }
})

router.get('/', (req,res) => {
    res.send('From Api route')
})

module.exports = router