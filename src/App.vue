<template>
  <div id="app" class="min-h-screen flex flex-col bg-gray-100 font-serif">
    <nav class="text-center py-4">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/rules">
        Rules
      </router-link>
    </nav>

    <router-view class="container flex-1 flex flex-col mx-auto px-8" />
  </div>
</template>

<style src="./assets/tailwind.css">
</style>

<style>
#app {
  min-height: -webkit-fill-available;
}
</style>
