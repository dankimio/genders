<template>
  <div id="app">
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/about">
      About
    </router-link>

    <div class="container mx-auto px-8">
      <router-view />
    </div>
  </div>
</template>

<style src="./assets/tailwind.css">
</style>
