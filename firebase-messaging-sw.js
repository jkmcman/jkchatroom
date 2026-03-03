importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');


firebase.initializeApp({
  apiKey: "AIzaSyCvufbt4T_gix3WAvto-q1Ua7gjtbL5FlA",
  authDomain: "schatroom-bc620.firebaseapp.com",
  databaseURL: "https://schatroom-bc620-default-rtdb.firebaseio.com/",
  projectId: "schatroom-bc620",
  storageBucket: "schatroom-bc620.firebasestorage.app",
  messagingSenderId: "786847918411",
  appId: "1:786847918411:web:44e50f480b1039592060ce",
  measurementId: "G-67G6D5WDBL"
};


const messaging = firebase.messaging();


messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || "/icon.png"
  };


  self.registration.showNotification(notificationTitle, notificationOptions);
});