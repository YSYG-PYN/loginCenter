<template>
    <el-container class="box">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <img src="../assets/images/home/logo.png"  alt="">
                <span>九寨沟后台管理系统</span>
            </div>
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                 用户名称<i class="el-icon-arrow-down el-icon--right" color="#fff"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>欢迎登录</el-dropdown-item>
                    <el-dropdown-item command="editPassWord" icon="el-icon-lock">修改密码</el-dropdown-item>
                    <el-dropdown-item command="accountManagement" icon="el-icon-user">账户管理</el-dropdown-item>
                    <el-dropdown-item command="toAllocate" icon="el-icon-key">权限分配</el-dropdown-item>
                    <el-dropdown-item command="postManagement" icon="el-icon-house">岗位管理</el-dropdown-item>
                    <el-dropdown-item command="logout" icon="el-icon-switch-button">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>

        <!-- 内容主体区域 -->
        <el-main>
            <ul ref="navbar" class="nav">
                <li>
                    <img src="../assets/images/nav/navbar1.png" alt="">
                    投诉管理平台
                </li>
                <li>
                    <img src="../assets/images/nav/navbar2.png" alt="">
                    联合执法平台
                </li>
                <li>
                    <img src="../assets/images/nav/navbar3.png" alt="">
                    诚信评价平台
                </li>
                <li>
                    <img src="../assets/images/nav/navbar4.png" alt="">
                    远程决策平台
                </li>
                <li>
                    <img src="../assets/images/nav/navbar4.png" alt="">
                    统一支付平台
                </li>
                <li>
                    <img src="../assets/images/nav/navbar6.png" alt="">
                    营销平台
                </li>
                <li>
                    <img src="../assets/images/nav/navbar7.png" alt="">
                    统一分销平台
                </li>
            </ul>
            <!-- 路由占位符 -->
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  created () {},
  methods: {
    async handleCommand (command) {
      if (command === 'logout') {
        const {data: res} = await this.$http.get('/apis/loginCenter/oauth/oauth/revoke-token')
        console.log(res)
        if (res.resCode === 200) {
          window.sessionStorage.clear()
          this.$router.push('/login')
        }
      }
    }
    /*async logout () {
      const {data: res} = await this.$http.get('/loginCenter/oauth/oauth/revoke-token')
      console.log(res)
      if (res.resCode === 200) {
        window.sessionStorage.clear()
        this.$router.push('/login')
      }
    }*/
  },
  watch: {

  }
}
</script>

<style lang="less" scoped>
    .box {
        height: 100%;
        background: #F4F4F4;
    }

    .el-header {
        height: 5rem !important;
        background-color: #4C87FF;
        padding: 0 20px !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow:0px 9px 14px 0px rgba(84,116,181,0.2);

        > div:first-child {
            display: flex;
            align-items: center;
            img{
                width: 3.33rem;
                height: 1.5rem;
            }

            span {
                font-size: 1.33rem;
                font-weight:600;
                color: #ffffff;
                margin-left: 10px;
            }
        }

        .el-dropdown-link{
            font-size: 1.33rem;
            color:rgba(255,255,255,1);
        }
    }

    .el-main{
        padding: 0;

        .nav{
            height: 120px;
            background:linear-gradient(180deg,rgba(88,143,255,1) 0%,rgba(76,135,255,1) 100%);
            display: none;
            align-items: center;

            >li{
                height: 60px;
                padding: 0 20px;
                background:rgba(242,244,248,.2);
                border-radius: 30px;
                font-size:22px;
                color: #fff;
                display: flex;
                align-items: center;
                margin-left: 40px;
                transition: all 0.5s;
                cursor: pointer;
            }
            li:hover{
                transform: translateY(-10px);
                opacity: 0.5;
            }
            li:active{
                background:rgba(15,57,144,.2);
            }
        }
    }

</style>
