<template>
  <div id="app">
    <v-sheet class="bg-indigo-lighten-4 pa-12" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form @submit.prevent="submitForm">
          <v-text-field class="mb-2" label="Email" v-model="email"></v-text-field>

          <v-text-field label="Password" placeholder="Enter your password" v-model="password"></v-text-field>

          <br />

          <v-btn color="success" size="large" type="submit" variant="elevated" block>
            Sign In
          </v-btn>
        </v-form>
      </v-card>
      <v-card v-if="responseData">
        <v-card-title>Token: </v-card-title>
        <v-card-text>{{ responseData.token }}</v-card-text>
      </v-card>
      <v-card>
        <v-text-field v-model="token" label="Enter your token" required></v-text-field>
      </v-card>

      <v-btn @click="authorizeWithToken" color="primary" :disable="!token" to="page">
        Authenticate
      </v-btn>

    </v-sheet>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

let email = ref('');
let password = ref('');
let token = ref('');
let responseData = ref(null);

function submitForm() {
  const credentials = {
    email: email.value,
    password: password.value
  }
  client().post('/login', credentials)
    .then(response => {
      responseData.value = response.data
    })
    .catch(error => {
      console.log(error)
    })
}
function authorizeWithToken() {
  console.log(token.value)
  client().get('/test')
    .then(response => {
      responseData.value = response.data;
  })
    .catch(error => { 
      console.log(error)
      })
}
function client(){
    const client = axios.create({
      baseURL : 'http://127.0.0.1:8000/api'
    })
    client.defaults.headers.common['Authorization'] = 'Bearer ' + token.value
    client.defaults.withCredentials = true
    client.defaults.withXSRFToken = true
    return client
}
</script>
