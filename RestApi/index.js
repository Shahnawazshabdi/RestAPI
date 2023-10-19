const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port =3000;

const app =express();
let arr = [
    { "id": 1, "jokes": "haha" },
    { "id": 2, "jokes": "this is rest api" },
    { "id": 3, "jokes": "this is joke" },
    { "id": 4, "jokes": "asad" },
    { "id": 5, "jokes": "------" }
]

// cross ogrigin resource sharing 
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/jokes',(req,res)=>{
    res.send(arr);
});

app.get("/randomjokes",(req,res)=>{
    const joke = arr[Math.ceil(Math.random() * arr.length)];
    res.send(joke);
});

app.post('/jokes1',(req,res)=>{
    const newid = arr[arr.length -1].id+1;

    const joke = req.body;

    console.log(joke);
    
    arr.push ({id:newid, jokes:joke});

    res.send({id:newid, jokes:joke});
});

app.delete('/jokes/:id',(req,res)=>{
    const jokeid =req.params.id;

    const jokeindex = arr.findIndex(joke => joke.id == jokeid);

    arr.splice(jokeindex, 1);

    res.send({message: "joke deleted successfully"});
})

app.get("/", (req, res) => {
    res.send("Welcome to my youtube channel...")
})

app.listen(port, () => {
    console.log(`server listening on port ${ port }`);
})