let menuItem = document.querySelectorAll(".menu-item"),
    titleName = document.getElementById("title"),
    advClass = document.getElementsByClassName("adv"),
    appleQuiestion = document.getElementById("prompt"),
    fifthButton = document.createElement("li"),
    menu = document.querySelector(".menu");


menu.appendChild(menuItem[0]);
menu.appendChild(menuItem[2]);
menu.appendChild(menuItem[1]);
menu.appendChild(menuItem[3]);
fifthButton.classList.add("menu-item");
fifthButton.innerText = "Пятый пункт";
menu.append(fifthButton);

document.body.style.background = "url(img/apple_true.jpg) center no-repeat";
titleName.innerText = "Мы продаем только подлинную технику Apple";
advClass[0].style.display = "none";
let question = prompt("Ваше отношение к технике apple?", "");
appleQuiestion.innerText = question;