// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const createdGallery = galleryItems.map(item => 
  `<li>
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"/>
  </a>
  </li>`).join('');

galleryRef.innerHTML = createdGallery;

  new SimpleLightbox('.gallery a',
    {
      overlay:true,
      nav: true,
      navText: ['←', '→'],
      captionSelector: 'img',
      captionType: 'attr',
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
      close: true,
      closeText: '×',
      docClose: true,
    
    });

console.log(galleryItems);
