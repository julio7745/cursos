<script setup lang="ts">

  import { ref, watchEffect, onMounted, onUpdated, onActivated, computed } from 'vue';
  import md5 from 'md5';

  const loadAuthenticated = async () => {
    user.value.username = 'mauricio.monteiro';
    user.value.name = 'Mauricio Monteiro';
    user.value.email = 'mauricio.monteiro@ifmg.edu.br';
  };

  onMounted(loadAuthenticated);

  interface User {
      name: string;
      username: string;
      email: string;
  }

  const user = ref<User>({
    username:'',
    name: '',
    email: ''
  });
</script>

<template>

  <div class="container">
      <div class="row">
        <div class="col">
        &nbsp;
        </div>
      </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col">
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            User Profile
          </div>
          <div class="card-body">
            <div class="container">
              <div class="row">
                <div class="col">
                  <h4 class="card-title">{{user.name}}</h4>
                  <p class="card-text">
                    <b>E-mail:</b> <a :href="'mailto:' + user.email">{{user.email}}</a>
                  </p>
                </div>
                <div class="col">
                  <img :src="'https://www.gravatar.com/avatar/' + md5(user.email) + '?s=200'" class="rounded float-end" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>