import { makeAutoObservable } from 'mobx'

class Store {
  constructor() {
    makeAutoObservable(this)
  }

  userId() {
    return 1231
  }
}

export default new Store()