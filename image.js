let img = document.querySelector("img");
document.querySelectorAll("a").forEach(function(a) {
    a.addEventListener("click", function(evt) {
        evt.preventDefault();
        let imageName = evt.target.getAttribute("data-image-name");
        console.log(imageName);
        img.setAttribute("src", imageName + ".jpg");
      
    });
})