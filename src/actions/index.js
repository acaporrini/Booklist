export function selectBook(book){
  // SelectBook is an ActionCreator, it needs to return an action, an object with tyoe property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
