<template>
   <div class="nav-breadcrumb-wrap">
      <div class="container">
        <nav class="nav-breadcrumb">
          <a href="/">Home</a>
          <!-- 为了通用，使用插槽功能 -->
          <slot></slot>
        </nav>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>