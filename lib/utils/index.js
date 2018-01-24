'use babel';

import {
  CLS_SLEEP_MODE,
  CLS_WIDE_BACKGROUND,
  SLEEP_MODE_TIME,
  SLEEP_MODE_IMAGE_URL,
} from '../constants';

let timeout;

const showImage = () => {
  const wideBackround = document.getElementById(CLS_WIDE_BACKGROUND);
  wideBackround.style.backgroundImage = `url(${atom.config.get(SLEEP_MODE_IMAGE_URL)})`;
};

const startNewTimer = () => {
  document.body.classList.remove(CLS_SLEEP_MODE);
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    showImage();
    document.body.classList.add(CLS_SLEEP_MODE);
  }, (atom.config.get(SLEEP_MODE_TIME) * 1000));
};

export {
  startNewTimer,
};
