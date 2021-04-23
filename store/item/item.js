let colors = document.querySelectorAll(".color-option");

console.log(colors);

colors[0].addEventListener("click", () => {
    console.log("Click 1");
    for(i=0; i<colors.length; i++) {
        if (i === 0) {
            colors[i].classList.add("color-selected");
        } else {
            colors[i].classList.remove("color-selected");
        }
    }
});

colors[1].addEventListener("click", () => {
    console.log("Click 1");
    for(i=0; i<colors.length; i++) {
        if (i === 1) {
            colors[i].classList.add("color-selected");
        } else {
            colors[i].classList.remove("color-selected");
        }
    }
});


colors[2].addEventListener("click", () => {
    console.log("Click 1");
    for(i=0; i<colors.length; i++) {
        if (i === 2) {
            colors[i].classList.add("color-selected");
        } else {
            colors[i].classList.remove("color-selected");
        }
    }
});
