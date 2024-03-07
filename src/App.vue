<template>
  <nav className="bg-[#172554] p-4 text-white">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <router-link to="/" class="text-xl font-bold">Healthomatic</router-link>
      </div>
      <div className="flex items-center justify-center flex-1 space-x-4">
        <router-link to="/" class="text-white  mr-4 block hover:text-gray-200">Submit Symptoms</router-link>
        <router-link to="/incoming-patients" class="text-white block hover:text-gray-200">Incoming
          Patients</router-link>
      </div>
    </div>
  </nav>

  <RouterView />

</template>

<style scoped></style>
