const express = require('express');
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const connectDb = require('./db.connection')
const Userdb = require('./model.schema')
const dotenv = require('dotenv')

dotenv.config(path = "./env")

connectDb();

app.get("/", (req, res) => {
    Userdb.find()
        .then(data => {
            return res.json(data)
        })

})
app.put('/:id', (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body).then(data => {
        return res.json(data)
    })
})
app.delete('/:id', (req, res) => {
    id = req.params.id
    Userdb.findByIdAndDelete(id).then(data => {
        return res.json(data)
    })
        .catch(e => {
            console.log(e)
        })
})
app.post("/", (req, res) => {
    return res.send('Post Request')
})
app.post('/:name/:email/:mobNo', (req, res) => {
    let name = req.params.name
    let email = req.params.email
    let mobNo = req.params.mobNo
    const user = new Userdb({ "Name": name, "Email": email, "MobNo": mobNo })
    user.save().then(r=>{
        return res.json(r);
    })
    .catch(e=>{
        return res.json(e)
    })
})

app.post('/add', async (req, res) => {
    const { Name, Email, MobNo } = req.body
    let user = new Userdb(req.body)
    await user.save()
    return res.json("done")

})

app.listen(5000, () => {
    console.log("Listening on Port 5000")
})
