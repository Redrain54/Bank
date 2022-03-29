<template>
    <div>
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="12">
                        <img src="../../assets/img/hunan.png" class="MainLogo">
                    </el-col>
                    <el-col :span="12" class="Box">
                        <router-link :to="link.url" class="Link" v-for="link in LinkList" :key="link.tag">
                            {{link.tag}}
                        </router-link>
                    </el-col>
                </el-row>
            </el-header>
            <el-main class="Main" style="padding:0;">
            <br/><br/><br/>
                <div class="Main-One" style="width:54%">
                    <img src="../../assets/img/5678.jpeg" style="height:100%;width:100%"/>
                </div>
                <div class="Main-One" style="width:45%">
                    <div class="Main-InfoItem">
                        <div class="Warn">
                            秒杀产品
                        </div>
                        <div class="Info-Title">
                            {{Info.title}}
                        </div>
                    </div>
                    <div class="Main-InfoItem"  style="flex-direction:column;margin-top:35px">
                        <div class = "Main-Info" v-for="sub in Info.subs" :key="sub">
                            {{sub}}
                        </div>
                    </div>
                    <div class="Main-InfoItem" style="margin-top:20px">
                        <div class="Warn2" v-for="warning in Info.warn" :key="warning">
                            {{warning}}
                        </div>
                    </div>
                    <div class="Main-InfoItem" style="margin-top:20px">
                        <div class="Money">
                            ￥{{Info.money}}
                        </div>
                    </div>
                    <div class="Main-InfoItem" style="margin-top:20px">
                        <div v-for="vow in Info.vows" class="Vow" :key="vow">
                            <i class="el-icon-circle-check"></i>{{vow}}
                        </div>
                        <div v-for="remind in Info.remind" class="Vow" :key="remind">
                            <i class="el-icon-warning-outline"></i>{{remind}}
                        </div>
                    </div>
                    <div class="Main-InfoItem" style="margin-top:25px">
                        <span class="RedBar"></span>
                        <span class="GaryBar"></span>
                        <span class="Sold">
                            已售{{Info.sold}}%
                        </span>
                    </div>
                    <div class="Main-InfoItem" style="margin-top:20px">
                        <button class="Main-Button">立即抢购</button>
                    </div>
                </div>
            </el-main>
            <Footer></Footer>
        </el-container>
    </div>
</template>

<script>
import Footer from './Footer'
export default {
    name: 'ProductDetail',
    components:{Footer},
    data(){
        return{
                MainLogo:require('../../assets/img/hunan.png'),
                LinkList:[
                    {
                        tag:"秒杀首页",
                        url:"/UserHome"
                    },
                    {
                        tag:"我的订单",
                        url:"/UserHome"
                    },
                    {
                        tag:"关于我们",
                        url:"/UserHome"
                    },
                    {
                        tag:"账号管理",
                        url:"/UserHome"
                    }
                ],
                Info:{
                    title:"湖南三湘银行1万元存款产品",
                    subs:[
                        '存款每份一万元',
                        '定期1年整存整取，年利率1.95%',
                        '共推出10万份；定时开启；每人限购一份'
                    ],
                    warn:[
                        '1.95%高利率',
                        '限量10万份',
                        '12：00准时开始'
                    ],
                    money:'10000.00',
                    vows:[
                        '三湘银行自营',
                        '高利率',
                        '精服务',
                    ],
                    remind:[
                        '不支持退货'
                    ],
                    sold:50
                },
        }
    },
    methods:{
        
    }
}
</script>

<style>
.MainLogo{
    margin-left:35%;
    width:auto;
    height:60px;
    color:#66ccff;
    align:center;
}
.Box{
    align:center;
    display:flex;
    margin-top:5px;
    padding-right:10%;
    flex-direction:row-reverse;
    justify-content:center;
}
.Link{
    font-size:15px;
    text-decoration:none;
    color: #333333;
    padding:15px 20px 15px 20px;
    background-color:#ffffff
}
.Link:hover{
    background-color:#eeeeee;
    color:#777777
}

.Main{
    margin-left:17%;
    width:70%;
    margin-bottom:5%;
}
.Main-One{
    height:450px;
    margin:0;
    display:inline-block;
    float:left
}
.Main-InfoItem{
    line-height:20px;
    margin-left:30px;
    display:flex;
    flex-direction:row;
}
.Warn{
    border:solid 1px #ff2200;
    background-color:#ffaa00;
    color:white;
    font-size:12px;
    padding: 6px 10px 6px 10px;
    width:auto;
}
.Warn2{
    border:solid 1px #ff2200;
    background-color:#ffaa00;
    color:white;
    font-size:12px;
    padding: 8px 15px 8px 15px;
    width:auto;
    margin-right:10px;
}
.Info-Title{
    font-size:20px;
    margin-left:15px;
    font-weight:500;
    color:#000000;
    margin-top:6px;
}
.Main-Info{
    font-size:14px;
    color:#888888;
    font-weight:500;
    margin-top:5px;
    margin-left:5px;
}
.Money{
    font-size:18px;
    color:#de0000;
    font-weight:600;
}
.Vow{
    color:#aaaaaa;
    font-size:12px;
    margin-right:10px;
    font-weight:600;
}
.RedBar{
    width:100px;
    height:3px;
    border-radius:3px;
    background-color:red;
    margin-top:7px;
}
.GaryBar{
    width:100px;
    height:3px;
    border-radius:3px;
    margin-top:7px;
    background-color:#aaaaaa;
}
.Sold{
    margin-left:10px;
    font-size:13px;
    font-weight:600;
    color:#666666;
}
.Main-Button{
    padding: 6px 25px 8px 25px;
    background-color:red;
    font-size:15px;
    color:white;
    border-radius:20px;
    border-color:#00000000;
    font-weight:800
}
.Main-Button:hover{
    background-color:#ff000090;
}
</style>