let boxFourDivs = document.querySelectorAll(".b4inner div");

for(div of boxFourDivs) {
    div.addEventListener("click", function (event) {
        event.stopPropagation();
        let content = this.nextElementSibling;
        content.classList.toggle("hide");
        this.children[1].classList.toggle("rotate");
        console.dir(this);
        


    });
}