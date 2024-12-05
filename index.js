const submitbutton = 
document.getElementById('name');
const nameinput = 
document.getElementById('name');
const message dive= 
doc.getElementById('message');


submitbutton.addEventListener('click',()){
    const name = nameinput.Value;
fetch('/submit',{
    method:'post';
    Headers:{'content-type':'application/json'},
    body:JSON.stringify({name})

})
}
 
then(Response.text())
then(message{
    message dive,innertext = message;
});




