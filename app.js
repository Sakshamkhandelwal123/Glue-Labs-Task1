const express = require('express');
const app = express();

app.use(express.json());

const users = [
    {id: 1, name: 'Saksham', age: 20},
    {id: 2, name: 'Manish', age: 25},
    {id: 3, name: 'Mohit', age: 18}
]

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    console.log(user);
    users.push(user);
    res.send(user);
})

app.put('/users/:id', (req, res) => {
    const temp = users.find(user => user.id === parseInt(req.params.id));
    if(!temp) {
        return res.status(404).send("The user does not exist");
    }

    temp.name = req.body.name;
    temp.age = req.body.age;
    res.send(temp);
    
})

app.delete('/users/:id', (req, res) => {
    const temp = users.find(user => user.id === parseInt(req.params.id));
    if(!temp) {
        return res.status(404).send("The user does not exist");
    }

    const index = users.indexOf(temp);
    users.splice(index, 1);

    res.send(temp);
})

app.get('/users/:id', (req, res) => {
    const temp = users.find(user => user.id === parseInt(req.params.id));
    if(!temp) {
        return res.status(404).send("The user does not exist");
    }
    res.send(temp);
})

app.listen(3000, () => {
    console.log("Server is running...");
})