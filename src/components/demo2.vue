<template>
	<div>
		<p>测试2思考角度分类撒娇地方撒涉及到法律捡垃圾水电费家时代峻峰加 </p>
		<p>
			<input type="text" v-model="val1">
			<button @click="sent">发送给demo1</button></p>
		<p>{{"接收的数据为："+msg}}</p>
	</div>
</template>
<script type="text/javascript">
	import bus from '../assets/js/bus';
	export default {
    data () {
    return {
      msg: '',
      val1:''
    }
  },
  methods:{
  	sent:function(){
  		bus.$emit("sent1",this.val1);
  	}
  },
  mounted:function(){
  	var self=this;
  	bus.$on("sent2",function(dd){
  		self.msg=dd;
  	})
  }

}

</script>
<style scoped>
	

</style>

