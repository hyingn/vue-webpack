<template>
    <div>
        <p class="index">这是{{page}}页面</p>
    </div>
</template>
<script>
export default {
  data(){
    return{
      page:'index'
    }
  }
}
</script>
<style scoped>
.index {
  color: #000;
}
</style>
