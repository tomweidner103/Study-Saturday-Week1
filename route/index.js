'use strict'

const express = require('express')
const router = express.Router()
const{Student} = require('../models/Student')


//get students
router.get('/', async (req,res,next)=>{
    const student = await Student.findAll()
    res.json(student)

})
.post( async(req,res,next)=>{
    const addStudent = await Student.create({
        name: 'Andrew'
    });
    res.send(addStudent)

})

// router.route('/:id')
// .get((req,res,next)=>{

// })
// .put((req,res,next)=>{

// })
// .delete((req,res,next)=>{

// })


module.exports = router;