const express = require('express')
const router =express.Router()
const User =require ('../models/user')
const mongoose = require ('mongoose')
const user = require('../models/user')
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

//register api
router.post ('/register',(req,res)=> {
    let userData =req.body
    let user =new User(userData)
    user.save((error, registeredUser)=>{
    if(error){
        console.log(error)
    }else{
        res.status(200).send(registeredUser)
    }
    
})
})

// login api
router.post('/login', (req,res)=>{
    let userData =req.body //extract the user data

    user.findOne({email:userData.email},(error, user)=>{
        if (error) {
            console.log(error)
        } else {
            if (!user){
                res.status(401).send('Invalid email')
            }else 
            if (user.password !== userData.password){
                res.status(401).send('Invalid Password')
            }else {
                res.status(200).send(user)
            }
        }
    })


})



module.exports = router