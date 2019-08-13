window.addEventListener("DOMContentLoaded", function() {   
    'use strict';
    
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent"),
        more = document.querySelector(".more"),
        buttons = document.querySelectorAll(".description-btn");
    
    
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
    // Time

    let deadLine = "2019-08-13";

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

    //Modal

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
});

//----------------------------------11----------------------------------

// <input id="age" value="30">

// let age = document.getElementById('age');
// function showUser(surname, name) {
// 	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
// showUser.apply(age, ["Панов","Владимир"]);

//----------------------------------12----------------------------------

// class Options {
//     constructor(height, width, bg, fontSize, textAlign) {
//         this.height = height;
//         this.width = width;
//         this.bg = bg;
//         this.fontSize = fontSize;
//         this.textAlign = textAlign;

//     }
//     createDiv(str) {
//         let element = document.createElement("div");
//         console.log(element);
//         element.innerHTML = str;
//         document.body.append(element);

//         element.style.cssText = `
//             height: ${this.height};
//             width: ${this.width};
//             background: ${this.bg};
//             font-size: ${this.fontSize};
//             text-align: ${this.textAlign};
//         `;
//     }
// }
// const option = new Options("100px", "1000px", "yellow", "80px", "center");
// let el = option.createDiv("Чёткая надпись!!!");

