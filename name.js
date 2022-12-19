// Wrap every letter in a span
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter bluish'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  });

let phrase = "Software Engineer";
let targetEl = document.getElementById("hover1");
phrase = phrase.split("").map((letter, index) => {
    let el = document.createElement("span");
    el.innerHTML = letter;
    el.setAttribute("data-index", index.toString());
    el.classList.add("hover-char");
    targetEl.appendChild(el);

});

let removeClasses = () => {
    hoverChars.map((char) => {
        char.classList.remove("hovered");
        char.classList.remove("hovered-adjacent");
        char.classList.remove("bluish");
    });

}
let hoverChars = [...document.getElementsByClassName("hover-char")];
hoverChars.map((char) => {
    char.addEventListener("mouseover", (e) => {
        removeClasses();
        let currentElement = e.target;
        let index = parseInt(currentElement.getAttribute("data-index"));
        let prevIndex = index === 0 ? null : index - 1;
        let nextIndex = index === phrase.length - 1 ? null : index + 1;
        let prevEl = prevIndex !== null && document.querySelector('span[data-index="'+prevIndex+'"]');

        let nextEl = nextIndex !== null && document.querySelector('span[data-index="'+nextIndex+'"]');
        e.target.classList.add("hovered");
        e.target.classList.add("bluish");
        prevEl && prevEl.classList.add("hovered-adjacent");
        nextEl && nextEl.classList.add("hovered-adjacent");
    });
    
});
document.getElementById("hover1").addEventListener("mouseleave", (e) => {
    removeClasses();
});




function colorImage(){
    let photo = document.getElementById("profileimage");

    //when you hover over the image, animation to change color
    photo.onmouseover = function(){
        photo.style.filter = "grayscale(0%)";
        //zoom in on the image
        photo.style.transform = "scale(1.2)";
        photo.style.transition = "all 0.3s ease-in-out";



    }
    //when you hover out of the image, it will turn to grayscale
    photo.onmouseout = function(){
        photo.style.filter = "grayscale(50%)";
        //zoom out of the image
        photo.style.transform = "scale(1)";

    }
}
colorImage();


