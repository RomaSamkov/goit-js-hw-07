import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImagesContainerEl = document.querySelector('.gallery');
const itemsMurkup = createItemsImagesMurkup(galleryItems);
galleryImagesContainerEl.insertAdjacentHTML('beforeend', itemsMurkup);

function createItemsImagesMurkup(item) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="${description}"
        />
      </a>`
  }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
});