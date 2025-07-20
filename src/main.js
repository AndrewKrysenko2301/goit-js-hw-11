import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
iziToast.settings({
  position: 'topRight',
});

const form = document.getElementById('search-form');
const input = form.querySelector('input[name="searchQuery"]');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
      iconUrl: './img/error-icon.svg',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.info({
        title: '',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        iconUrl: './img/error-icon.svg',
      });
      hideLoader();
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
