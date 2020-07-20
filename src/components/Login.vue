<template>
    <div class="login_container">

        <!-- 登录表单区域 -->
        <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" class="login_form">
            <div class="title">九寨沟后台管理系统</div>
            <el-form-item label="" prop="username" class="username">
                <el-input class="user" v-model="loginForm.username" placeholder="用户名称">
                    <i slot="prefix" style="display: flex;align-items: center;margin-top: 12px;margin-left: 0.83rem;">
                        <img style="width: 3.67rem; height: 3.67rem" src="../assets/images/login/user.svg" alt="">
                    </i>
                </el-input>
            </el-form-item>
            <el-form-item label="" prop="password" class="password">
                <el-input type="password" class="pass" v-model="loginForm.password" placeholder="用户密码">
                    <i slot="prefix" style="display: flex;align-items: center;margin-top: 12px;margin-left: 0.83rem;">
                        <img style="width: 3.67rem; height: 3.67rem" src="../assets/images/login/pass.svg" alt="">
                    </i>
                </el-input>
            </el-form-item>
            <el-form-item label="" prop="code">
                <el-input class="code" v-model="loginForm.code" placeholder="请输入图片验证码">
                    <template slot="append">
                        <div class="login-code"  @click="refreshCode">
                            <Identify :identifyCode="identifyCode"></Identify>
                        </div>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" round @click="login" class="login-button">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Identify from './authCode/SIdentify'

    export default {
        name: 'app',
        data() {
            return {
                identifyCodes: '1234567890abcdefjhijklinopqrsduvwxyz',
                identifyCode: '',
                loginForm: {
                    username: '',
                    password: '', 
                    code: ''
                },
                loginFormRules: {
                    username: [
                        {
                            required: true,
                            message: '请输入登录名称',
                            trigger: 'blur'
                        }
                    ],
                    password: [
                        {
                            required: true,
                            message: '请输入登录名称',
                            trigger: 'blur'
                        }
                    ],
                    code: [
                        {
                            required: true,
                            message: '请输入验证码',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        components: {
            Identify
        },
        methods: {
            // 重置验证码
            refreshCode () {
                this.identifyCode = ''
                this.makeCode(this.identifyCodes, 4)
            },
            makeCode (o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
                }
            },  
            randomNum (min, max) {
                return Math.floor(Math.random() * (max - min) + min)
            },
            login() {
                if (this.loginForm.code.toLowerCase() !== this.identifyCode.toLowerCase()) {
                    this.$message.error('请填写正确的验证码')
                    this.refreshCode()
                    return
                }
                this.$refs.loginFormRef.validate(valid => {
                    if (!valid) {
                        return this.$message.error('用户名或密码有误！')
                    }

                    this.$message.success('登录成功！')
                    this.$router.push('/home')
                })
            }
        },
        mounted () {
            // 初始化验证码
            this.identifyCode = ''
            this.makeCode(this.identifyCodes, 4)
        }
    }
</script>

<style scoped>
    .login_container {
        height: 100%;
        display: flex;
        background: url('../assets/images/login/bg.png') no-repeat;
        background-size: cover;
        position: relative;
    }

    .title {
        font-size:2.5rem;
        font-weight: 600;
        color: #226AB6;
        margin: 4.17rem 0;
        text-align: center;
    }

    .login_form {
        width:44.58rem;
        height:52.25rem;
        padding: 0 4.17rem;
        background:rgba(255,255,255,1) linear-gradient(180deg,rgba(255,255,255,0.3) 0%,rgba(143,204,255,0.5) 0%,rgba(207,233,255,0.31) 16%,rgba(255,255,255,0.5) 86%,rgba(143,204,255,0.7) 100%);
        border-radius: 1.5rem;
        box-sizing: border-box;
        position: absolute;
        right: 10.17rem;
        top: 50%;
        transform: translateY(-26.125rem);
    }

    .el-button {
        width: 100%;
        height: 90px;
        border-radius: 52px !important;
        font-size: 37px;
    }

    .username, .password {
        margin-bottom: 2.42rem;
    }

    .user >>> .el-input__inner, .pass >>> .el-input__inner, .code >>> .el-input__inner {
        background: none !important;
        height: 70px !important;
        font-size: 1.67rem !important;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid #A6C4E0;
    }

    .code{
        display: flex;
        justify-content: space-between;
    }

    .code >>> .el-input__inner{
        width: 50%;
    } 

    .code >>> .el-input-group__append{
        width: 45%;
        padding: 0;
    }
    
    .login-code{
        width: 100%;
        height: 100%;
    }

    .login-code >>> .el-input-group__append, .el-input-group__prepend{
        background: none !important;
        border: none !important;
    }

    .login-button{
        height: 5.83rem;
        border-radius: 1.66rem;
        background: rgba(16,88,153,0.3);
        font-size: 2rem;
        border: none;
        margin-top: 4rem;
    }
</style>
