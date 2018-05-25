<template>
	<div>
	<div class="wrap_top">
    	<div class="top">
        	<div class="logo"><a href="#"><img src="../assets/images/logo.jpg" width="200" height="74" /></a></div>
            <div id="navMenu">
                <UL class="menu1">
                    <li class="onelink" @click="info(1)">网站首页</li>
                    <li class="navthis1" @click="info(2)">作品欣赏
                        <ul>
                            <li><a href="#">特色内景</a></li>
                            <li><a href="#">时尚写真</a></li>
                            <li><a href="#">高端外景</a></li>
                        </ul>
                    </li> 
                     <li class="navthis22" @click="info(3)">每日客照</li>
                    <li class="navthis8" @click="info(4)">最近活动
                    </li>
                    <li class="navthis27" @click="info('w')"><a href="#" >微博评价</a></li>   
                    <li class="navthis9"  @click="info(5)">新闻动态
                    </li>  
                    <li class="navthis24" @click="info(6)">留言板</li>
                    <li class="navthis25" @click="info(7)">联系我们</li>
                    </ul>
			</div>
        </div>
	 </div>
     <div class="wrap_banner">
     	<div class="banner"></div>
     </div>
	</div>
</template>
<script type="text/javascript">
	var sfHover = function() {
		var sfEls = document.getElementById("navMenu").getElementsByTagName("LI");
		for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
		this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
		this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
		}
		}
		if (window.attachEvent) window.attachEvent("onload", sfHover);

export default {
  data () {
    return {
      msg: ''
    }
  },
  methods:{
    info:function(mm){
        this.$emit("sentinfo",mm);
    }
  }

}
</script>
<style type="text/css">
	


</style>