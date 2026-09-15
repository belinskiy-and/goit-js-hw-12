import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  clearGallery();

  const searchText = e.target.elements['search-text'].value.trim();

  if (!searchText) {
    iziToast.error({
      message: 'Enter search text',
      position: 'topRight',
    });

    return;
  }

  showLoader();

  const response = getImagesByQuery(searchText);

  response
    .then(images => {
      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        return;
      }
      createGallery(images);
    })
    .catch(error => {
      iziToast.error({
        message: error,
        position: 'topRight',
      });
    })
    .finally(() => {
      e.target.reset();
      hideLoader();
    });
}
