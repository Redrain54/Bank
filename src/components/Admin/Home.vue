<template>
  <div>
    <el-container  class="home_container">
        <!-- 页面主体 -->
        <el-aside>
            <el-radio-group v-model="isCollapse" class="radioGroup">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-menu-item index="1">
                <i class="el-icon-document"></i>
                <span slot="title">活动信息配置</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-document"></i>
                <span slot="title">筛选条件配置</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-search"></i>
                <span slot="title">查看筛选记录</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-search"></i>
                <span slot="title">成功人员查询</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
            </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header >
                <div style="display:flex; flex-direction: row;align-items:center;float: right; margin-right: 10%;margin-top:20px">
                    <i class="el-icon-s-custom" style="font-size:30px;"></i>
                    <div style="font-size:28px;margin-left: 10px">欢迎您：{{}}</div>
                </div>
            </el-header>
            <!-- 右侧内容主体 -->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    name: 'HomeItem',
    data(){
        return {
            isCollapse: true,
            menulist:[
                {id:"001",authName:"首页",path:"welcome"},
                {id:"002",authName:"活动信息配置",path:"create"},
                {id:"003",authName:"筛选用户查询",path:"upload"},
                {id:"004",authName:"筛选条件配置",path:"vertify"}
            ],
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 300px;
  }
   .home_container {
        height: 100vh;
        background-image: linear-gradient(to left, #9c88ff,#3cadeb);
    }

    .radioGroup{
        margin-top: 20px;
        margin-bottom: 15px;
    }
    .quitbtn
    {
        margin-top:25px;
        border-radius:25px;
        font-weight:500;
        font-size:16px;
        cursor: pointer;
        height:35px;
        width:100px;
        outline:none;
        background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
        border:none;
        transition: .5s;
    }
    .quitbtn:hover{
        transform: scale(1.1);
    }

    .el-menu-item.is-active {
        background-color:transparent !important;
        color:#99FF66;
    }
    .el-menu-item.is-active .circle
    {
        background-color: #99FF66;
    }
    .circle {
    position: absolute;
    left: calc(50% - 10px);
    bottom: -10px;
    width: 20px;
    height: 20px; 
    background-color: white;
    border-radius: 50%;

}
</style>