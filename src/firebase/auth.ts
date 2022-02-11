import {firebase} from ".";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const registerUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const auth = getAuth(firebase);
  auth.languageCode = "pt-BR";

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Aqui user register", user);

    return { user };
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error code:", errorCode);
    console.log("Error message:", errorMessage);

    return { code: errorCode, message: errorMessage };
  }
};

const loginWithEmailAndPassword = async (email: string, password: string) => {
  const auth = getAuth(firebase);
  auth.languageCode = "pt-BR";

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Aqui user login", user);

    return { user };
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return { code: errorCode, message: errorMessage };
  }
};

const loginWithGoogle = async () => {
  const auth = getAuth(firebase);
  auth.languageCode = "pt-BR";

  try {
    const result = await signInWithPopup(auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential?.accessToken;
    const user = result.user;
    console.log("Aqui user login google", user);
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("Error code:", errorCode);
    console.log("Error message:", errorMessage);
    console.log("Error email:", email);
    console.log("Error credential:", credential);
  }
};

const logout = async (logoutCallback?: (success: boolean) => void) => {
  const auth = getAuth(firebase);
  auth.languageCode = "pt-BR";
  try {
    signOut(auth);
    logoutCallback && logoutCallback(true);
  } catch (error) {
    logoutCallback && logoutCallback(false);
  }
};

export {
  registerUserWithEmailAndPassword,
  loginWithEmailAndPassword,
  loginWithGoogle,
  logout,
};
