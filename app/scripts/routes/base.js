import NotFound from 'views/not-found';

import getBooks from './middleware';

const Library = () => import('views/library/index');
const Chapters = () => import('views/library/Chapters');
const Contents = () => import('views/library/contents');

export default [
  {
    path: '/library',
    name: 'library',
    component: Library,
    beforeEnter: getBooks,
    alias: '/'
  },
  {
    path: '/chapters/:id',
    name: 'chapters',
    component: Chapters,
    beforeEnter: getBooks
  },
  {
    path: '/contents/:id',
    name: 'contents',
    component: Contents,
    beforeEnter: getBooks
  },
  {
    path: '*',
    component: NotFound
  }
];
