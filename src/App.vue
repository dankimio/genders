<template>
  <div id="app" class="min-h-screen flex flex-col bg-gray-100 font-serif">
    <router-view class="container flex-1 flex flex-col mx-auto px-8 pt-6" />

    <nav class="text-center py-4">
      <router-link to="/rules" class="mr-4">
        Rules
      </router-link>
      <router-link to="/my-words" class="mr-4">
        My words
      </router-link>
    </nav>
  </div>
</template>

<style src="./assets/tailwind.css">
</style>

<style>
#app {
  min-height: -webkit-fill-available;
}

a {
  @apply .underline;
}
</style>
