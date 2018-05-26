<template>
	<div>
		<p>测试1 dksjfalskjdfklsdjfklasjklfjkasljd;fkljas;klfj</p>
		<p><input type="text" v-model="val2"><button @click="sent">发送给demo2</button></p>
		<p>{{"接收数据为："+msg}}</p>
	</div>
</template>
<script type="text/javascript">
		import bus from '../assets/js/bus.js';
	export default {
		 name: 'demo1',
    data () {
    return {
      msg: '',
      val2:''
    }
  },
  methods:{
  	sent:function(){
  		bus.$emit("sent2",this.val2);
  	}
  },
  mounted:function(){
  	var self=this;
  	bus.$on("sent1",function(ss){
  		self.msg=ss;
  	})
  }

}

</script>
<style scoped>
	
	
</style>