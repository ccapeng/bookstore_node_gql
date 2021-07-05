import { DataStore } from 'notarealdb';

const store = new DataStore('./data');

let categories = store.collection('categories');
let publishers = store.collection('publishers');
let authors = store.collection('authors');
let books = store.collection('books');

export default {
   categories,
   publishers,
   authors,
   books
};