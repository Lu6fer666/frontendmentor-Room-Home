const h1Element = document.querySelector('.articles__discover__h1');
    const pElement = document.querySelector('.articles__discover__p');

    // BUTTONS
    const previousButton = document.getElementById('previousButton');
    const nextButton = document.getElementById('nextButton');

    // ARTICLES * 3
    const contentList = [
      {
        h1: `We are available all across the globe`,
        p: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`
      },
      {
        h1: `Manufactured with the best materials`,
        p: `Elevate your living space with our curated selection of furniture and decor. Our pieces blend craftsmanship, comfort, and design to create a space that truly feels like home.`
      }
    ];

    // INDEX OF ARTICLE
    let currentIndex = 0;

    // UPDATE CONTENT
    function updateContent(index) {
      h1Element.textContent = contentList[index].h1;
      pElement.textContent = contentList[index].p;
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