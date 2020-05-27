const tvShowsList = document.querySelector('.tv-shows__list');
const changeImage = event => {
    const card = event.target.closest('.tv-shows__item');
    
    if (card){
        const img = card.querySelector('.tv-card__img');
        const changeImage = img.dataset.backdrop;
        if (changeImg){
        img.dataset.backdrop = img.src;
        img.src = changeImg;
        }  

    }
    
}
tvShowsList.addEventListener('mouseover', changeImage);
tvShowsList.addEventListener('mouseout', changeImage);

