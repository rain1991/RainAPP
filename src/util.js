var token='123';
var user={}
export default{
	
  install(Vue,options)
  {	
    Vue.prototype.getToken = function () {
      return token;
    };
   	Vue.prototype.setToken = function (tem) {
	  token = tem;
	};
	Vue.prototype.getUser = function () {
      return user;
    };
   	Vue.prototype.setUser = function (tem) {
	  user = tem;
	};
  }

}