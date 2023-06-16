
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
    var skills = document.querySelector('#myskills').offsetTop;
    var more = document.querySelector('#more').offsetTop;
    console.log(scrollPosition);
    console.log(intro, skills, more);

    
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

