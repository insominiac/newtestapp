const express = require('express')
var fs = require('fs');
//var Git = require("nodegit");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var htmlContent = '<html>Whatever</html>';
    var name = 'newbot';
    fs.writeFile(`http://emptyminds.in/${name}.html`, htmlContent, (error) => { /* handle error */ });
    res.status(200).send({
      message: `Hello from ${name}!`

      
    })
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})