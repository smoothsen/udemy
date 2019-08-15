(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function calc() {
    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById("total"),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener("change", function () {
        personsSum = +this.value;
        if ( personsSum == 0 ) {
            total = 0;
        } else if ( daysSum == 0 ) {
            total = 0;
        } else {
            total = (daysSum + personsSum) * 4000;
        }

        if (restDays.value == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener("change", function () {
        daysSum = +this.value;
        if ( daysSum == 0 ) {
            total = 0;
        } else if ( personsSum == 0 ) {
            total = 0;
        } 
        else {
            total = (daysSum + personsSum) * 4000;
        }

        if (persons.value == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener("change", function () {
        if (restDays.value == "" || persons.value == "") {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;
},{}],2:[function(require,module,exports){
function clock() {
    let deadLine = "2019-08-14";

    function getTimeRemaning(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/(1000*60*60)));
            // hours = Math.floor((t/1000/60/60)%24);
            // days = Math.floor((t/(1000*60*60*24)));
        return {
            "total": t,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaning(endTime);

            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (hours.textContent.length == 1) {
                hours.textContent = "0" + hours.textContent;
            }
            if (minutes.textContent.length == 1) {
                minutes.textContent = "0" + minutes.textContent;
            }
            if (seconds.textContent.length == 1) {
                seconds.textContent = "0" + seconds.textContent;
            }

            if (t.total <= 0) {
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";                
                clearInterval(timeInterval);
            }
        }
    }
    setClock("timer", deadLine);
}

module.exports = clock;
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
function modal() {
    let more = document.querySelector(".more"),
        buttons = document.querySelectorAll(".description-btn");


    function viewModal (moreButton) {        
        let overlay = document.querySelector(".overlay"),
            close = document.querySelector(".popup-close");
    
        moreButton.addEventListener("click", function () {
            overlay.style.display = "block";
            this.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        });

        close.addEventListener("click", function () {
            overlay.style.display = "none";
            moreButton.classList.remove("more-splash");  
            document.body.style.overflow = "";  
        });
    }
    viewModal(more);   
    buttons.forEach(element => {
        viewModal(element);
    });
}

module.exports = modal;
},{}],5:[function(require,module,exports){
function slider () {
    let slideIndex = 1,
    slides = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotsWrap = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll(".dot");

    showSlides(slideIndex);    
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((element) => element.style.display = "none");
        dots.forEach((element) => element.classList.remove("dot-active"));
        slides[slideIndex - 1].style.display = "";
        dots[slideIndex - 1].classList.add("dot-active");        
    }

    function plusSlides(n) {
        showSlides(slideIndex += n); 
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener("click", function() {
        plusSlides(-1);
    });
    next.addEventListener("click", function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener("click", function(event) {
        for (let i = 0; i < dots.length + 1; i++ ) {
            if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
}   

module.exports = slider;
},{}],6:[function(require,module,exports){
function tabs() {
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show"); 
        }
    }

    info.addEventListener("click", function() {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;
},{}],7:[function(require,module,exports){
window.addEventListener("DOMContentLoaded", function() {   
    'use strict';
    let calc = require("./parts/calc.js"),
        form = require("./parts/form.js"),
        slider = require("./parts/slider.js"),
        tabs = require("./parts/tabs.js"),
        timer = require("./parts/clock.js"),
        modal = require("./parts/modal.js");

    // calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});
},{"./parts/calc.js":1,"./parts/clock.js":2,"./parts/form.js":3,"./parts/modal.js":4,"./parts/slider.js":5,"./parts/tabs.js":6}]},{},[7]);
