<template>
    <div class="box">
      <!-- 头部导航栏 -->
      <ul class="navbar">
        <li>行业监管平台</li>
        <li>舆情监控平台</li>
        <li>城市管理</li>
        <li>投诉管理平台</li>
        <li>联合执法平台</li>
        <li>诚信评价平台</li>
        <li>远程决策平台</li>
        <li>统一支付平台</li>
        <li>电子商务平台</li>
        <li>营销平台</li>
        <li>统一分销平台</li>
      </ul>
      <!-- 页面主体区域 -->
      <el-container>
        <!-- 页面侧边栏 -->
        <el-aside :width="isCollapse ? '64px' : '20.17rem'">
          <!-- 侧边栏菜单区域 -->
          <el-menu
            default-active="2"
            :collapse-transition="false"
            :collapse="isCollapse"
            unique-opened>
            <el-menu-item index="1-4-1" class="home">
              <template>
                <i class="el-icon-s-home"></i>  
                <span style="color: #333333;">首页</span>
              </template> 
            </el-menu-item>
            <!-- 一级菜单 -->
            <el-submenu :index="index + ''" v-for="(item, index) in 10" :key="index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>一级菜单</span>
              </template>
              <!-- 二级菜单 -->
              <el-submenu index="1-4" class="second-menu">
                <template slot="title">
                  <span class="second-menu-title">二级菜单</span>
                </template>
                <el-menu-item index="1-4-1">功能2</el-menu-item>
                <el-menu-item index="1-4-1">功能3</el-menu-item>
                <el-menu-item index="1-4-1">功能4</el-menu-item>
              </el-submenu>
            </el-submenu>
            <div class="toggle-button" @click="toggleCollapse">|||</div>
          </el-menu>
        </el-aside>
        <!-- 右侧主体区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
</template>

<script>
export default {
  name: 'Traffic',
  data () {
    return {
      isCollapse: false,
      menuList: [
        {id: 1, text: '一级菜单'},
        {id: 1, text: '一级菜单'},
        {id: 1, text: '一级菜单'},
        {id: 1, text: '一级菜单'},
        {id: 1, text: '一级菜单'},
        {id: 1, text: '一级菜单'},
        {id: 1, text: '一级菜单'},
        {id: 1, text: '一级菜单'},
        {id: 1, text: '一级菜单'},
        {id: 1, text: '一级菜单'}
      ]
    }
  },
  methods: {
    toggleCollapse () {
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style lang='less' scoped>
.box{
  height: 100%;
}

.navbar{
  height: 5rem;
  position: absolute;
  top: 0px;
  left: 20rem;
  display: flex;
  align-items: center;

  li{
    width:10.33rem;
    height:2.67rem;
    text-align: center;
    line-height: 2.67rem;
    font-size:1.17rem;
    font-weight: 600;
    color: #ffffff;
    border-radius: 1.67rem;
    cursor: pointer;
  }
  >li:hover{
    background:rgba(255,255,255,.2);
  }
}

.el-container{
  height: 100%;
}
.el-menu{
  height: 100%;
}
.second-menu{ 
  text-align: center;
}
.second-menu-title{
  color: #999999;
}

.toggle-button{
  width: 100%;
  background-color: #4a5064;
  text-align: center;
  font-size: 10px;
  color: #fff;
  line-height: 24px;
  letter-spacing: 0.2em;
  cursor: pointer;
  position: absolute;
  bottom: 0;
}
</style>
