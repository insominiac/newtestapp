const express = require('express')
var axios = require('axios');
var fs = require('fs');
var base64 = require('base-64');
let token = "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"
var name = 'chatbot-AI-algo-tuebe';
var htmlcontent = '<html>Whatever</html>'
var content = base64.encode(htmlcontent);
let file = fs.writeFile(`${name}.html`, content, (error) => { /* handle error */ });

console.log(file);
uploadFileApi(token, content)

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
