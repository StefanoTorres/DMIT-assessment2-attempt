
window.addEventListener('load',function(e){
    console.log(e) 
    url = "http://localhost:5000/api/v1/users"
    const results = fetch(url)
    .then(response => response.json())
    .then(data => data)

    console.log(data)
})