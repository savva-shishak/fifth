const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;
const app = express();
const jsonParser = express.json();
 
// модель пользователя
const userScheme = new Schema({name: String, login: String, password: String}, {versionKey: false});
const User = mongoose.model("User", userScheme);
 
// модель новости
const newsScheme = new Schema({title: String, contentTitle: String}, {versionKey: false});
const News = mongoose.model("News", newsScheme);


app.use(express.static(__dirname + "/dist"));
 
// соединение с базой данных
mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true }, (err) => {

    if(err) return console.log(err);

    app.listen(5000, () => {
        console.log("Сервер ожидает подключения...");
    });
});

// тест
app.post('/test', jsonParser, (req, res) => {

    if(!req.body) return res.sendStatus(400);

    console.log(req.body)
    res.send("Ответ получен. данные:" + req.body.data1 + ", " + req.body.data2)
})


// пользователи
app.get('/api/users', (req, res) => {
    User.find({}, (err, users) => {
    
        if(err) return console.log(err);
        res.send(users)
        
    });
})

// новый пользователь
app.post('/api/user', jsonParser, (req, res) => {

    console.log(req.body)
    const user = new User(req.body);

    user.save( err => {
        if(err) return console.log(err);
        res.send(true);
    });
});

// авторизация
app.post('/api/users/check', jsonParser, (req, res) => {

    let login = req.body.login;
    let password = req.body.password;
    
    User.findOne({login: login, password: password}, (err, user) => {
        if(err) return console.log(err);

        res.send(user != null)
    });
});

// наличие логина
app.get('/api/users/:login', (req, res) => {

    let login = req.params.login;

    User.findOne({login: login}, (err, user) => {
        if(err) return console.log(err);
        
        res.send(user != null)
    });
});


// новости
app.get('/api/news', (req, res) => {
    News.find({}, (err, news) => {
    
        if(err) return console.log(err);
        res.send(news)
        
    });
});

app.post('/api/news', (req, res) => {
    if(err) return console.log(err);

    const news = new News(req.body);

    news.save()
});