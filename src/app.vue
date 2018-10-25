<template>
  <div id="app">
    <ul>
      <li class="item"><router-link to='/about'>about</router-link></li>
      <li><router-link to='/'>index</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>
<style scoped>
.item {
  color: blueviolet;
}
</style>
