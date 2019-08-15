function form() {
    let message = {
        loading: "Загрузка...",
        success: "Thank you! We connect with you soon!",
        failure: "Oops? something go wrong..."
    };

    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div"),
        contact = document.getElementById("form"),
        btnContact = contact.getElementsByTagName("button");
        
    statusMessage.classList.add("status");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);
        let formData = new FormData(form);

        function postData(data) {
            return new Promise( function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open("POST", "server.php");
                request.setRequestHeader("Content-Type", "application/json; charset=utf-8");     

                request.onreadystatechange = () => {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve();         
                    } else {
                        reject();
                    }
                }; 
                let obj = {};
                data.forEach(function(value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);               
                request.send(json);
            });   
        }
        function clearInput() {
            for(let i = 0; i < input.length; i++) {
                input[i].value = "";
            } 
        }  
        
        postData(formData)
            .then(()=> statusMessage.innerHTML = message.loading)
            .then(()=> statusMessage.innerHTML = message.success)
            .catch(()=> statusMessage.innerHTML = message.failure)
            .then(clearInput);
    });

    contact.addEventListener("submit", function(event) {
        event.preventDefault();
        contact.appendChild(statusMessage);
        let formData = new FormData(contact);

        function postData(data) {
            return new Promise( function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open("POST", "server.php");
                request.setRequestHeader("Content-Type", "application/json; charset=utf-8");     

                request.onreadystatechange = () => {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve();         
                    } else {
                        reject();
                    }
                }; 
                let obj = {};
                data.forEach(function(value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);               
                request.send(json);
            });   
        }
        function clearInput() {
            for(let i = 0; i < input.length; i++) {
                input[i].value = "";
            } 
        }  
        
        postData(formData)
            .then(()=> statusMessage.innerHTML = message.loading)
            .then(()=> statusMessage.innerHTML = message.success)
            .catch(()=> statusMessage.innerHTML = message.failure)
            .then(clearInput);
    });
}

module.exports = form;