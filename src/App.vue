<template>
  <div id="app">
  	<top @sentinfo="mydata"></top>
    <router-view/>
    <footerb></footerb>
  </div>
</template>

<script>
export default {
  name: 'App',
    data () {
    return {
      msg: ''
    }
  },
  methods:{
  	mydata:function(d){
  		if(d==1){
					this.$router.push('/index');
  		}else if(d==2){
  			this.$router.push('/photoes');
  		}else if(d==3){
  			this.$router.push('/customers');
  		}else if(d==4){
  			this.$router.push('/activity');
  		}else if(d==5){
  			this.$router.push('/news');
  		}else if(d==6){
  			this.$router.push('/message');
  		}else if(d==7){
  			this.$router.push('/contact');
  		}else if(d==8){
        this.$router.push('/weibo1');
      }else if(d==9){
        this.$router.push('/parent');
      }
  		
  	}
  }
}
</script>

<style>
#app {

}
</style>
