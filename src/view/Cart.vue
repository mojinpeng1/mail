<template>
    <div>
        <span>这里是购物车</span>
        <!-- 
            router     路由       获取参数 用  this.$router.params...
            route      单个路由   获取参数用    this.$route.query
         -->
         <br>
         <span>购物车id是：{{this.$route.query.goodsId}}</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>