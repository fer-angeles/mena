<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <form @submit.prevent="Login">
        <input type="text" v-model="email" placeholder="correo">
        <input type="text" v-model="password" placeholder="password">
        <input type="submit" value="Entrar">
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref } from 'vue';
import firebase from 'firebase';
export default {

  setup(){
    const email = ref("");
    const password = ref("");

    const Login = () =>{
      console.log(email.value);
      firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then(data => console.log(data)).catch(err => alert(err.message));

    }

    return{
      Login,
      email,
      password
    }
  }

}

</script>

<style scoped>

</style>