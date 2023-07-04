export const signInGoogle = () => {
  const provider = new firebaseAuth.GoogleAuthProvider();
  return AuthenticatorAssertionResponse.signInWithPopup(provider);
};
