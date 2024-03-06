<template>
  <nav className="bg-[#1e3a8a] p-4 text-white">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <router-link to="/" class="text-xl font-bold">Healthomatic</router-link>
      </div>
      <div className="flex items-center justify-center flex-1 space-x-4">
        <router-link to="/" class="text-white  mr-4 block hover:text-gray-200">Submit Symptoms</router-link>
        <router-link to="/incoming-patients" class="text-white block hover:text-gray-200">Incoming Patients</router-link>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

export default {

  setup() {
    const tab = ref('Home')
    const leftDrawerOpen = ref(false)

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      tab,
      leftDrawerOpen,
      toggleLeftDrawer,
      model: ref('home'),
      options: [
        { label: 'Home', value: 'home', to: '/' },
        { label: 'Pricing', value: 'pricing', to: '/pricing' },
        { label: 'About', value: 'about', to: '/about' },
        { label: 'Contact', value: 'contact', to: '/contact' }
      ]
    }
  }
}

</script>

<style scoped></style>
