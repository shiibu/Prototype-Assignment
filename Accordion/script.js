let accordionItem = document.getElementsByClassName("accordion-item");

for (i = 0; i < accordionItem.length; i++) {
    accordionItem[i].addEventListener("click", function (){
        this.classList.toggle("active");

        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block"
        }
    });
}