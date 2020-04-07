const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData = [
    {name:'Mark'},
    {name:'Jill'},
]

app.get('/users',function(req,res){
    res.json({
        success: true,
        message: 'Niiiiice ! Got some users.',
        users: mockUserData
    })
})

app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.post('/login',function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    
    const mockUsername = "Babar";
    const mockPassword = "elephant";

    if (username === mockUsername && password === mockPassword){
        res.json({
            success : true,
            message: 'password and username match',
            token: 'encrypted token'
        })
    } else {
        res.json({
            success: false,
            message: 'wrong password or username'
        })
    }
})

app.listen(8000,function(){
    console.log("quack")
})