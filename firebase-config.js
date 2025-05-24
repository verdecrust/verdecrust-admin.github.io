// Replace with your actual config
const firebaseConfig = {
  apiKey: "AIzaSyCfU151a44eu7Nl_sN5wgHsMSsuYxj8770",
  authDomain: "verdecrust.firebaseapp.com",
  projectId: "verdecrust",
  appId: "1:916648139160:web:367454d382d938b199b3ed"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
