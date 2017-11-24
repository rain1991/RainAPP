<template>
  <f7-page no-navbar no-toolbar no-swipeback login-screen>
    <f7-login-screen-title>用户登录</f7-login-screen-title>
    <f7-list form>
      <f7-list-item>
        <f7-label>手机号</f7-label>
        <f7-input name="telephone" placeholder="Your telephone" type="text" v-model="telephone"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>密码</f7-label>
        <f7-input name="password" type="password" placeholder="Your password" v-model="password"></f7-input>
      </f7-list-item>
    </f7-list>
    <f7-list>
      <f7-list-button title="登陆" @click="Login"></f7-list-button>
      <f7-list-button title="取消" href="/"></f7-list-button>
      <f7-list-label>
        <div>如果你还没有注册账号，<f7-link href="/user/register/">请点击我</f7-link>！</div>
      </f7-list-label>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data () {
    return {
     telephone: null,
      password: null
    }
  },
  methods: {
    Login: function () {
    let f7 = this.$f7
		let self = this      
    let result=''
//    let token=''
  //    f7.alert({path:'/'});
      //   self.$router.push({name:'/user/register/',params:'22222'});
    	this.$ajax({
		      method: 'post',
		      url: this.login_API,
		      data: {param:{
		    		  		password:this.password,
		    		  		telephone:this.telephone
		         }
		      }
   }).then(function (response) {
   			 result=response.data;
		    console.log(result);
		    if(result.flag=='1'){
		    f7.alert(result.msg,'成功提示!');
		    self.setToken(result.token);
		    self.setUser(result.user);
		   //f7.alert(self.getUser().userName,'成功提示!');
		     self.$router.back();
		    }else{
		     f7.alert(result.msg,'失败提示!');	
		    }
		  })
		  .catch(function (response) {
		    console.log(response.data);
		     f7.alert('服务器繁忙，稍后再试！','错误提示！');
		  });
    }
  }
}
</script>

<style lang="less">

</style>
