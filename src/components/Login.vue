<template>
    <div>
        <div class="login">
            <!-- <img src="../assets/background.svg" alt=""> -->
            <div class="loginFrame" v-if="!ifAdmin">
                <div class="loginBg">
                    <a href="#" class="admin" @click="goToAdmin">管理员登录</a>
                </div>
                <div class="loginCard">
                    <img src="../assets/img/logo.png" style="margin-top:40px" width="100px" alt="logo">
                    <!-- 手机验证码登录 -->
                    <el-form ref="phoneLoginFormRef" :model="phoneLoginForm" status-icon :rules="phoneLoginFormRules" label-width="100px" class="loginForm" v-if="!ifpassLogin && !ifRegister && !ifForget">
                        <h1 style="text-align: center">欢迎登录三湘银行秒杀系统</h1>
                        <el-form-item label="手机号" prop="phoneNum">
                            <el-input style="width: 75%;" prefix-icon="el-icon-mobile-phone" v-model.number="phoneLoginForm.phoneNum" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item label="验证码" prop="veriCode">
                            <el-col :span="11">
                                <el-input prefix-icon="el-icon-bank-card" v-model.number="phoneLoginForm.veriCode" placeholder="请输入验证码"></el-input>
                            </el-col>
                            <el-col :span="8" style="margin-left: 20px; margin-top: -2px">
                                <el-button type="primary">获取验证码</el-button>
                            </el-col>
                        </el-form-item>
                        <el-form-item size="large">
                            <el-button type="danger"  style="width: 75%" round @click="login">立即登录</el-button>
                        </el-form-item>
                        <div>
                            <i class="el-icon-lock" style="margin-left: 50px"></i>
                            <a href="#" class="passLogin" @click="goToPassLogin">密码登录</a>
                            <a href="#" class="register" @click="goToRegister">没有账号？去注册</a>
                        </div>
                    </el-form>
                    <!-- 姓名密码登录 -->
                    <el-form ref="passLoginFormRef" :model="passLoginForm" status-icon :rules="passLoginFormRules" label-width="100px" class="loginForm" v-if="ifpassLogin && !ifRegister && !ifForget">
                        <h1 style="text-align: center">欢迎登录三湘银行秒杀系统</h1>
                        <el-form-item label="姓名" prop="userName">
                            <el-input style="width: 80%;" prefix-icon="el-icon-user" v-model="passLoginForm.userName" placeholder="请输入姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input style="width: 80%;" show-password prefix-icon="el-icon-lock" type="password" placeholder="请输入密码" v-model="passLoginForm.password"></el-input>
                        </el-form-item>
                        <el-form-item size="large">
                            <el-button  type="danger"  style="width: 80%" round @click="login">立即登录</el-button>
                        </el-form-item>
                        <div>
                            <a href="#" class="forgetPass" @click="goToForget">忘记密码</a>
                            <a href="#" class="passLogin" @click="goToPassLogin">验证码登录</a>
                            <a href="#" class="register" style="margin-left: 70px" @click="goToRegister">没有账号？去注册</a>
                        </div>
                    </el-form>
                    <!-- 忘记密码 -->
                    <el-form ref="forgetPasswordFormRef" :model="forgetPasswordForm" status-icon :rules="forgetPasswordFormRules" label-width="100px" class="loginForm" v-if="ifForget">
                        <h1 style="text-align: center">重置密码</h1>
                        <el-form-item label="手机号" prop="phoneNum">
                            <el-input style="width: 85%;" prefix-icon="el-icon-mobile-phone" v-model.number="forgetPasswordForm.phoneNum" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item label="验证码" prop="veriCode">
                            <el-col :span="11">
                                <el-input prefix-icon="el-icon-bank-card" v-model.number="forgetPasswordForm.veriCode" placeholder="请输入验证码"></el-input>
                            </el-col>
                            <el-col :span="8" style="margin-left: 20px; margin-top: -2px">
                                <el-button type="primary">获取验证码</el-button>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input style="width: 85%;" show-password prefix-icon="el-icon-lock" type="password" placeholder="请设置新密码" v-model="forgetPasswordForm.password"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="rePassword">
                            <el-input style="width: 85%;" show-password prefix-icon="el-icon-lock" type="password" placeholder="请确实新密码" v-model="forgetPasswordForm.rePassword"></el-input>
                        </el-form-item>
                        <el-form-item size="large">
                            <el-button  type="danger"  style="width: 90%" round @click="resetPassword">确认</el-button>
                        </el-form-item>
                        <div>
                            <a href="#" class="passLogin" style="margin-left:40px" @click="goToPassLogin">验证码登录</a>
                            <a href="#" class="register" style="margin-left:200px" @click="goToRegister">没有账号？去注册</a>
                        </div>
                    </el-form>
                    <!-- 注册页面一 -->
                    <el-form ref="registerFormOneRef" :model="registerFormOne" status-icon :rules="registerFormOneRules" label-width="100px" class="loginForm" v-if="ifRegister && !ifRegisterTwo">
                        <h1 style="text-align: center">免费注册</h1>
                        <el-form-item label="姓名" prop="userName">
                            <el-input  prefix-icon="el-icon-user" v-model="registerFormOne.userName" placeholder="请输入姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="身份证号" prop="idCard">
                            <el-input prefix-icon="el-icon-lock" placeholder="请输入身份证号" v-model="registerFormOne.idCard"></el-input>
                        </el-form-item>
                        <el-form-item size="large">
                            <el-button  type="danger"  style="width: 90%" round @click="goToNext">下一步</el-button>
                        </el-form-item>
                        <el-form-item>
                            <a href="#" class="register" style="margin-left: 50px" @click="goToLogin">已有账号？去登录</a>
                        </el-form-item>
                    </el-form>
                    <!-- 注册页面二 -->
                    <el-form ref="registerFormTwoRef" :model="registerFormTwo" status-icon :rules="registerFormTwoRules" label-width="100px" class="loginForm" v-if="ifRegister && ifRegisterTwo">
                        <h1 style="text-align: center">免费注册</h1>
                        <el-form-item label="手机号" prop="phoneNum">
                            <el-input style="width: 85%;" prefix-icon="el-icon-mobile-phone" v-model.number="registerFormTwo.phoneNum" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item label="验证码" prop="veriCode">
                            <el-col :span="11">
                                <el-input prefix-icon="el-icon-bank-card" v-model.number="registerFormTwo.veriCode" placeholder="请输入验证码"></el-input>
                            </el-col>
                            <el-col :span="8" style="margin-left: 20px; margin-top: -2px">
                                <el-button type="primary">获取验证码</el-button>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input style="width: 85%;" show-password prefix-icon="el-icon-lock" type="password" placeholder="请输入密码" v-model="registerFormTwo.password"></el-input>
                        </el-form-item>
                        <el-form-item size="large">
                            <el-button  type="danger"  style="width: 90%" round @click="register">注册账号</el-button>
                        </el-form-item>
                        <el-form-item>
                            <a href="#" class="register" style="margin-left:200px" @click="goToLogin">已有账号？去登录</a>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <!-- 管理员登录 -->
            <div class="loginFrame" v-if="ifAdmin">
                <div class="loginBg adminBg">
                    <a href="#" class="admin" @click="goToAdmin">用户登录</a>
                </div>
                <div class="loginCard">
                    <img src="../assets/img/logo.png" style="margin-top:40px" width="100px" alt="logo">
                    <el-form ref="adminLoginFormRef" :model="adminLoginForm" status-icon :rules="adminLoginFormRules" label-width="100px" class="loginForm">
                        <h1 style="text-align: center">管理员登录</h1>
                        <el-form-item label="账户" prop="userName">
                            <el-input style="width: 100%;" prefix-icon="el-icon-user" v-model="adminLoginForm.userName" placeholder="请输入账户"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input style="width: 100%;" show-password prefix-icon="el-icon-lock" type="password" placeholder="请输入密码" v-model="adminLoginForm.password"></el-input>
                        </el-form-item>
                        <el-form-item size="large">
                            <el-button  type="danger"  style="width: 100%" round @click="login">立即登录</el-button>
                        </el-form-item>
                        <div>
                            <el-checkbox v-model="checked" class="autoCheck">记住密码</el-checkbox>
                            <a href="#" class="adminForget" @click="goToForget">忘记密码</a>
                        </div>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginItem',
    data(){
        var validrePutPassword = (rule, value, callback) => {
             if (value !== this.forgetPasswordForm.password) {
                callback(new Error("两次输入密码不一致！"));
            } else {
                callback();
            }
            }
        return{
            checked:false,
            ifAdmin:false,
            ifForget:false,
            ifRegister:false,
            ifRegisterTwo:false,
            ifpassLogin:false,
            phoneLoginForm:{
                phoneNum:"",
                veriCode:""
            },
            passLoginForm:{
                userName:"",
                password:""
            },
            adminLoginForm:{
                userName:"",
                password:""
            },
            forgetPasswordForm:{
                phoneNum:"",
                veriCode:"",
                password:"",
                rePassword:""
            },
            registerFormOne:{
                userName:"",
                idCard:""
            },
            registerFormTwo:{
                phoneNum:"",
                veriCode:"",
                password:""
            },
            registerForm:{},
            phoneLoginFormRules:{
                phoneNum:[
                    {required:true,message:"请输入手机号",trigger:'blur'},
                    {type: 'number',message:"手机号必须为数值",trigger:'blur'},
                ],
                veriCode:[
                    {required:true,message:"请输入验证码",trigger:'blur'},
                    {type: 'number',message:"验证码必须为数值",trigger:'blur'},
                ]
            },
            passLoginFormRules:{
                userName:[
                    {required:true,message:"请输入真实姓名",trigger:'blur'},                      
                    {min:1,max:10,message:"长度在1到10个字符",trigger:'blur'}
                ],
                password:[
                    {required:true,message:"请输入密码",trigger:'blur'},
                    {min:6,max:15,message:"长度在6到15个字符",trigger:'blur'}
                ]
            },
            adminLoginFormRules:{
                userName:[
                    {required:true,message:"请输入账户",trigger:'blur'},                      
                    {min:1,max:10,message:"长度在1到10个字符",trigger:'blur'}
                ],
                password:[
                    {required:true,message:"请输入密码",trigger:'blur'},
                    {min:6,max:15,message:"长度在6到15个字符",trigger:'blur'}
                ]
            },
            forgetPasswordFormRules:{
                phoneNum:[
                    {required:true,message:"请输入手机号",trigger:'blur'},
                    {type: 'number',message:"手机号必须为数值",trigger:'blur'},
                ],
                veriCode:[
                    {required:true,message:"请输入验证码",trigger:'blur'},
                    {type: 'number',message:"验证码必须为数值",trigger:'blur'},
                ],
                password:[
                    {required:true,message:"请输入密码",trigger:'blur'},
                    {min:6,max:15,message:"长度在6到15个字符",trigger:'blur'}
                ],
                rePassword:[
                    {required:true,message:"请再次输入密码",trigger:'blur'},
                    {validator:validrePutPassword,trigger:'blur'}
                ]
            },
            registerFormOneRules:{
                userName:[
                    {required:true,message:"请输入真实姓名",trigger:'blur'},                      
                    {min:1,max:10,message:"长度在1到10个字符",trigger:'blur'}
                ],
                idcard:[
                    {required:true,message:"请输入密码",trigger:'blur'},
                    {min:6,max:15,message:"长度在6到15个字符",trigger:'blur'}
                ]
            },
            registerFormTwoRules:{
                phoneNum:[
                    {required:true,message:"请输入手机号",trigger:'blur'},
                    {type: 'number',message:"手机号必须为数值",trigger:'blur'},
                ],
                veriCode:[
                    {required:true,message:"请输入验证码",trigger:'blur'},
                    {type: 'number',message:"验证码必须为数值",trigger:'blur'},
                ],
                password:[
                    {required:true,message:"请输入密码",trigger:'blur'},
                    {min:6,max:15,message:"长度在6到15个字符",trigger:'blur'}
                ]
            },
            phoneLoginData:{"13956640901":"1234",},
            passLoginData:{"zhy":"123123",},
            adminLoginData:{"admin":"123123"}
        }
        
    },
    methods:{
        login(){
            // 验证管理员登录
            if (this.ifAdmin){
                this.$refs.adminLoginFormRef.validate(valid => {
                    if (!valid)
                        return this.$message.error("请填写完整信息！");
                    this.checkLogin();
                })
            }
            // 验证手机号登录
            else if (!this.ifpassLogin){
                // 正则判断手机号和验证码
                const phone = /^1[3|4|5|7|8][0-9]\d{8}$/;
                const veri = /\d{4}$/;
                if (!phone.test(this.phoneLoginForm.phoneNum))
                    return this.$message.error("请输入正确格式的手机号！");
                if (!veri.test(this.phoneLoginForm.veriCode))
                    return this.$message.error("请输入正确格式的验证码！");
                this.$refs.phoneLoginFormRef.validate(valid=>
                {
                    if(!valid)
                        return this.$message.error("请填写完整信息！");
                    this.checkLogin();
                })
            } else {
                // 验证密码登录
                this.$refs.passLoginFormRef.validate(validate => {
                    if (!validate)
                        return this.$message.error("请填写完整信息！");
                    this.checkLogin();
                })
            }
            
        },
        checkLogin()
        {
            if (this.ifAdmin && this.adminLoginData[this.adminLoginForm.userName]==this.adminLoginForm.password)
           {
               this.$router.push('/adminHome')
           }
            else if(this.ifpassLogin && this.passLoginData[this.passLoginForm.userName]==this.passLoginForm.password)
            {
                // this.$store.commit('saveLogin',true);
                this.$router.push('/userHome');
            }
            else if(!this.ifpassLogin && this.phoneLoginData[this.phoneLoginForm.phoneNum]==this.phoneLoginForm.veriCode)
            {
                this.$router.push('/userHome');
            }
            else
                return this.$message.error("密码错误!");
        },
        resetPassword(){
            this.$refs.forgetPasswordFormRef.validate(valid => {
                if (!valid)
                    return this.$message.error("请输入正确的信息！");
                this.$message.success("重置密码成功！");
                this.ifForget=false;
                this.ifpassLogin=true;
            })
        },
        goToAdmin(){
            this.ifAdmin=!this.ifAdmin;
        },
        goToLogin(){
            this.ifRegister=false;
            this.ifRegisterTwo=false;
            this.ifpassLogin=false;
            this.ifForget=false;
        },
        goToPassLogin(){
            this.ifpassLogin=!this.ifpassLogin;
            this.ifForget=false;
        },
        goToRegister()
        {
            this.ifRegister=true;
            this.ifForget=false;
        },
        goToNext(){
            this.$refs.registerFormOneRef.validate(valid => {
                if (!valid)
                    return this.$message.error("请填写完整信息");
                this.ifRegisterTwo=true;
                this.registerForm = Object.assign(this.registerForm,this.registerFormOne)
            })
        },
        goToForget(){
            this.ifForget=true;
        },
        register(){
            this.$refs.registerFormTwoRef.validate(valid=>
          {
              if(!valid)
                return this.$message.error("请填写完整信息!");
              this.$message.success("注册成功!");
              this.registerForm = Object.assign(this.registerForm,this.registerFormTwo)
              console.log(this.registerForm);
            //   this.loginData[this.registerForm.username]=this.registerForm.password;
              this.ifRegister=!this.ifRegister;
          })
        }
    }
}
</script>

<style>
    .admin{
        top: 10px;
        left: 10px;
        position: relative;
        font-size: 12px;
        text-decoration: none;
    }
    .login
    {   
        height:100vh;
        background-image: linear-gradient(to left, #E38585,#F2CBCB);
        /* background-image: url('../assets/background.svg'); */
        display: flex;
        justify-content: center;
    }
    .loginFrame
    {
        position:relative;
        top: 100px;
        width: 1000px;
        height: 550px;
        box-shadow: 0 5px 15px rgba(0,0,0,.8);
        display: flex;
        animation:elementin 2s;
    }
    .loginBg{
        width: 500px;
        height: 550px;
        background-image: url("../assets/img/777.png");
        /* 让图片适应大小 */
        background-size: cover;
    }
    .adminBg{
         background-image: url("../assets/img/admin.png");
    }
    .autoCheck{
        margin-left: 90px;
    }
    .adminForget{
        color: #101010;
        text-decoration: none;
        font-size: 14px;
        margin-left: 100px;
        margin-right: 0;
    }
    .loginCard{
        width: 500px;
        height: 550px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .loginForm{
        margin-top: 10px;
    }
    .forgetPass{
        color: #101010;
        text-decoration: none;
        margin-left: 50px;
        margin-right: 70px;
    }
    .passLogin{
        /* float: left; */
        margin-left: 5px;
        color: #101010;
        text-decoration: none;
    }
    .register{
        text-decoration: none;
        margin-left: 130px;
        /* float: right; */
    }
</style>