export class User {
  constructor(public $uid: string) {}

  isLoggedIn() {
    return this.$uid != "";
  }
}