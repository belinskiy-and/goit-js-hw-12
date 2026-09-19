import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  loadMoreButton,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const formElem = document.querySelector('.form');

let page = 1;
const PER_PAGE = 15;
let searchText = '';

formElem.addEventListener('submit', handleSubmit);
loadMoreButton.addEventListener('click', onLoadMore);

async function handleSubmit(e) {
  e.preventDefault();

  hideLoadMoreButton();
  clearGallery();

  page = 1;

  searchText = e.target.elements['search-text'].value.trim();

  if (!searchText) {
    iziToast.error({
      message: 'Enter search text',
      position: 'topRight',
    });

    return;
  }

  showLoader();

  try {
    const data = await getImagesByQuery(searchText, page, PER_PAGE);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }

    createGallery(data.hits);

    if (page * PER_PAGE < data.totalHits) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });
  } finally {
    e.target.reset();
    hideLoader();
  }
}

async function onLoadMore() {
  page++;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(searchText, page, PER_PAGE);

    createGallery(data.hits);

    if (page * PER_PAGE < data.totalHits) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    }

    const galleryItem = document.querySelector('.gallery-item');
    const itemHeight = galleryItem.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: itemHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.info({
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
