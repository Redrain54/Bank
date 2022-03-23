<template>
    <div>
        <div class="login">
            <div class="loginBg">
                <img src="../assets/background.svg" alt="">
            </div>
            <div class="loginFrame">
                <el-form ref="loginFormRef" :model="loginForm"  label-width="0" 
                :rules="loginFormRules" class="mainLogin" v-if="!ifRegister">
                    <h1>银行登陆认证</h1>
                    <!-- 身份证号 -->
                    <el-form-item prop="idcard">
                        <input  v-model="loginForm.idcard" class="login-component" placeholder="身份证号">
                    </el-form-item>
                    <!-- 密码 -->
                    <el-form-item prop="password">
                        <input v-model="loginForm.password" 
                            type="password" class="login-component"  placeholder="密码">
                    </el-form-item>
                    <el-form-item>
                        <a href="#" class="login-link1" @click="goToRegister">没有账号？点此注册</a>
                    </el-form-item>
                    <!-- 按钮 -->
                    <el-form-item >
                        <button class="login-link2" @click="login" @keyup.enter="login" >登录</button>
                    </el-form-item>
                </el-form>

                <el-form ref="registerFormRef" :model="registerForm" label-width="0"
                :rules="registerFormRules" class="mainLogin" v-if="ifRegister">
                <h1>注册</h1>
                    <el-form-item prop="username">
                        <input  v-model="registerForm.username" class="login-component" placeholder="身份证号">
                    </el-form-item>
                    <el-form-item prop="password">
                        <input v-model="registerForm.password" 
                        type="password" class="login-component"  placeholder="密码">
                        <!-- <input v-model="registerForm.password" 
                        @keyup.enter.native="login"  type="password" class="login-component"  placeholder="密码"> -->
                    </el-form-item>
                    <el-form-item prop="rePutPassword">
                        <input v-model="registerForm.rePutPassword" 
                            type="password" class="login-component"  placeholder="确认密码">
                    </el-form-item>
                    <el-form-item >
                        <button class="login-link2" @click="register" >注册</button>
                        <!-- <el-button class="login-link2" @click="register" @keyup.enter.native="register">注册</el-button> -->
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginItem',
    data(){
            var validrePutPassword = (rule, value, callback) => {
             if (value !== this.registerForm.password) {
                callback(new Error("两次输入密码不一致！"));
            } else {
                callback();
            }
            }
            
             return{
                ifRegister:false,
                loginForm:{
                    idcard:"",
                    password:""
                },
                registerForm:{
                    username:"",
                    password:"",
                    rePutPassword:""
                },
                loginFormRules:{
                    idcard:[
                        {required:true,message:"请输入身份证号",trigger:'blur'},
                        {min:3,max:10,message:"长度在3到10个字符",trigger:'blur'}
                    ],
                    password:[
                        {required:true,message:"请输入密码",trigger:'blur'},
                        {min:6,max:15,message:"长度在6到15个字符",trigger:'blur'}
                    ]
                },
                registerFormRules:{
                    username:[
                        {required:true,message:"请输入用户名",trigger:'blur'},
                        {min:3,max:10,message:"长度在3到10个字符",trigger:'blur'}
                    ],
                    password:[
                        {required:true,message:"请输入密码",trigger:'blur'},
                        {min:6,max:15,message:"长度在6到15个字符",trigger:'blur'}
                    ],
                    rePutPassword:[
                        {required:true,message:"请再次输入密码",trigger:'blur'},
                        {validator:validrePutPassword,trigger:'blur'}
                    ]
                },
                loginData:{"zhy":"123123",}
            }
        
    },
    methods:{
        login(){
            this.$refs.loginFormRef.validate(valid=>
            {
                if(!valid)
                    return this.$message.error("请填写完整信息！");
                this.checkLogin();
            })
        },
        checkLogin()
        {
            if(this.loginData[this.loginForm.idcard]==this.loginForm.password)
                {
                    // this.$store.commit('saveLogin',true);
                    this.$router.push('/adminHome');
                }
                else
                    return this.$message.error("密码错误!");
        },
        goToRegister()
        {
            this.ifRegister=true;
        },
        register(){
            this.$refs.registerFormRef.validate(valid=>
          {
              if(!valid)
              return this.$message.error("请填写完整信息!");
              this.$message.success("注册成功!");
              this.loginData[this.registerForm.username]=this.registerForm.password;
              this.ifRegister=!this.ifRegister;
          })
        }
    }
}
</script>

<style>
.login
{   
    height:100vh;
    background-image: linear-gradient(to left, #9c88ff,#3cadeb);
    display: flex;
    justify-content: center;
}
.loginBg{
    width: 80%;
    height: 80%;
    position: absolute;
    z-index: 1;
}
.loginFrame
{
    position:absolute;
    z-index: 2;
    top: 100px;
    width: 400px;
    height: 550px;
    box-shadow: 0 5px 15px rgba(0,0,0,.8);
    display: flex;
    animation:elementin 2s;
    justify-content: center;
    align-items: center;
    background-color: white;
}
.mainLogin{
    margin-top: 50px;
    width: 250px;
    height: 500px;
}
.mainLogin h1{
    font: 900 30px '';
}
.login-component
{
    width: 230px;
    margin: 20px 0;
    outline: none;
    border: 0;
    padding: 10px;
    border-bottom: 3px solid rgb(80,80,170);
    font: 900 16px '';
}
.login-link1{
    float: right;
    margin-top:-40px;
    text-decoration: none;
}
.login-link2
{
    position: absolute;
    margin: 20px;
    display: block;
    width: 200px;
    /* height: 60px; */
    font: 600 25px '';
    text-decoration: none;
    line-height: 30px;
    border-radius: 30px;
    background-image: linear-gradient(to left,
            #9c88ff,#3cadeb);
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
}
</style>