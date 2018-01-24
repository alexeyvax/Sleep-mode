'use babel';

import config from './config';
import { startNewTimer } from './utils';
import { CLS_WIDE_BACKGROUND } from './constants';

function activate() {
  const wideBackground = document.createElement('div');
  wideBackground.classList.add(CLS_WIDE_BACKGROUND);
  wideBackground.id = CLS_WIDE_BACKGROUND;
  document.body.appendChild(wideBackground);

  document.addEventListener('mousemove', () => startNewTimer());
  document.addEventListener('click', () => startNewTimer());
  atom.views.getView(atom.workspace).addEventListener('keydown', () => startNewTimer());
}

export {
  config,
  activate,
};
