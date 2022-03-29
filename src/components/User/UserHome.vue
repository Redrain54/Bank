<template>
    <div>
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="12">
                        <img src="../../assets/img/hunan.png" class="MainLogo">
                    </el-col>
                    <el-col :span="12" class="Box">
                        <template  v-for="link in LinkList" >
                            <router-link :to="link.url" class="Link" :key="link.tag">
                                {{link.tag}}
                            </router-link>
                        </template>
                    </el-col>
                </el-row>
            </el-header>
            <el-main style="padding-top:0">
                <div class="imgbox" style="width:1050px;margin-left:15%">
                    <el-carousel height="383px"  :autoplay="false">
                        <el-carousel-item v-for="picture in MainPictures" :key="picture.index">
                            <img :src="picture.url" width="100%" />
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <br/><br/><br/>
                <div class = "ThreeBox">
                    <div v-for="product in MainProducts" :key="product.title" class="ThreeBox-One">
                        <div class = "ThreeBox-Image">
                            <img :src="product.image" width="100%" />
                        </div>
                        <div class="ThreeBox-Title">
                            {{product.title}}
                        </div>
                        <div class="ThreeBox-Info">
                            {{product.info}}
                        </div>
                        <router-link :to="product.url" class = "ThreeBox-Link">
                            立即抢购
                        </router-link>
                    </div>
                </div>
                <br/><br/><br/>
            </el-main>
            <Footer></Footer>
        </el-container>
    </div>
</template>

<script>
import Footer from './Footer'
export default {
    name: 'UserHome',
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
                MainPictures:[
                    {index:1,url:require('../../assets/img/main.png')},
                    {index:2,url:require('../../assets/img/loginbg.jpg')},
                    {index:3,url:require('../../assets/img/tm-astro-bg.jpg')},
                ],
                MainProducts:[
                    {
                        image:require('../../assets/img/222.jpg'),
                        title:'2万元存款1',
                        info:'定期三年整存整取，年利率2.9%\n共推出5万份：定时开启，每人限购一份',
                        url:"/Detail"
                    },
                    {
                        image:require('../../assets/img/333.jpg'),
                        title:'2万元存款2',
                        info:'定期三年整存整取，年利率2.9%\n共推出5万份：定时开启，每人限购一份',
                        url:"/Detail"
                    },
                    {
                        image:require('../../assets/img/5678.jpeg'),
                        title:'2万元存款3',
                        info:'定期三年整存整取，年利率2.9%\n共推出5万份：定时开启，每人限购一份',
                        url:"/Detail"
                    }
                ],
                MainInfos:[
                    '联系地址湖南省长沙市岳麓区江滨景观大道谐林国际D座',
                    '电话渠道0731-96500',
                    '网络渠道kfbos@csxbank.com'
                ]
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
.pictures{
    width: auto;
    height: 300px;
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
.LoopPic{
    /* width:; */
    height:100px;
}
.ThreeBox{
    align:center;
    display:flex;
    margin-top:5px;
    flex-direction:row-reverse;
    justify-content:center;
}
.ThreeBox-Image{
    height:200px;
    width:100%;
}

.ThreeBox-One{
    width: 22.8%;
    margin-left:0.5%;
    border:solid 1px #f2f2f2;
    padding-bottom:30px;
}

.ThreeBox-Title{
    margin: 30px 10px 10px 10px;
    color:#ee4400;
    font-size:18px;
}
.ThreeBox-Info{
    margin: 10px 10px 20px 10px;
    font-size:14px;
    line-height:25px;
}
.ThreeBox-Link{
    font-size:20px;
    main-top:30px;
    text-decoration:none;
    color: #ff5500;
    font-size:14px;
    float:right;
    margin-right:20px;
    font-weight:600
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.Footer-LV0{
    background-color:#ee440054;
    height:240px;
}

.LV0-Info{
    align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
    height:100%;
    font-size:12px;
    line-height:20px;
}

.Footer-Box{
    display:inline-block;
    width:35%;
    height:100%;
    float:left
}
.Footer-Image{
    width:60%;
    height:40%;
    margin:72px 0 0 50px;
}

.Footer-LV1{
    background-color:#dd2200;
    display:flex;
    flex-direction:row;
    justify-content:center;
    height:40px;
    align:center;
}
.LV1-Left{
    height:100%;
    width:35%;
    text-align:left;
    font-size:10px;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
}
.LV1-Right{
    height:100%;
    width:35%;
    text-align:right;
    font-size:10px;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
}
</style>