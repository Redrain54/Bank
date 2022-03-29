<template>
    <div>
            <el-footer>
                <div class="Footer-LV0">
                    <div class="Footer-Box" style="margin-left:15%">
                        <img :src="MainLogo" class="Footer-Image"/>
                    </div>
                    <div class="Footer-Box">
                       <div class="LV0-Info">
                            <div style="margin:12px 0 12px 0 ;" v-for="info in MainInfos" :key="info">
                                {{info}}
                            </div>
                       </div>
                    </div>
                </div>
                <div class="Footer-LV1">
                    <div class = "LV1-Left">
                        2022@Copyright 湖南三湘银行股份有限公司
                    </div>
                    <div class = "LV1-Right">
                        备案号：湘CP备17012314号
                    </div>
                </div>
            </el-footer>
    </div>
</template>

<script>
export default {
    name: 'PageFooter',
    data(){
            return{
                MainLogo:require('../../assets/img/hunan.png'),
                MainProducts:[
                    {
                        image:'../../assets/img/777.png',
                        title:'2万元存款',
                        info:'定期三年整存整取，年利率2.9%\n共推出5万份：定时开启，每人限购一份',
                        url:"/UserHome"
                    },
                    {
                        image:'../../assets/img/777.png',
                        title:'2万元存款',
                        info:'定期三年整存整取，年利率2.9%\n共推出5万份：定时开启，每人限购一份',
                        url:"/UserHome"
                    },
                    {
                        image:'../../assets/img/777.png',
                        title:'2万元存款',
                        info:'定期三年整存整取，年利率2.9%\n共推出5万份：定时开启，每人限购一份',
                        url:"/UserHome"
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