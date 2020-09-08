<template>
  <div id="app" class="min-h-screen flex flex-col bg-gray-100">
    <nav class="text-center py-4">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/about">
        About
      </router-link>
    </nav>

    <router-view class="container flex-1 flex flex-col mx-auto px-8" />
  </div>
</template>

<style src="./assets/tailwind.css">
</style>
