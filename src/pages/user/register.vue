<template>
  <f7-page>
    <f7-navbar title="注册用户" back-link="Back" sliding>
      <f7-nav-right>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-right>
    </f7-navbar>
    <f7-block-title>填写个人信息</f7-block-title>
    <f7-list form>
      <f7-list-item>
        <f7-icon slot="media" f7="person"></f7-icon>
        <f7-label>昵称</f7-label>
        <f7-input type="text"  v-model="userName" placeholder="Your name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-icon slot="media" f7="email"></f7-icon>
        <f7-label>邮箱</f7-label>
        <f7-input type="email" v-model='email'  placeholder="E-mail"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-icon slot="media" f7="lock"></f7-icon>
        <f7-label>密码</f7-label>
        <f7-input type="password" v-model='password' placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-icon slot="media" f7="phone"></f7-icon>
        <f7-label>电话</f7-label>
        <f7-input type="tel" v-model='telephone' placeholder="Phone"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-icon slot="media" f7="persons"></f7-icon>
        <f7-label>性别</f7-label>
        <f7-input type="select" id='sex' v-model="sex">
        	<option value="0">美女</option>
          <option value="1">帅哥</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-icon slot="media" f7="calendar"></f7-icon>
        <f7-label>生日</f7-label>
        <f7-input type="date" v-model='birthday' placeholder="Birth day" value="2017-07-16"></f7-input>
      </f7-list-item>
    </f7-list>
     <f7-block>
      <f7-grid>
        <f7-col>
          <f7-button big active>重置</f7-button>
        </f7-col>
        <f7-col>
          <f7-button big  @click="submit">提交</f7-button>
        </f7-col>
      </f7-grid>
    </f7-block>
  </f7-page>
</template>

<script>

export default {
  data () {
    return {
      userName: '',
      email: '',
      password: '',
      telephone: '',
      sex: '0',
      birthday: ''
    }
  },
   methods: {
    submit: function () {
    	let f7 = this.$f7
    	this.$ajax({
      method: 'post',
      url: this.register_API,
      data: {param:{
    		  		userName : this.userName,
    		  		email:this.email,
    		  		password:this.password,
    		  		telephone:this.telephone,
    		  		sex:this.sex,
    		  		birthday:this.birthday
         }
      }
   }).then(function (response) {
   			let data=response.data;
		    console.log(data);
		    if(data.flag=='1'){
		    f7.alert(data.msg,'成功提示!');
		    }else{
		     f7.alert(data.msg,'失败提示!');	
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

<style lang="less" scoped>
.resizeable{
  height: 43px;
}
</style>
