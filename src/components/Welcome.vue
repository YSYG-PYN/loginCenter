<template>
    <div class="welcome">
        <ul class="flatform">
            <li @click="handleClick()">
                <!-- <img style="opacity: 2;" src="../assets/images/welcome/flatformIcon1.png" alt=""> -->
                <p>智慧交通</p>
            </li>
            <li>
                <p>智慧旅游</p>
            </li>
            <li>
                <p>政务服务</p>
            </li>
            <li>
                <p>民生服务</p>
            </li>
            <li>
                <p>城市管理</p>
            </li>
            <li>
                <p>防震减灾</p>
            </li>
            <li>
                <p>生态环境</p>
            </li>
            <li>
                <p>基础设置</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {}
  },
  created () {},
  methods: {
    handleClick () {
      this.$router.push('/Traffic')
    }
  }
}
</script>

<style lang="less" scoped>
    .welcome{
        display: flex;
        align-items: center;
        height: 100%;
    }
    .flatform{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 50px;

        >li{
            width: 33.83rem;
            height: 23.33rem;
            border-radius: 20px;
            // box-shadow:1px 12px 20px 5px rgba(0,0,0,0.1);
            background-size: cover;
            margin: 0 32.5px 50px;
            display: flex;
            justify-content: center;
            position: relative;
            overflow: hidden;
            transition: all 0.5s;

            p{
                font-size: 2.33rem;
                font-weight: 600;
                line-height: 40px;
                position: absolute;
                bottom: 40px;
                color: #D5EBFF;
                transition: all 0.5s;
            }
        }
        >li:hover{
            box-shadow:1px 12px 20px 5px rgba(0,0,0,0.1);
            transform: translateY(-10px);
        }
        >li:nth-child(1){
            background: url("../assets/images/welcome/flatformIcon1.png") no-repeat;
        }
        >li:nth-child(2){
            background: url("../assets/images/welcome/flatformIcon2.png") no-repeat;
        }
        >li:nth-child(3){
            background: url("../assets/images/welcome/flatformIcon3.png") no-repeat;
        }
        >li:nth-child(4){
            background: url("../assets/images/welcome/flatformIcon4.png") no-repeat;
        }
        >li:nth-child(5){
            background: url("../assets/images/welcome/flatformIcon5.png") no-repeat;
        }
        >li:nth-child(6){
            background: url("../assets/images/welcome/flatformIcon6.png") no-repeat;
        }
        >li:nth-child(7){
            background: url("../assets/images/welcome/flatformIcon7.png") no-repeat;
        }
        >li:nth-child(8){
            background: url("../assets/images/welcome/flatformIcon8.png") no-repeat;
        }
    }
</style>
