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