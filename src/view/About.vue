<template>
    <div>
        <p class="about">这是{{page}}页面</p>
    </div>
</template>
<script>
export default {
  data(){
    return{
      page:'about'
    }
  }
}
</script>
<style scoped>
.about {
  color: red;
}
</style>
