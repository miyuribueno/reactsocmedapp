(this.webpackJsonpsocial_media_app=this.webpackJsonpsocial_media_app||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),o=a.n(s),l=(a(22),a(2)),i=a(3),c=a(5),u=a(4),m=(a(23),Object(n.createContext)()),d=a(6),p=a.n(d),h=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",confirmPassword:""},e.registerHandler=function(t){""===t.username.trim()||""===t.password.trim()||""===t.confirmPassword.trim()?alert("please fill up the form"):p.a.post("http://localhost:8080/users/register",t).then((function(t){t.data.error?alert(t.data.error):(alert("Registered!"),e.resetState())}))},e.resetState=function(){e.setState({username:"",password:"",confirmPassword:""})},e.usernameInputHandler=function(t){e.setState({username:t.target.value})},e.passwordInputHandler=function(t){e.setState({password:t.target.value})},e.confirmPasswordInputHandler=function(t){e.setState({confirmPassword:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t={username:this.state.username,password:this.state.password,confirmPassword:this.state.confirmPassword};return r.a.createElement("div",{className:"form"},r.a.createElement("h1",{className:"title"},"Registration"),r.a.createElement("label",null,"Username "),r.a.createElement("input",{type:"text",value:this.state.username,name:"registrationForm",onChange:this.usernameInputHandler}),r.a.createElement("label",null,"Password "),r.a.createElement("input",{type:"password",value:this.state.password,name:"registrationForm",onChange:this.passwordInputHandler}),r.a.createElement("label",null,"Confirm Password "),r.a.createElement("input",{type:"password",value:this.state.confirmPassword,name:"registrationForm",onChange:this.confirmPasswordInputHandler}),r.a.createElement("button",{className:"formBtn",onClick:function(a){e.registerHandler(t)}},"Register"),r.a.createElement("p",null,"Already registered?"))}}]),a}(r.a.Component),f=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.loginHandler=function(e){""===e.username.trim()||""===e.password.trim()?alert("please fill up the form"):p.a.post("http://localhost:8080/users/login",e).then((function(e){e.data.error?alert(e.data.error):alert("Welcome ".concat(e.data.username))}))},e.resetState=function(){e.setState({username:"",password:"",confirmPassword:""})},e.usernameInputHandler=function(t){e.setState({username:t.target.value})},e.passwordInputHandler=function(t){e.setState({password:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t={username:this.state.username,password:this.state.password,confirmPassword:this.state.confirmPassword};return r.a.createElement("div",{className:"form"},r.a.createElement("h1",{className:"title"},"Login"),r.a.createElement("label",null,"Username "),r.a.createElement("input",{type:"text",value:this.state.username,name:"registrationForm",onChange:this.usernameInputHandler}),r.a.createElement("label",null,"Password "),r.a.createElement("input",{type:"password",value:this.state.password,name:"registrationForm",onChange:this.passwordInputHandler}),r.a.createElement("button",{className:"formBtn",onClick:function(a){e.loginHandler(t)}},"Login"),r.a.createElement("p",null,"Not yet registered?"))}}]),a}(r.a.Component),w=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(m.Provider,{value:this.state},r.a.createElement(h,null),r.a.createElement(f,null))}}]),a}(r.a.Component),v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{id:"mainContainer"},r.a.createElement("h1",null,"Social Media App"),r.a.createElement(w,null))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.577173c3.chunk.js.map