<template>
	 <div class="mian">
	<div id="tabs0">
        <div class="hdk">
         <ul class="menu0" id="menu0">
          <li onClick="setTab(0,0)" class="hover">登录</li>
          <li onClick="setTab(0,1)">注册</li>
          <li onClick="setTab(0,2)">找回密码</li>
         </ul>
         </div>
         <div class="piece" id="piece0">
          <ul class="block">
          <li>
          	<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
                <td>&nbsp;</td>
                <td><label for="checkbox"></label></td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td width="6%">&nbsp;</td>
                <td width="31%" align="right" style="color:#000; font-size:14px; line-height:50px; line-height:50px;">用户名\邮箱：</td>
                <td width="57%">
                	<input type="text" name="textfield" id="textfield" class="yanse">
                </td>
                <td width="6%">&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td align="right" style="color:#000; font-size:14px; line-height:50px; line-height:50px;">密 码：</td>
                <td>
                <input type="text" name="textfield2" id="textfield2" class="yanse"></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><input type="checkbox" name="checkbox" id="checkbox" >
                  自动登录</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><table width="205" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="41"><div class="login"><a href="#">登录</a></div></td>
                    <td width="10">&nbsp;</td>
                    <td width="69"><a href="#" style="color:#999">忘记密码</a></td>
                    <td width="14" align="center" style="color:#999">|</td>
                    <td width="47"><a href="#" style="color:#999">注册</a></td>
                    <td width="17">&nbsp;</td>
                  </tr>
                </table></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><label for="checkbox"></label></td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </table>
          </li>
		   </ul>
          <ul>
          <li><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
                <td>&nbsp;</td>
                <td><label for="checkbox"></label></td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td width="6%">&nbsp;</td>
                <td width="31%" align="right" style="color:#000; font-size:14px; line-height:50px; line-height:50px;">用户名：</td>
                <td width="57%">
                	<input type="text" name="textfield" id="textfield" class="yanse">
                </td>
                <td width="6%">&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td align="right" style="color:#000; font-size:14px; line-height:50px; line-height:50px;">邮箱：</td>
                <td>
                <input type="text" name="textfield2" id="textfield2" class="yanse"></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td width="6%">&nbsp;</td>
                <td width="31%" align="right" style="color:#000; font-size:14px; line-height:50px; line-height:50px;">头像：</td>
                <td width="57%"><div style="height:0px; overflow:hidden; width:0;">
										<input type="file"   id="a1"  ></div>
										<input type="text"  id="t1" class="yanse">
										<input type="submit" value="浏览" class="yanse1">
								</td>
                <td width="6%">&nbsp;</td>
              </tr>
              <tr>
                <td width="6%">&nbsp;</td>
                <td width="31%" align="right" style="color:#000; font-size:14px; line-height:50px; line-height:50px;">电话：</td>
                <td width="57%">
                	<input type="text" name="textfield" id="textfield"  class="yanse">
                </td>
                <td width="6%">&nbsp;</td>
              </tr>
              <tr>
                <td width="6%">&nbsp;</td>
                <td width="31%" align="right" style="color:#000; font-size:14px; line-height:50px; line-height:50px;">密码：</td>
                <td width="57%">
                	<input type="password" name="textfield" id="textfield" class="yanse"></td>
                <td width="6%">&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><table width="205" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="89"><div class="login"><a href="#">免费注册</a></div></td>
                    <td width="6">&nbsp;</td>
                    <td width="66">已经注册请</td>
                    <td width="10" align="center" style="color:#999">&nbsp;</td>
                    <td width="28"><a href="#" style="color:#999">登录</a></td>
                    <td width="12">&nbsp;</td>
                  </tr>
                </table></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><label for="checkbox"></label></td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </table></li>
 		</ul>
        <ul class="block">
          <li>
          	<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
                <td>&nbsp;</td>
                <td><label for="checkbox"></label></td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td width="6%">&nbsp;</td>
                <td width="31%" align="right" style="color:#000; font-size:14px; line-height:50px; line-height:50px;"> 注册邮箱 ：</td>
                <td width="57%">
                	<input type="text" name="textfield" id="textfield"class="yanse">
                </td>
                <td width="6%">&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td align="right" style="color:#000; font-size:14px; line-height:50px; line-height:50px;">重复邮箱：</td>
                <td>
                <input type="text" name="textfield2" id="textfield2" class="yanse">
              </td>
                <td>&nbsp;</td>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><table width="205" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="41"><div class="login"><a href="#">找回密码</a></div>
                    </td>
                    <td width="10">&nbsp;</td>
                    <td width="69">&nbsp;</td>
                    <td width="14">&nbsp;</td>
                    <td width="47">&nbsp;</td>
                    <td width="17">&nbsp;</td>
                  </tr>
                </table></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><label for="checkbox"></label></td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </table>
          </li>
		   </ul>
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
      msg: ''
    }
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