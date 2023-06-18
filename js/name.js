
const ssMoveTo = function () {
    const easeFunctions = {
      easeInQuad: function (t, b, c, d) {
        t /= d;
        return c * t * t + b;
      },
      easeOutQuad: function (t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
      },
      easeInOutQuad: function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      },
      easeInOutCubic: function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      },
    };

    const triggers = document.querySelectorAll(".smoothscroll");

    const moveTo = new MoveTo(
      {
        tolerance: 0,
        duration: 1200,
        easing: "easeInOutCubic",
        container: window,
      },
      easeFunctions
    );

    triggers.forEach(function (trigger) {
      moveTo.registerTrigger(trigger);
    });
  }; // end ssMoveTo


    window.addEventListener('scroll', function() {
    var header = document.querySelector('.header_row');
    var scrollPosition = window.scrollY;
    var intro = document.querySelector('#intro').offsetTop;
    var skills = document.querySelector('#myskills').offsetTop-20;
    var more = document.querySelector('#more').offsetTop;


    
    if (scrollPosition < skills) {
        document.querySelector('#in').classList.add('scrolled');
        document.querySelector('#skill').classList.remove('scrolled');
        document.querySelector('#m').classList.remove('scrolled');
    } 
    else if (scrollPosition >= skills && scrollPosition < more) {
        document.querySelector('#in').classList.remove('scrolled');
        document.querySelector('#skill').classList.add('scrolled');
        document.querySelector('#m').classList.remove('scrolled');
    }
    else if (scrollPosition >= more) {
        document.querySelector('#in').classList.remove('scrolled');
        document.querySelector('#skill').classList.remove('scrolled');
        document.querySelector('#m').classList.add('scrolled');
    }
    
});




// Get all the .skill div elements
const skills = document.querySelectorAll('.skill_img');

// Add event listeners to each skill div
skills.forEach(skill => {
  skill.addEventListener('mouseover', () => {
    skill.classList.add('skill_hovered');
    anime({
      targets: skill,
      // Define the desired animation properties using Anime.js syntax
      // Example animation: scaling and rotating the skill div
      scale: 1.2,
      rotate: '1turn',
      duration: 700,
      easing: 'easeOutSine'
    });
  });

  skill.addEventListener('mouseout', () => {
    skill.classList.remove('skill_hovered');
    anime({
      targets: skill,
      // Reset the animation properties when mouse leaves
      scale: 1,
      rotate: '0turn',
      duration: 700,
      easing: 'easeOutSine'
    });
  });
});



var checkbox = document.querySelector("input[type=checkbox]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.querySelector('body.loading').classList.add('bright');
    document.querySelector('.header_row').classList.add('bright');
  } else {
    document.querySelector('body.loading').classList.remove('bright');
    document.querySelector('.header_row').classList.remove('bright');
  }
});

var i = 0;

var skills_sections = ["frontend", "backend", "database", "frameworks"];


skills_sections.forEach(function(section) {
  var sectionElement = document.getElementById(section);
  var skills = sectionElement.getElementsByClassName("skill");

  var del = 0;
  for (var i = 0; i < skills.length; i++) {
    var skill = skills[i];

 

    ScrollReveal().reveal(skill, {
        delay: del,
        duration: 900,
        reset: true,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        rotate: {
          x: 0,
          y: 80,
          z: 0
        },
    });
    del = del + 200;

  }
});
  
  
