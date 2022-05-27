import { publish } from 'gh-pages';

publish(
 'docs', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/hgergely03/hgergely03.git',
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);