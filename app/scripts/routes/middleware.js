import store from '../store';

export default async function(to, from, next) {
  if (Object.keys(store.books).length < 1) {
    await store.getBooks();
  }
  next();
}
