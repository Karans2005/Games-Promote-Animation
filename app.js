// ToggleButton 
const toggleBtn = document.getElementById("toggleBtn");
const navLinks = document.getElementById("navLinks");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// home section and btn select.
const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

// All video launching.
const movieList =['hero-1.mp4','hero-2.mp4','hero-3.mp4','hero-4.mp4'];

// use addEventListener for video playing.
let index = 0;

nextButton.addEventListener('click',function(){
    index += 1;
    video.src = movieList[index];

    if(index === 3){
        // index = 0;
        index = -1;
    }
})

// hero section 
function watchTrailer(){
  window.open('https://www.youtube.com/watch?v=P2rXwGOAfes')
}

// COMING SOON 
function comingSoon1(){
  window.open('https://www.youtube.com/watch?v=UOvFtdxkLhc&list=PLpnwDi4vJmV9SG1f4qGja-4vb5-GwT_um')
}

function comingSoon2(){
  window.open('https://www.youtube.com/watch?v=SDLMe29Skfs')
}

function comingSoon3(){
  window.open('https://www.youtube.com/watch?v=hn0HC0gN3mA')
}

function comingSoon4(){
  window.open('hero-1.mp4')
}

function comingSoon5(){
  window.open('feature-5.mp4')
}

function comingSoon6(){
  window.open('https://www.youtube.com/results?search_query=all+game+coming+soon')
}

// Contact section 

function contact(){
  window.open('https://karans2005.github.io/Contact-Section/')
}