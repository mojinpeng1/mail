<template>
    <div>
        <p>这是商品列表组件</p>
        <!-- 获取动态路由的参数 -->
        <span>商品的id是{{$route.params.goodsId}}</span>
        <br>
        <span>用户是{{$route.params.name}}</span>   
        <!-- 放子组件的路由 -->
        <router-link to="/goodsList/title">显示商品标题</router-link>
        <router-link to="/goodsList/img">显示商品图片</router-link>
        <div>
        <router-view></router-view>     
        </div>
<br>
        <!-- 编程式路由 -->
        <router-link to="/craft">跳转到购物车页面</router-link>
        <Button @click="jump">button- 跳转购物车</Button>
          
          <!-- 命名路由 -->
          <br>
          <router-link :to="{name:'cart'}">button-命名路由跳转</router-link>

    </div>
</template>

<script>
    export default {
        name:'goodsList',
        methods:{
            jump(){
                // 编程式路由
                // this.$router.push('/craft');  // 字符串方式
                this.$router.push({path: '/craft?goodsId=123'});            // 对象方式
                //  前进后退
                // this.$router.go(-2);
            }
        }
    }
</script>

<style scoped>

</style>