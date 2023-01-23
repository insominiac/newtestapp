const express = require('express')
var axios = require('axios');
var fs = require('fs');
const app = express()
const port = 3000
var base64 = require('base-64');
let token = "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"
var name = 'chatbot-Power-AI-AOPL';

function uploadFileApi(token, content) {

    var data = JSON.stringify({
        "message": `${name}`,
        "content": `${content}`
    });

    var config = {
        method: 'put',
        url: `https://api.github.com/repos/insominiac/dashboard/contents/${name}.html`,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

app.get('/', (req, res) => {
var htmlcontent = '<html>Whatever</html>'
var content = base64.encode(htmlcontent);
let file = fs.writeFile(`${name}.html`, content, (error) => { /* handle error */ });

console.log(file);
res.send(uploadFileApi(token, content));
  res.status(200).send(
    {
    message: `Hello from ${name}!`
    })
  
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})