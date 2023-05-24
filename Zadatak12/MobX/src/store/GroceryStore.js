import { observable, computed, action, makeObservable } from "mobx";

class GroceryStore{
    constructor(){
        makeObservable(this);
    }

    @observable
    groceries = [];

    @action
    add(g){
        this.groceries.push(g);
    }

    @action
    delete(name){
        this.groceries.remove(name);
    }

    @computed
    get numOfGroceries(){
        return this.groceries.length;
    }
}

export default GroceryStore;