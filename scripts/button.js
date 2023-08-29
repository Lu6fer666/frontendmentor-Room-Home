const buttonToMove = document.querySelector('.buttonscroll');
const divArticles = document.querySelector('.articles');
const divHeader = document.querySelector('.header');

const moveButtonToDesktop = () => {
    divArticles.appendChild(buttonToMove);
};

const moveButtonToMobile = () => {
    // appendChild for move the button to other parent
    divHeader.appendChild(buttonToMove);
  };

  // if/else for 1440p
  const moveButtonBasedOnScreenWidth = () => {
    if (window.innerWidth >= 1440) {
      moveButtonToDesktop();
    } else {
      moveButtonToMobile();
    }
  };
  
  // Listener resize
  window.addEventListener('resize', moveButtonBasedOnScreenWidth);
  
  // Refresh page
  moveButtonBasedOnScreenWidth();