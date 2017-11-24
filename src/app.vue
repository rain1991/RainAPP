<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- 左侧栏 -->
    <f7-panel left cover layout="dark">
      <f7-view id="left-panel-view">
        <f7-pages>
          <f7-page>
            <f7-block-title>左侧栏目标题{{user.userName}}</f7-block-title>
            <f7-block>
              <p>这里是左侧栏目描述</p>
            </f7-block>
            <f7-block-title>列表说明</f7-block-title>
            <f7-list>
              <f7-list-item v-for="(item, index) in items"
                  :media="item.icon"
                  link-close-panel
                  link-view=".view-main"
                  :link="item.link"
                  :title="item.title"
                  :key="index"
              ></f7-list-item>
            </f7-list>
            <f7-block>
              <p>左侧栏下方描述</p>
            </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- 主页面 -->
    <f7-views>
      <f7-view id="main-view" navbar-through toolbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
        	 <f7-nav-left>   	 	
            <!--<f7-link  href="/login/" >
            	<i class='icon f7-icons'>person_fill</i>
            </f7-link>-->
            <f7-link  @click="doLogin" >
            	<i class='icon f7-icons'>person_fill</i>
            </f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>Rain APP</f7-nav-center>
         <f7-nav-right>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <main-page></main-page>
        </f7-pages>
        <!-- IOS Theme Toolbar -->
        <f7-toolbar v-if="$theme.ios">
          <f7-link>Dummy Link</f7-link>
          <f7-link open-popover>Menu</f7-link>
        </f7-toolbar>
      </f7-view>
    </f7-views>

    <f7-popover style="width: 240px">
      <f7-list>
        <f7-list-button v-for="(btn, index) in popoverBtns" 
          :href="btn.link"
          :key="index"
          close-popover
        >{{btn.title}}</f7-list-button>
      </f7-list>
    </f7-popover>
  </div>
</template>
<keep-alive>
     <router-view @user="user"></router-view>
</keep-alive>
<script>
import MainPage from './pages/mainPage.vue'
var user={userName:'123'}
//user = sessionStorage.user;
export default {
  data () {
    return {
      user: user,
      token:'',

      items: [
      {
          title: '注册',
          icon:"<i class='icon f7-icons'>person</i>",
          link: '/user/register/'
       },{
          title: '主题',
          icon:"<i class='icon f7-icons'>star_half</i>",
          link: '/theme/'
       },{
          title: 'Forms',
          icon:"<i class='icon icon-f7'></i>",
          link: '/forms/'
        }
      ],
      popoverBtns: [
        {
          title: 'Modals',
          link: '/modals/'
        }, {
          title: 'Popover',
          link: '/popover/'
        }, {
          title: 'Tabs',
          link: '/tabs/'
        }, {
          title: 'Side Panels',
          link: '/sidePanels/'
        }, {
          title: 'List View',
          link: '/listView/'
        }, {
          title: 'Forms',
          link: '/forms/'
        }
      ]
    }
  },
  components: { MainPage },
  methods: {
   doLogin: function () {
      let f7 = this.$f7
      let self = this 
			 f7.modalLogin('Enter your telephone and password', function (telephone, password) {   
		    let result=''
    		self.$ajax({
		      method: 'post',
		      url: self.login_API,
		      data: {param:{
		    		  		password:password,
		    		  		telephone:telephone
		         }
		      }
   }).then(function (response) {
   			 result=response.data;
		    console.log(result);
		    if(result.flag=='1'){
		    f7.alert(result.msg,'成功提示!');
		    self.setToken(result.token);
		    self.setUser(result.user);
		    self.$emit('user',result.user);
		  // f7.alert(self.getUser().userName,'成功提示!');
		    }else{
		     f7.alert(result.msg,'失败提示!');	
		    }
		  })
		  .catch(function (response) {
		    console.log(response.data);
		     f7.alert('服务器繁忙，稍后再试！','错误提示！');
		  });
      })
    },
    //子组件(register)将用户名传过来
    user(user){
      sessionStorage.user = user;
      this.user = sessionStorage.user;
    }
  }
// mounted() {
// 	let f7 = this.$f7
//	let self = this 
//	
//console.log('444');
//}
}
</script>

<style lang="less">
  html.ios-gt-8 .navbar .center{
    font-weight: 500;
  }
</style>
