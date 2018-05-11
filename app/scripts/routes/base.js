import NotFound from 'views/not-found';

const Library = () => import('views/library/index');
const List = () => import('views/library/list');
const Contents = () => import('views/library/contents');

export default [
  {
    path: '/library',
    name: 'library',
    component: Library,
    alias: '/'
  },
  {
    path: '/chapter/:id',
    name: 'chapter',
    component: List
  },
  {
    path: '/book/:id',
    name: 'book',
    component: Contents
  },
  {
    path: '*',
    component: NotFound
  }
];
