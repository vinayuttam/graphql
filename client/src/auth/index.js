class Auth {
  static loggedIn() {
    return !!sessionStorage.token;
  }

  static logout() {
    sessionStorage.removeItem('token');
  }
}

export default Auth;
