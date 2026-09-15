import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElem = document.querySelector('.gallery');
const loaderElem = document.querySelector('.loader');

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function createGallery(images) {
  galleryElem.innerHTML = images
    .map(
      ({
        tags,
        webformatURL,
        largeImageURL,
        likes,
        comments,
        views,
        downloads,
      }) => `
  <li class="gallery-item">
    <a href=" ${largeImageURL}" class="gallery-link">
      <img
        src="${webformatURL}"
        alt="${tags}"
        class="gallery-image"
      />
      <div class="gallery-item-content">
        <ul class="properties-list">
          <li class="properties-item">
            <p class="properties-title">Likes</p>
            <p class="properties-value">${likes}</p>
          </li>
          <li class="properties-item">
            <p class="properties-title">Views</p>
            <p class="properties-value">${views}</p>
          </li>
          <li class="properties-item">
            <p class="properties-title">Comments</p>
            <p class="properties-value">${comments}</p>
          </li>
          <li class="properties-item">
            <p class="properties-title">Downloads</p>
            <p class="properties-value">${downloads}</p>
          </li>
        </ul>
      </div>
    </a>
  </li>  
  `
    )
    .join('');

  gallery.refresh();
}

export function clearGallery() {
  galleryElem.innerHTML = '';
}

export function showLoader() {
  loaderElem.classList.add('visible');
}

export function hideLoader() {
  loaderElem.classList.remove('visible');
}
