const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const path = require('path')
const PORT = process.env.PORT||3000
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/test')
const Cat = mongoose.model('Cat', {name: String})


const kitty = new Cat({name: 'zildjian' })
kitty.save().then(()=> console.log("meow"))
