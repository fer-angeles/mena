import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import firebase from 'firebase';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const firebaseConfig = {
  apiKey: "AIzaSyBIt4hEDeB_R7DGh4ckV8jREXTi9IgoE7I",
  authDomain: "prueba-b9407.firebaseapp.com",
  projectId: "prueba-b9407",
  storageBucket: "prueba-b9407.appspot.com",
  messagingSenderId: "368906420891",
  appId: "1:368906420891:web:594f2748735b53f2c47c3e"
};

firebase.initializeApp(firebaseConfig);

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});