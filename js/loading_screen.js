// Disable scrolling
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Enable scrolling
function enableScroll() {
    document.body.style.overflow = '';
}
// Disable clicks
function disableClick() {
    document.addEventListener('click', preventDefault);
    document.addEventListener('contextmenu', preventDefault);
}

// Enable clicks
function enableClick() {
    document.removeEventListener('click', preventDefault);
    document.removeEventListener('contextmenu', preventDefault);
}

// Prevent default action
    function preventDefault(event) {
    event.preventDefault();
    }

  

init_LoadScreen = function() {
    disableClick();
    disableScroll();
    anime({
        targets: '.skill_hovered',
        translateX: 250,
        easing: 'easeInOutSine'
    });
    let texts = ["Bem-vindo", "Tervetuloa", "Bienvenue", "欢迎", "Willkommen", "Добро пожаловать", "환영합니다", "أهلاً وسهلاً", "Welkom","ברוך הבא", "Welcome",""]
    let loadingText = document.querySelector('.loading_text');
    let loadingContainer = document.querySelector('.loading-container');
    setTimeout(() => {
               
        let loadingContainer = document.querySelector('.loading-container');
        loadingContainer.style.animation = 'fadeout 1s forwards';
        document.querySelector('main').style.display = 'block';
        enableClick();
        enableScroll();
        var tl = anime.timeline({

            opacity: [0, 1], // Change the opacity from 0 to 1
            duration: 600,
            
            easing: 'easeInOutQuad'
        });
    
        tl.add({
            targets: '.header_row',
            opacity: [0, 1], // Change the opacity from 0 to 1
        });
          
        tl.add({
            targets: '.name',
            opacity: [0, 1], // Change the opacity from 0 to 1
        });
        tl.add({
            targets: '.subText',
            opacity: [0, 1], // Change the opacity from 0 to 1
        });
           
        tl.add({
            targets: '#check_projects',
            opacity: [0, 1], // Change the opacity from 0 to 1
        });
        tl.add({
            targets: '#l1',
            opacity: [0, 1], // Change the opacity from 0 to 1
        });
        tl.add({
            targets: '#myskills',
            opacity: [0, 1], // Change the opacity from 0 to 1
        });
        tl.add({
            targets: '#2,#3,#4,#5',
            opacity: [0, 1], // Change the opacity from 0 to 1

        });
        document.querySelector('#l1').style.display = 'block';

     
       
        setTimeout(() => {
          loadingContainer.style.display = 'none';
        }, 1000);
    }, 4000);
  

    

    let currentIndex = 0;
    let timer = setInterval(() => {
        // create a new div element
        let div = document.createElement('div');
        // add a class to the div
        div.classList.add('dot');
        // append the div to the loading text
        
        // set the text of the loading text
        loadingText.textContent = texts[currentIndex];
        loadingText.appendChild(div);

       
        currentIndex = (currentIndex + 1) % texts.length;
        if (currentIndex === texts.length-1) {
            clearInterval(timer);

            /*setTimeout(() => {
               
                let loadingContainer = document.querySelector('.loading-container');
                loadingContainer.style.animation = 'fadeout 1s forwards';
                document.querySelector('main').style.display = 'block';
                var tl = anime.timeline({

                    opacity: [0, 1], // Change the opacity from 0 to 1
                    duration: 600,
                    
                    easing: 'easeInOutQuad'
                });
            
                tl.add({
                    targets: '.header_row',
                    opacity: [0, 1], // Change the opacity from 0 to 1
                });
                  
                tl.add({
                    targets: '.name',
                    opacity: [0, 1], // Change the opacity from 0 to 1
                });
                tl.add({
                    targets: '.subText',
                    opacity: [0, 1], // Change the opacity from 0 to 1
                });
            
                tl.add({
                    targets: '#check_projects',
                    opacity: [0, 1], // Change the opacity from 0 to 1
                });
             
               
                setTimeout(() => {
                  loadingContainer.style.display = 'none';
                }, 1000);
            }, 2000);*/
          
        }
    }, 200);

    // Stop the animation after a certain duration (e.g., 3 seconds)
    let duration = 200 * texts.length
    setTimeout(() => {
        clearInterval(timer);

    }, duration);
}

init_LoadScreen();