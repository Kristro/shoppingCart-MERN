(this.webpackJsonpr=this.webpackJsonpr||[]).push([[0],{22:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),o=(a(27),a(5)),s=a(6),i=a(8),m=a(7),d=a(9),u=a(10),p=a(11),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={arr:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/product-listing/").then((function(e){return e.json()})).then((function(t){return e.setState({arr:t})}))}},{key:"render",value:function(){return c.a.createElement(n.Fragment,null,this.state.arr.map((function(e){return c.a.createElement("div",{style:{width:"400px"},key:e._id},c.a.createElement("div",{className:"card text-white bg-dark"},c.a.createElement("img",{src:e.img,className:"card-img-top",style:{height:"300px"},alt:"phonePic"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.brand," ",e.model),c.a.createElement("p",{className:"card-text"},"Color: ",e.color),c.a.createElement("p",{className:"card-text"},"Price: ",e.price," $"),c.a.createElement(u.b,{to:"/product/".concat(e._id),key:e._id},c.a.createElement("div",{className:"btn btn-primary"},"View Phone ")))))})))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={phoneObj:{}},a.addToCart=function(){var e=a.props.match.params.id;fetch("http://localhost:5000/shopping-cart/".concat(e),{method:"POST"}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("http://localhost:5000/product-view/".concat(t)).then((function(e){return e.json()})).then((function(t){return e.setState({phoneObj:t})}))}},{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",width:"100%"}},c.a.createElement("div",{className:"col-lg-4  "},c.a.createElement("div",{className:"card bg-dark text-white w-75 "},c.a.createElement("img",{className:"card-img-top",src:this.state.phoneObj.img,alt:"",style:{height:"300px"}}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title text-center "},this.state.phoneObj.brand," ",this.state.phoneObj.model),c.a.createElement("h6",{className:"font-weight-bolder"},"Price: $",this.state.phoneObj.price)))),c.a.createElement("div",{style:{padding:"100px",width:"500px",color:"#fff"}}," ","Description: ",c.a.createElement("br",null),this.state.phoneObj.description)),c.a.createElement("div",{style:{width:"100%",padding:"20px",textAlign:"center"}},c.a.createElement("button",{type:"button",onClick:this.addToCart,className:"btn add btn-danger"},"Add to Cart"),c.a.createElement("button",{type:"button",className:"btn btn-success"},c.a.createElement(u.b,{to:"/"},"Continue Shopping"))))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={arr:[],total:0},a.deleteFromCart=function(e){fetch("http://localhost:5000/shopping-cart/".concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then((function(){return a.componentDidMount()}))},a.updateQuantity=function(e,t){fetch("http://localhost:5000/shopping-cart/".concat(t),{method:"PATCH",body:JSON.stringify({quantity:e}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(){return a.componentDidMount()}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/shopping-cart").then((function(e){return e.json()})).then((function(t){return e.setState({arr:t,total:t.reduce((function(e,t){return e+t.quantity*t.price}),0)})}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{style:{width:"100vw"}},c.a.createElement("div",{className:"py-5"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 p-5 bg-light rounded shadow-lg my-3"},c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col",className:"border- bg-light"},c.a.createElement("div",{className:"py-2 px-3 text-monospace "},"PRODUCT")),c.a.createElement("th",{scope:"col",className:"border-5 bg-light"},c.a.createElement("div",{className:"py-2 text-monospace"},"PRICE")),c.a.createElement("th",{scope:"col",className:"border-5 bg-light"},c.a.createElement("div",{className:"py-2 text-monospace"},"QUANTITY")),c.a.createElement("th",{scope:"col",className:"border-5 bg-light"},c.a.createElement("div",{className:"py-2 text-monospace"},"REMOVE")))),c.a.createElement("tbody",null,this.state.arr.map((function(t){return c.a.createElement("tr",{key:t._id},c.a.createElement("th",{scope:"row",className:"border-0"},c.a.createElement("div",{className:"p-2"},c.a.createElement("img",{src:t.img,width:"100",className:"img-fluid rounded shadow"}),c.a.createElement("div",{className:"ml-3 d-inline-block align-middle"},c.a.createElement("h5",{className:"mb-0"}," ",c.a.createElement("span",{className:"text-dark d-inline-block align-middle"},t.brand," ",t.model)),c.a.createElement("span",{className:"text-muted font-weight-normal font-italic d-block"},c.a.createElement("div",{className:"5"},c.a.createElement("div",{className:"1"},t.description)))))),c.a.createElement("td",{className:"border-0 align-middle price"}," ",t.price," $"),c.a.createElement("td",{className:"align-middle"},c.a.createElement("input",{className:"w-50",onChange:function(a){return e.updateQuantity(a.target.value,t._id)},type:"number",min:"1",value:t.quantity})),c.a.createElement("td",{className:"align-middle"},c.a.createElement("button",{className:"del",onClick:e.deleteFromCart.bind(e,t._id)},"delete")))}))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"font-weight-bolder text-uppercase text-monospace "},c.a.createElement("span",null,"total"),c.a.createElement("br",null),c.a.createElement("input",{value:this.state.total,className:"w-50 rounded-top-sm text-right total",type:"number",disabled:!0}),"$")),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("button",{type:"button",className:"btn btn-success w-25 font-weight-bolder "},"Payment ",c.a.createElement("i",{className:"far fa-credit-card"}))))))))))))}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("header",null,c.a.createElement("strong",null,"HandiPhone eShop")," ",c.a.createElement(u.b,{to:"/cart"},c.a.createElement("i",{className:"fas fa-shopping-cart fa-2x"})),c.a.createElement(u.b,{to:"/",style:{padding:"0 50px"}},"Home")),c.a.createElement("div",{className:"box"},c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/",exact:!0,component:h}),c.a.createElement(p.a,{path:"/product/:id",component:E}),c.a.createElement(p.a,{path:"/cart",component:b}))))}}]),t}(n.Component);var g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f,null),c.a.createElement("footer",null,"Tareq Almasri \xa9 2019"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(33),a(34);l.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.e46482df.chunk.js.map