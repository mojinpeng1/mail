<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span>Goodsss</span>
    </nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">
            Price
            <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short" />
            </svg>
          </a>
          <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter">
            <dl class="filter-price">
              <dt>Price:</dt>
             
              <dd>
                <a href="javascript:void(0)" @click="setPriceFilter('all')" v-bind:class="{'cur':priceChecked=='all'}">All</a>
                </dd>
              <dd v-for="(priceItem,index) in priceFilter" :key="index">
                <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur':priceChecked==index}">{{priceItem.startPrice}} - {{priceItem.endPrice}}</a>
              </dd>
             
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item,index) in goodsList" :key="index">
                  <div class="pic">
                    <a href="#">
                      <img v-lazy="'/static/'+item.prodcutImg"/>
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.prodcutPrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav-footer></nav-footer>
  </div>
</template>

<script>
import "./../assets/css/base.css";
import "./../assets/css/product.css";
import NavHeader from "@/components/NavHeader";
import NavFooter from "@/components/NavFooter";
import NavBread from "@/components/NavBread";

import axios from "axios";

export default {
  data(){
    return{
      goodsList:[],
      // 价格过滤区间
      priceFilter:[
        {startPrice:'0.00',
        endPrice:'50.00'},
        {
          startPrice:'50.00',
          endPrice:'200.00'
        },
        {
          startPrice:'200.00',
          endPrice: '500.00'
        }
      ],
      priceChecked:'all'// 选中的过滤项
    }
  },
  mounted: function(){
    this.getGoodsList();
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread
  },
  methods:{
    getGoodsList(){
        axios.get("/api/goods").then((res) => {
          this.goodsList=res.data.result;
        });
    },
    setPriceFilter(index){
      console.log(index)
       this.priceChecked = index;
    }
  }
};
</script>

<style scoped>
</style>