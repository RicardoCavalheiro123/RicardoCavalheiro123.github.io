// Wrap every letter in a span
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

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

  let phrase = "Full-Stack Developer!";
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
          prevEl && prevEl.classList.add("hovered-adjacent");
          nextEl && nextEl.classList.add("hovered-adjacent");
      });
      
  });
  document.getElementById("hover1").addEventListener("mouseleave", (e) => {
      removeClasses();
  });