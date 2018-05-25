<template>
	<div class="mian">
 <div id="slider1" class="slider">
			<div class="conbox">
				<div><a href="#" title=""><img src="../assets/images/ddf.jpg" width="1000" height="355" /></a></div>
				<div><a href="#" title=""><img src="../assets/images/dde.jpg" width="1000" height="355" /></a></div>
				<div><a href="#" title=""><img src="../assets/images/ddf.jpg" width="1000" height="355"</a></div>
				<div><a href="#" title=""><img src="../assets/images/dde.jpg" width="1000" height="355"></a></div>
				<div><a href="#" title=""><img src="../assets/images/ddf.jpg" width="1000" height="355"></a></div>
			</div>

			<div class="switcher">
				<a href="#" class="cur">1</a>
				<a href="#">2</a>
				<a href="#">3</a>
				<a href="#">4</a>
				<a href="#">5</a>
			</div>
</div>
	<div id="tabs0">
        <div class="hdk">
         <ul class="menu0" id="menu0">
          <li v-for="(value,index) in tablist" :class="{hover:index==num}" @click="tab(index)">{{value}}</li>
         </ul>
         </div>
         <div class="piece" id="piece0">
          <ul v-show="num==0">
            <li>
            	<div class="about">尊贵的客户，您好！欢迎进入伯爵婚纱摄影客户服务中心！这里将为您展示新人的幸福瞬间。与此同时，并将最美好的祝福送给每对新人。
                伯爵婚纱摄影客户咨询热线：0754-86865141 太阳城欢迎广大追求美的新人前来咨询，我们将留给您不一样的记忆。
                了解我们，从这里开始 | 摄影常见问题解答 | 服务须知：拍摄当天 | 服务须知：拍摄前准备 | 高端定制服务服务流程 | 高端定制服务服务说明
                郑重声明：伯爵客户服务频道所展示的作品均来自真实客人定制照片，并经由客户本人同意在唯一官方网站www.stbjhs.com进行发表。
                未经允许不得转载或用于任何商业用途，违者必究！伯爵婚纱摄影客户咨询热线：0754-86865141 太阳城欢迎广大追求美的新人前来咨询，我们将留给您不一样的记忆。
                了解我们，从这里开始 | 摄影常见问题解答 | 服务须知：拍摄当天 | 服务须知：拍摄前准备 | 高端定制服务服务流程 | 高端定制服务服务说明
                郑重声明：伯爵客户服务频道所展示的作品均来自真实客人定制照片，并经由客户本人同意在唯一官方网站www.stbjhs.com进行发表。
                未经允许不得转载或用于任何商业用途，伯爵婚纱摄影客户咨询热线：0754-86865141 太阳城欢迎广大追求美的新人前来咨询，我们将留给您不一样的记忆。
                了解我们，从这里开始 | 摄影常见问题解答 | 服务须知：拍摄当天 | 服务须知：拍摄前准备 | 高端定制服务服务流程 | 高端定制服务服务说明
                郑重声明：伯爵客户服务频道所展示的作品均来自真实客人定制照片，并经由客户本人同意在唯一官方网站www.stbjhs.com进行发表。
                未经允许不得转载或用于任何商业用途，
             </div>
            </li>
		     </ul>
      <ul v-show="num==1">
          <li>
          	<div class="contact">
            <p><strong>中国时通运营中心</strong></p> 
            <p>地址：厦门市湖里区仙岳路860号台商会馆8楼A02</p>
            <p>电话:   +86-4506-3d33-770,+86-05d92-5588644</p> 
            <p>传真:   +86-592-55555649</p>  
            <p>电子邮箱:  sto5nebtbs@stonebtb.com</p> 
               
            <p><strong>销售中心:</strong></p>    
            <p>电话:   +86-592-555588646</p> 
            <p>传真:   +86-592-55588649</p>  
            <p>电子邮箱:  market@stonebtb.com</p> 
                
            <p><strong>市场 & 广告部  林先生</strong></p>  
            <p>电话:   +86-592-555588646 </p> 
            <p>传真:   +86-592-555858649</p>  
             <p>电子邮箱:  eric@5stonebtb.com</p>  
                
            <p><strong>展会联系人：林小姐</strong></p>   
            <p>热线:   +86-592-55858640</p>  
            <p>电子邮箱:  info5@stonebtb.com </p> 
            </div></li>
 		  </ul>
       <ul v-show="num==2">
          <li>
          	<div class="jiaru">
            <p style=" font-size:24px; font-weight:bold; color:#F00;">招聘启示  </p>
              <p style=" font-size:16px; font-weight:bold;">摄影师：</p>
                    <p style=" color:#333; padding-left:20px;">● 按照视频制作要求，配合策划、编辑完成各种拍摄任务</p>
                      <p style=" color:#333; padding-left:20px;">  ● 完成专题片或宣传片拍摄任务</p> 
                      <p style=" color:#333; padding-left:20px;">  ● 在导播指挥下，完成演播室摄像工作</p> 
                       <p style=" color:#333; padding-left:20px;"> ● 摄象机，照明设备以及摇臂等相关器材的日常维护和保养。</p> 
                       <p style=" color:#333; padding-left:20px;"> ● 为了提高整体视频拍摄的工作效率，积极配合和帮助其他部门，确保拍摄在规定时间内保质保量完成</p><br /> 
                     </p>
                    <p style=" font-size:16px; font-weight:bold;">岗位要求：</p>
                    <p style=" color:#333; padding-left:20px;">●  大专或以上学历，影视编导、新闻传播等相关专业毕业。
                    </p>
                      <p style=" color:#333; padding-left:20px;">  ● 2-3年拍摄工作经验，熟悉各种摄像机，较强的镜头感和创意感，能独立拍摄，熟练操作premiere、photoshop、 dps等非线性编辑软件，进行后期图片，视频处理</p> 
                      <p style=" color:#333; padding-left:20px;">  ● 良好的文字功底和丰富的创意能力，熟悉影视广告，栏目包装和视频制作流程，能与编导很好沟通。</p> 
                       <p style=" color:#333; padding-left:20px;"> ● 对光、构图、声音均有一定造诣，能承受高强度工作，能独立完成拍摄以及视频前期创意策划，脚本撰写、指导拍摄、后期制作的相关工作</p> <br /> 
                          <p style="padding-left:40px;"><strong>招聘人数：</strong>10名</p>
                          <p style="padding-left:40px;"><strong>工作年限：</strong> 2年</p>
                          <p style="padding-left:40px;"><strong>学历要求：</strong> 大专</p>
                          <p style="padding-left:40px;"><strong>性别要求：</strong> 不限</p>
                          <p style="padding-left:40px;"><strong>年龄要求： </strong>18-35岁</p>
                          <p style="padding-left:40px;"><strong>薪资待遇：</strong> 3000-8000</p>
            </div>
          </li>
		   </ul>
  
         </div>
        </div>
 </div>
</template>

<script type="text/javascript">
	export default {
  name: '',
  data () {
    return {
      msg: '',
      tablist:["关于我们","联系我们","加入我们"],
      num:0
    }
  },
  methods:{
    tab:function(index){
      this.num=index;
    }
  },
  mounted:function(){

	// 焦点图片水平滚动
	$("#slider1").Xslider({
		// 默认配置
		affect: 'scrollx', //效果  有scrollx|scrolly|fade|none
		speed: 800, //动画速度
		space: 6000, //时间间隔
		auto: true, //自动滚动
		trigger: 'mouseover', //触发事件 注意用mouseover代替hover
		conbox: '.conbox', //内容容器id或class
		ctag: 'div', //内容标签 默认为<a>
		switcher: '.switcher', //切换触发器id或class
		stag: 'a', //切换器标签 默认为a
		current:'cur', //当前切换器样式名称
		rand:false //是否随机指定默认幻灯图片
	});
	
	// 焦点图片垂直滚动
	$("#slider2").Xslider({
		affect:'scrolly',
		ctag: 'div',
		speed:400
	});
	
	// 焦点图片淡隐淡现
	$("#slider3").Xslider({
		affect:'fade',
		ctag: 'div'
	});
	
  }
}

</script>
<style scoped>

/*第一种形式*/

.hdk{ background:url(../assets/images/img_30.jpg) repeat-x; height:49px;border:1px solid #f4f4f4; border-top:none;}
#tabs0 {
 width: 1000px;
}
.menu0{
 width:1000px;

}
.menu0 li{
 display:block;
 float: left;
 width:100px;
 text-align: center;
 cursor:pointer;
 height:49px;
 font-family:宋体;
 font-size:12px;
 color:#333333;
 line-height:27px;
 display:inline;
 line-height:49px;
 border-right:1px solid #f4f4f4;
 
}
.menu0 li.hover{
	background:url(../assets/images/img_31.jpg) repeat-x;
   color:#000;
   font-weight:bold;
}
#main0 ul{
 display: none;
}
#main0 ul.block{
 display: block;
}

.b02 #tabs0 #piece0 li{ color:#555555; font-size:13px; font-family:Arial, Helvetica, sans-serif; line-height:18px; padding:15px;}
.box .mainlist{padding:10px;}
#piece0 ul li table tr td{ line-height:40px; line-height:40px; }
.yanse{ background:url(../assets/images/ing_34.jpg) repeat-x; width:260px; height:36px; line-height:36px; border:1px solid #abadb3;}
.login{ background:url(../assets/images/dr.jpg) 0px 0px; width:89px; height:27px; text-align:center; line-height:27px; }
.login a{color:#a83d04; display:block;}
.login a:hover{ background:url(../assets/images/dr.jpg) 0px 27px; width:89px; height:27px; text-align:center; line-height:27px; }
.yanse1{width:80px; height:40px; line-height:40px; border:1px solid #abadb3; margin-left:5px;}
.about,.contact,.jiaru{ line-height:23px; padding:30px;}


</style>