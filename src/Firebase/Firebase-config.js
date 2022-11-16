
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDexwhGp8rbhFWNxnZYyfL8po-OpMP2oqg",
  authDomain: "fir-auth-aa608.firebaseapp.com",
  projectId: "fir-auth-aa608",
  storageBucket: "fir-auth-aa608.appspot.com",
  messagingSenderId: "532415489281",
  appId: "1:532415489281:web:da8aa49553041468696700"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>{
  // console.log('hi');
  signInWithRedirect(auth, provider)
  .then((result) =>{
     console.log(result);
  })
  .catch((error) =>{
    console.log(error);
  })
};


// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-community/google-signin';

// import { GoogleSignin } from '@react-native-community/google-signin';

// GoogleSignin.configure();

// GoogleSignin.configure({
//   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//   webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   hostedDomain: '', // specifies a hosted domain restriction
//   loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//   accountName: '', // [Android] specifies an account name on the device that should be used
//   iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
// });

// // import statusCodes along with GoogleSignin
// import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

// // Somewhere in your code
// signIn = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     this.setState({ userInfo });
//   } catch (error) {
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       // user cancelled the login flow
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       // operation (e.g. sign in) is in progress already
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       // play services not available or outdated
//     } else {
//       // some other error happened
//     }
//   }
// };

// getCurrentUserInfo = async () => {
//   try {
//     const userInfo = await GoogleSignin.signInSilently();
//     this.setState({ userInfo });
//   } catch (error) {
//     if (error.code === statusCodes.SIGN_IN_REQUIRED) {
//       // user has not signed in yet
//     } else {
//       // some other error
//     }
//   }
// };

// isSignedIn = async () => {
//   const isSignedIn = await GoogleSignin.isSignedIn();
//   this.setState({ isLoginScreenPresented: !isSignedIn });
// };

// getCurrentUser = async () => {
//   const currentUser = await GoogleSignin.getCurrentUser();
//   this.setState({ currentUser });
// };

// signOut = async () => {
//   try {
//     await GoogleSignin.revokeAccess();
//     await GoogleSignin.signOut();
//     this.setState({ user: null }); // Remember to remove the user from your app's state as well
//   } catch (error) {
//     console.error(error);
//   }
// };

// revokeAccess = async () => {
//   try {
//     await GoogleSignin.revokeAccess();
//     console.log('deleted');
//   } catch (error) {
//     console.error(error);
//   }
// };

// try {
//   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//   // google services are available
// } catch (err) {
//   console.error('play services are not available');
// }

