// Import scripts required for Firebase Messaging
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDFVM-BNN8tNYQaSjguCXL8hyBXAQipFlY",
  authDomain: "member-app-jnftgw.firebaseapp.com",
  projectId: "member-app-jnftgw",
  storageBucket: "member-app-jnftgw.appspot.com",
  messagingSenderId: "176661692951",
  appId: "1:176661692951:web:9d4d245eafc246c96b1252"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
