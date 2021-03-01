const { response } = require("express")

window.addEventListener('load',function(e){
    console.log(e) 
    url = "http://localhost:5000/api/v1/users"
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
})