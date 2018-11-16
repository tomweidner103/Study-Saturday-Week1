'use strict'

const express = require('express')
const router = express.Router()
const{Student} = require('../models/Student')



router.get('/', async (req,res,next)=>{
    const student = await Student.findOne({
        where:{
            id: 1
        }
    })

    res.send(student)

})
// .post((req,res,next)=>{

// })

// router.route('/:id')
// .get((req,res,next)=>{

// })
// .put((req,res,next)=>{

// })
// .delete((req,res,next)=>{

// })


module.exports = router;