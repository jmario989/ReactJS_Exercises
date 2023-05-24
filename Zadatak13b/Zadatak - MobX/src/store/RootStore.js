import AllBooksStore from "./AllBooksStore";
import AuthorBooksStore from "./AuthorBooksStore";

class RootStore {
    constructor() {
      this.allBooksStore = new AllBooksStore();
      this.authorBooksStore = new AuthorBooksStore();
    }
} 

export default RootStore;