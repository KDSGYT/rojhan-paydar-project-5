(this["webpackJsonprojhan-paydar-project-5"]=this["webpackJsonprojhan-paydar-project-5"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),c=(a(22),a(12)),i=a(13),s=a(16),u=a(15),m=a(14),d=a.n(m);a(40);var p=function(e){var t=e.image;return console.log(t),r.a.createElement("div",null,r.a.createElement("img",{src:t.featured_image,alt:t.name}))},h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).getRestaurants=function(t){t.preventDefault(),d()({url:"https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city",method:"GET",responseType:"JSON",headers:{"user-key":"6dd0b6c953cd598dfe6caa540847c370"},params:{count:10,start:20}}).then((function(t){t=t.data.restaurants;var a=[];for(var n in t)a.push(t[n].restaurant);e.setState({restaurants:a})}))},e.state={restaurants:[],restaurantChoices:[]},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"flexContainer"},r.a.createElement("h1",null,"Foodie&Find"),r.a.createElement("p",null,"For when you really can't decide on where to eat. We promise we won't give you an \"I don't know, what do you want?\" in response. ;)"),r.a.createElement("button",{onClick:this.getRestaurants},"TIME FOR FOOD")),this.state.restaurants.map((function(e){return r.a.createElement("div",{className:"flexContainer2"},r.a.createElement("ul",{key:e.id},r.a.createElement("div",null,r.a.createElement("li",null,"Restaurant: ",e.name),r.a.createElement("li",null,r.a.createElement(p,{image:e})),r.a.createElement("li",null,"Hours: ",e.timings),r.a.createElement("li",null,"Menu: ",e.menu_url),r.a.createElement("li",null,"Cuisine: ",e.cuisines),r.a.createElement("li",null,"Location: ",e.location.address))))}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.335c7f70.chunk.js.map