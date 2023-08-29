const h1Element = document.querySelector('.articles__discover__h1');
const pElement = document.querySelector('.articles__discover__p');
const headerElement = document.querySelector('.header');

// BUTTONS
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');

// ARTICLES * 3
const contentList = [
  {
    h1: `Discover innovative ways to decorate`,
    p: `We provide unmatched quality, comfort, and style for property owners across the
        country.
        Our experts combine form and function in bringing your vision to life. Create a room in your
        own style with our collection and make your property a reflection of you and what you love.`,
        mobileBackgroundImage: 'url(/images/mobile-image-hero-1.jpg)',
        desktopBackgroundImage: 'url(/images/desktop-image-hero-1.jpg)'
  },
  {
    h1: `We are available all across the globe`,
    p: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`,
        mobileBackgroundImage: 'url(/images/mobile-image-hero-2.jpg)',
    desktopBackgroundImage: 'url(/images/desktop-image-hero-2.jpg)'
  },
  {
    h1: `Manufactured with the best materials`,
    p: `Elevate your living space with our curated selection of furniture and decor. Our pieces blend craftsmanship, comfort, and design to create a space that truly feels like home.`,
    mobileBackgroundImage: 'url(/images/mobile-image-hero-3.jpg)',
    desktopBackgroundImage: 'url(/images/desktop-image-hero-3.jpg)'
  }
];

// INDEX OF ARTICLE
let currentIndex = 0;

// UPDATE CONTENT
function updateContent(index) {
  h1Element.textContent = contentList[index].h1;
  pElement.textContent = contentList[index].p;


  
  const backgroundImage = window.innerWidth >= 1440 ?
    contentList[index].desktopBackgroundImage :
    contentList[index].mobileBackgroundImage;
  
  headerElement.style.backgroundImage = backgroundImage;

}

// PREVIOUS BUTTON
previousButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + contentList.length) % contentList.length;
  updateContent(currentIndex);
});

// BUTTON NEXT
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % contentList.length;
  updateContent(currentIndex);
});

// INIT
updateContent(currentIndex);
