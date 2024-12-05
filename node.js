const express = reqiure('express')
const app = express();
const port = 3000;
app.use (express.static('public'));
app.post('/submit',(req.res) {
constname = req.body.name;
res.send(Hello,${name}!);
});
app.list(port(){
    console.log server started on port
    ${port});












