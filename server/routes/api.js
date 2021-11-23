const express = require('express')
const jwt =require ('jsonwebtoken')
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

// function verifyToken(req, res, next) {
//     if (!req.headers.authorization){
//         return res.status(401).send('Unauthorized request 0')
//     }
//  let token = req.headers.authorization.split('')[1]
//  if(token === 'null') {
//     return res.status(401).send('Unauthorized request 1')    
//   }
//   let payload = jwt.verify(token, 'secretKey')
//   if(!payload) {
//     return res.status(401).send('Unauthorized request 2')    
//   }
//   req.userId = payload.subject
//   next()
// }




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
        let payload ={ subject: registeredUser._id}
        let token = jwt.sign(payload,'secretKey')
        res.status(200).send({token})
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
                let payload = { subject: user._id}
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({user})
            }
        }
    })
})

// 
router.get('/home',(req, res)=>{
    let home =[

        {
            "_id":"1",
            "name": "HELLO",

        },
        {
            "_id":"1",
            "name": "bye",

        }
    ]
    res.json(home)
})
//

router.get('/adminDashboard', (req, res)=>{
    let adminDashboard =[
        {
            "_id":"1",
            "name": "auto expo",

        },
        {
            "_id":"2",
            "name": "auto expo",
            
        },
        {
            "_id":"3",
            "name": "auto expo",
            
        }
    ]
    res.json(adminDashboard)
})

module.exports = router