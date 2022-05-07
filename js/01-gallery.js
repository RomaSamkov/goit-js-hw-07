import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImagesContainerEl = document.querySelector('.gallery');
const itemsMurkup = createItemsImagesMurkup(galleryItems);
galleryImagesContainerEl.insertAdjacentHTML('beforeend', itemsMurkup);
galleryImagesContainerEl.addEventListener('click', onOpenModal);

let currentIndex = 0;
const instance = basicLightbox.create(`
    <img src=""width="800" height="600">`, {
      onShow: (instance) => { window.addEventListener('keydown', onBtnPress); },
      onClose: (instance) => { window.removeEventListener('keydown', onBtnPress) }
    });

function createItemsImagesMurkup(item) {
    return galleryItems.map(({ preview,original, description }, index) => {
        return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          data-index="${index}"
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
  setUrl(sourceImg);
  currentIndex = Number(event.target.dataset.index);
  console.log(currentIndex);
  
    
    instance.show();

  
}

function setUrl(url) {
  instance.element().querySelector('img').src = url;
}
// function onEscKeyPress(event) {
//     if (event.code === 'ArrowRight') {
//       console.log('Right:');
//       currentIndex += 1;
//       if (currentIndex > galleryItems.length -1) {
//         currentIndex = 0;
//       }
//       console.log(currentIndex);
//       console.log(galleryItems[currentIndex].original);
//       setUrl(galleryItems[currentIndex].original);
      
//     }
//     if (event.code === 'ArrowLeft') {
//       console.log('Left');
//       currentIndex -= 1;
//       if (currentIndex < 0) {
//         currentIndex = galleryItems.length - 1;
//       }
//       setUrl(galleryItems[currentIndex].original);
//     }
//     if (event.code === 'Escape') {
//         instance.close();
//     }
//     
//     };
function onBtnPress(event) {
  switch (event.code) {
    case 'ArrowRight':
      currentIndex += 1;
      if (currentIndex > galleryItems.length - 1) {
        currentIndex = 0;
      }
      setUrl(galleryItems[currentIndex].original);
      break;
    case 'ArrowLeft':
      currentIndex -= 1;
      if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
      }
      setUrl(galleryItems[currentIndex].original);
      break;
    case 'Escape':
      instance.close();
      break;
    default: console.log('Picture key');
    }
    
}