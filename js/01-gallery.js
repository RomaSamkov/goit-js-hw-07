import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImagesContainerEl = document.querySelector('.gallery');
const itemsMurkup = createItemsImagesMurkup(galleryItems);
galleryImagesContainerEl.insertAdjacentHTML('beforeend', itemsMurkup);
galleryImagesContainerEl.addEventListener('click', onOpenModal);

function createItemsImagesMurkup(item) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
    }).join('');
} 

function onOpenModal(event) {
    event.preventDefault();
    if (event.target.classList.contains('gallery')) {
        return;
    }
    const sourceImg = event.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${sourceImg}"width="800" height="600">`);
    instance.show();
    document.addEventListener('keydown', onEscKeyPress);

    function onEscKeyPress(event) {
    if (event.code !== 'Escape') {
        return;
    }
    instance.close();
    document.removeEventListener('keydown', onEscKeyPress)
};
}

