<template>
  <div id="app">
    <nav v-if="false">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/about">
        About
      </router-link>
    </nav>

    <router-view class="container mx-auto px-8" />
  </div>
</template>

<style src="./assets/tailwind.css">
</style>
