import { observable, action, makeObservable } from 'mobx';

class AuthorBooksStore {
  constructor() {
    makeObservable(this);
  }

  @observable 
  authorsBooks = {
        data: ""
    };

  @action
  add(b) {
    this.authorsBooks = {
        data: b
    }
  }

}

export default AuthorBooksStore;
