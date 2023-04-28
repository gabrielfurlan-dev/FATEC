<template>



  <div class="bg-black flex align-center h-8 pt-1">
    <a href="#">
      <span class="text-white p-10"> <b>Dummy</b>Store </span>
    </a>
    <hr />
    <ul class=" flex row mx-10 text-white underline-offset-1">
      <li class="mx-5">
        <router-link to="/"> Home </router-link>
      </li>
      <li class="mx-5">
        <router-link to="/products"> Produtos </router-link>
      </li>
    </ul>
    </div>
  <router-view />
</template>

<script setup lang="ts">
import router from './router/Index';

</script>

<style scoped>

</style>