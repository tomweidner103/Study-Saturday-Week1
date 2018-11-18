'use strict'

const express = require('express')
const router = express.Router()
const{Student} = require('../models/Student')

//add student, make sure to do this first
router.route('/')
.post((req,res,next)=>{
    Student.create(req.body)
    .then(student => res.json(student))
})
//get all students
.get((req,res,next)=>{
    Student.findAll()
    .then(students => res.json(students))
})

router.route('/:id')
.put((req,res,next)=>{
    Student.update({
        name:req.body.name
    },
    {
        where: {
            name: req.params.id
        }
    })
    .then((update)=>{
        res.json(update)
    })
})
// .delete((req,res,next)=>{

// })


module.exports = router;