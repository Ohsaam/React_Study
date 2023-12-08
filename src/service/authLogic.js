import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
class AuthLogic {
  constructor() {
    this.auth = getAuth();
    this.gitProvider = new GithubAuthProvider();
    this.googleProvider = new GoogleAuthProvider();
  }
  getUserAuth = () => {
    return this.auth;
  };
  getGoogleAuthProvider = () => {
    return this.googleProvider;
  };
} //end of AuthLogic
export default AuthLogic;
export const loginGoogle = (auth, googleProvider) => {
  console.log('loginGoogle호출 성공');
  console.log(googleProvider);
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log(result);//object Object - 안보임 - uid, displayName-realname, email
      console.log(JSON.stringify(result));
      const user = result.user;
      resolve(user)
    }).catch((error) => reject(error));
  });
}; //end of loginGoogle
