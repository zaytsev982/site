var popup = document.querySelector(".mobile-navi");
var link = document.querySelector(".lines-3");


link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("mobile-navi-show");
    
    if (popup.classList.contains("mobile-navi-show")) {
        var withinBoundaries = evt.composedPath().includes(popup);
    
        if (! withinBoundaries) {
            popup.classList.remove("mobile-navi-show");
        }
    }
    
})
