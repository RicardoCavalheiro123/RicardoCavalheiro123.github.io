



//Job Title
let phrase = "Informatics and Computing Engineer Student";
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
        char.classList.remove("green");
        char.classList.remove("mini");
    });
}
let removeClasses2 = () => {
    hoverChars2.map((char) => {
        char.classList.remove("hovered");
        char.classList.remove("hovered-adjacent");
        char.classList.remove("blue");
        char.classList.remove("mini");
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
        e.target.classList.add("green");
        prevEl && prevEl.classList.add("hovered-adjacent");
        prevEl && prevEl.classList.add("mini");
        nextEl && nextEl.classList.add("hovered-adjacent");
        nextEl && nextEl.classList.add("mini");
    });
    
});
document.getElementById("hover1").addEventListener("mouseleave", (e) => {
    removeClasses();
  
});

//About Me
/*
let phrase2 = "I am a Informatics and Computing Engineering Student at FEUP, passionate about programming and always looking for new challenges.";
let targetEle = document.getElementById("textAboutme");
phrase2 = phrase2.split("").map((letter, index) => {
    let el = document.createElement("span");
    el.innerHTML = letter;
    el.setAttribute("data-index2", index.toString());
    el.classList.add("hover-char2");
    targetEle.appendChild(el);

});


let hoverChars2 = [...document.getElementsByClassName("hover-char2")];
hoverChars2.map((char) => {
    char.addEventListener("mouseover", (e) => {
        removeClasses2();
        let currentElement = e.target;
        let index = parseInt(currentElement.getAttribute("data-index2"));
        let prevIndex = index === 0 ? null : index - 1;
        let nextIndex = index === phrase2.length - 1 ? null : index + 1;
        let prevEl = prevIndex !== null && document.querySelector('span[data-index2="'+prevIndex+'"]');

        let nextEl = nextIndex !== null && document.querySelector('span[data-index2="'+nextIndex+'"]');
        e.target.classList.add("hovered");
        e.target.classList.add("blue");
        prevEl && prevEl.classList.add("hovered-adjacent");
        prevEl && prevEl.classList.add("mini");
        nextEl && nextEl.classList.add("hovered-adjacent");
        nextEl && nextEl.classList.add("mini");
    });
    
});
document.getElementById("textAboutme").addEventListener("mouseleave", (e) => {
    removeClasses2();
});
*/



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



let button = document.getElementById('contact');
let section = document.getElementById('contactme');

// Add an event listener for the click event on the button
button.addEventListener('click', function() {
  // Use the scrollIntoView() method to scroll to the section
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

//after 3 seconds, add a class to a element
setTimeout(function(){

    document.getElementById("1").classList.remove("animate__fadeInLeftBig");
    document.getElementById("1").classList.add("animate__bounceOutLeft");
}
, 2500);
setTimeout(function(){
    document.getElementById("2").classList.remove("animate__fadeInLeftBig");
    document.getElementById("2").classList.remove("animate__delay-4s");
    document.getElementById("2").classList.add("animate__fadeOutDown");
}
, 7000);
setTimeout(function(){
    document.getElementById("3").classList.remove("animate__fadeInLeftBig");
    document.getElementById("3").classList.remove("animate__delay-8s");
    document.getElementById("3").classList.add("animate__flipOutX");
}
, 12500);


