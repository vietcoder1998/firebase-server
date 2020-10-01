import { getUser, sendMsg } from "./firebase";

var express = require('express');
var bodyParser = require('body-parser');
var dotevn = require('dotenv');

dotevn.config();
var app = express();
app.use(bodyParser.json());

/**
 * [Server to call firebase sdk]
 *
 * @param   {}  req            [req description]
 * @param   {}  res            [res description]
 *
 * @return  {}                 [return description]
 */

app.get('/:title/:body', (req, res) => {
    let title = req.params.title;
    let body = req.params.body;
    let token = req.params.token;
    sendMsg({
        notification: {
            title,
            body,
        },
        token
    })
})

/**
 * [GET: /user]
 *
 * @param   {}  req    [req description]
 * @param   {}  res    [res description]
 *
 * @return  {}         [return data user user in querry db]
 */

app.get('/user', (req, res) => {
    getUser();
})

app.listen(8000, () => {
    console.log("app running in ", 8000)
})