const express = require('express');
const app = express();

const mockUSerData = [
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

app.listen(8000,function(){
    console.log("quack")
})