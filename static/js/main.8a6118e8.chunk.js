(this.webpackJsonpmyrobotfriends=this.webpackJsonpmyrobotfriends||[]).push([[0],{13:function(e,a,n){},15:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13),n(14);var l=n(3),c=n(4),s=n(6),m=n(5),u=n(7),h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=function(e){var a=e.name,n=e.email,t=e.id;return r.a.createElement("div",{className:"tc bg-light-green \r br3 pa3 ma2 grow bw3 shadow-5"},r.a.createElement("img",{alt:"robots",src:"http://robohash.org/"+t,style:{width:200,height:200}}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n,r.a.createElement("br",null)," ")))},b=function(e){var a=e.robots;return r.a.createElement("div",null,a.map((function(e,n){return r.a.createElement("div",{className:"dib",key:n},r.a.createElement(d,{name:a[n].name,email:a[n].email,id:a[n].id}))})))},f=function(e){e.searchfield;var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",className:"pa3 ba b--green bg-lightest-blue",placeholder:"search robots",onChange:a}))},g=(n(15),function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"3px solid #0ccac4d6",height:"800px"}},e.children)}),p=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:h,searchfield:""},e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(a){return e.setState({robots:h})}))}},{key:"render",value:function(){var e=this.state,a=e.robots,n=e.searchfield,t=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(b,{robots:t}))):r.a.createElement("h1",null,"Loading")}}]),a}(t.Component);o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.8a6118e8.chunk.js.map