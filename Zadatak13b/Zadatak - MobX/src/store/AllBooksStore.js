import { observable, action, makeObservable } from 'mobx';

class AllBooksStore {
  constructor() {
    makeObservable(this);
  }

  @observable 
  allBooks = {
      data: ""
  };

  @action
  add(b) {
    this.allBooks = {
        data: b
    }
  }

}

export default AllBooksStore;
