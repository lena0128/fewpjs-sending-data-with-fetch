// Add your code here


function submitData(name, email) {

    let configObj = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name, email})
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(function(object){
        document.body.innerHTML = object["id"]
    })
    .catch(function(error){
        document.body.innerHTML = error.message
    })
}

