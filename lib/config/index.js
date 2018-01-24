'use babel';

const config = {
  imageUrl: {
    title: 'Link to image',
    description: 'Add your link to your image',
    type: 'string',
    default: `${[atom.project.getPaths()]}/lib/images/default-image.svg`,
  },
  time: {
    title: 'Timer, seconds',
    description: 'Set time to show your image',
    type: 'number',
    default: 60,
  }
};

export default config;
