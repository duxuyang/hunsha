<template>
	<div>
 		<my-son1></my-son1>
		<my-son2></my-son2> 
		<ul>
			<li @click="pp">测试1</li>
			<li @click="tab">测试2</li>
			<li>测试3</li>
			<li>测试4</li>
		</ul>
		<router-view/>
	</div>

</template>
<script type="text/javascript">
	import demo1 from '@/components/demo1';
  import demo2 from '@/components/demo2';

export default {
    data () {
    return {
      msg: ''
    }
  },
  methods:{
  	pp:function(){
  		this.$router.push('/demo1');
  	},
  	tab:function(){
  		this.$router.push('/demo2');
  	}
  },
  components:{
  	"my-son1":demo1,
  	"my-son2":demo2
  }
}
</script>
<style scoped>
ul{
	display: flex;
}
	ul li{
		width:100px;
		height:40px;
		display: flex;
		justify-content:center;
		align-items:center;
		margin-left:10px;
		cursor:pointer;
	}


</style>