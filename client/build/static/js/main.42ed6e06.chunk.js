(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/chart.4e73e9d2.png"},35:function(e,t,a){e.exports=a.p+"static/media/measuring_shoes.ea81012e.gif"},36:function(e,t,a){e.exports=a.p+"static/media/ClassicBlack.f3aeebf4.png"},37:function(e,t,a){e.exports=a.p+"static/media/ClassicWhite.c17c87af.png"},38:function(e,t,a){e.exports=a.p+"static/media/StealthBlack.d96e86e8.png"},39:function(e,t,a){e.exports=a.p+"static/media/Blue.dab300fc.png"},40:function(e,t,a){e.exports=a.p+"static/media/Pink.977f01bf.png"},41:function(e,t,a){e.exports=a.p+"static/media/RebelBlack.bd3eb6bf.png"},42:function(e,t,a){e.exports=a.p+"static/media/RebelWhite.66a9d94d.png"},43:function(e,t,a){e.exports=a.p+"static/media/Red.5cee1162.png"},44:function(e,t,a){e.exports=a.p+"static/media/Wanderer.b5adc1f8.png"},47:function(e,t,a){e.exports=a(77)},52:function(e,t,a){},70:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),s=a.n(l),c=(a(52),a(10)),o=a(11),i=a(13),d=a(12),u=a(14),m=a(17),h=a(6),p=a(7),g=a.n(p),b=(a(70),a(18)),f=a.n(b),E=a(33),v=a(15),y=(a(30),a(34)),S=a.n(y),C=a(35),k=a.n(C),A=function(e){var t=e.handleShoeMeasured,a=e.show_hide,n=e.chart,l=e.measuring_guide,s=e.shoeMeasured,c=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Measuring Shoe Size"),r.a.createElement("p",null,"Before filling out the survey form, please check these instructions how to measure your shoe size"),r.a.createElement("div",{className:a?"shoe_measurment none":"shoe_measurment"},r.a.createElement("img",{style:{height:"600px"},src:l,alt:"shoe chart"}),r.a.createElement("img",{style:{height:"600px"},src:n,alt:"shoe chart"})),r.a.createElement("div",{className:"sameAddress"},r.a.createElement("input",{id:"shoeMeasured",type:"checkbox",name:"shoeMeasured",checked:s,onChange:c}),r.a.createElement("label",null," Yes, I have Measured My Shoe Size"),r.a.createElement("button",{onClick:t},"Let Me Fill The Form")))},O=a(36),x=a.n(O),w=a(37),M=a.n(w),j=a(38),N=a.n(j),z=a(39),F=a.n(z),B=a(40),P=a.n(B),_=a(41),T=a.n(_),W=a(42),q=a.n(W),G=a(43),D=a.n(G),I=a(44),R=a.n(I),Y=[{name:"Classic Black",src:x.a},{name:"Classic White",src:M.a},{name:"Stealth Black",src:N.a},{name:"Rebel Black",src:T.a},{name:"Rebel White",src:q.a},{name:"Blue",src:F.a},{name:"Pink",src:P.a},{name:"Red",src:D.a},{name:"Wanderer",src:R.a}];function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach(function(t){Object(v.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",country:"",email:"",pledge:1,shoes:[{color:"",size:"",streetAddress:"",city:"",state:"",zipCode:"",sameAddress:!1}],displayForm:!0,backer_id:"",error:{email_error:"",invalidBackerId:null},shoeMeasured:!1,fillTheForm:!1,hideShoeMeasuringGuide:!1},a.hideShoeMeasuringGuide=function(){a.setState({hideShoeMeasuringGuide:!a.state.hideShoeMeasuringGuide})},a.handleAddAnotherColor=function(){a.setState({shoes:a.state.shoes.concat([{color:"",size:"",streetAddress:"",city:"",state:"",zipCode:""}])})},a.handleShoeMeasured=function(){a.state.shoeMeasured&&a.setState({fillTheForm:!0})},a.handleChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;a.setState(Object(v.a)({},r,n))},a.handleShoeChange=function(e,t,n){return function(t){var r=t.target,l="checkbox"===r.type?r.checked:r.value,s=r.name,c=a.state.shoes.map(function(t,a){return e!==a?t:L({},t,Object(v.a)({},s,l||n))});a.setState({shoes:c})}},a.copyAddress=function(e){return function(t){var n=a.state.shoes,r=n.map(function(t,a){return e!==a?t:t.sameAddress?L({},t,{streetAddress:"",city:"",state:"",zipCode:"",sameAddress:!1,selected:!0}):L({},t,{streetAddress:n[e-1].streetAddress,city:n[e-1].city,state:n[e-1].state,zipCode:n[e-1].zipCode,sameAddress:!0,selected:!0})});a.setState({shoes:r})}},a.handleSameAddress=function(e){console.log({idx:e}),a.state.shoes.filter(function(t,a){return console.log({shoe:t,i:a,idx:e})})},a.handleSubmit=function(){var e=Object(E.a)(f.a.mark(function e(t){var n,r,l,s,c,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.name,l=n.country,s=n.email,c=n.pledge,o=n.shoes,e.prev=2,e.next=5,g.a.post("http://localhost:5000/api/v1/order",{name:r,email:s,country:l,pledge:c,shoes:o});case 5:200===e.sent.status&&a.setState({displayForm:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),a.setState({error:{email_error:e.t0.response.data.error}});case 12:a.setState({name:"",country:"",age:"",shoes:[{color:"",size:"",streetAddress:"",city:"",state:"",zipCode:""}]});case 13:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:5000/api/v1/backer/".concat(this.props.match.params.id)).then(function(t){e.setState({backer_id:t.data.map(function(e){return e.backer_id})[0],email:t.data.map(function(e){return e.email})[0],pledge:t.data.map(function(e){return e.pledge})[0]})}).catch(function(t){e.setState({invalidBackerId:t.response.status})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.country,l=t.email,s=t.pledge,c=t.shoes,o=t.displayForm,i=t.error,d=t.hideShoeMeasuringGuide,u=t.invalidBackerId,m=t.shoeMeasured,p=t.fillTheForm;return 404===u?r.a.createElement(h.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,!p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{chart:S.a,measuring_guide:k.a,show_hide:d,hideShoeMeasuringGuide:this.hideShoeMeasuringGuide,shoeMeasured:m,handleChange:this.handleChange,handleShoeMeasured:this.handleShoeMeasured})),p&&r.a.createElement("div",null,o?r.a.createElement("div",{className:"container"},r.a.createElement("h1",{style:{marginBottom:0}},"Please Fill Out This Survey Form"),r.a.createElement("p",{style:{color:"blue",marginTop:1}},"All Fields Are Required"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"order-info"},r.a.createElement("label",null,"Full Name:"),r.a.createElement("input",{type:"text",name:"name",value:a,onChange:this.handleChange,placeholder:"Aditya Gyawali...",required:!0})," ",r.a.createElement("br",null),r.a.createElement("label",null,"Country:"),r.a.createElement("input",{type:"text",name:"country",value:n,onChange:this.handleChange,placeholder:"Nepal....",required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",value:l,onChange:this.handleChange,required:!0,disabled:!0})," ",r.a.createElement("p",{className:""===i.email_error?"error none":"error",style:{color:"red"}},i.email_error),r.a.createElement("br",null),"Number OF Pedges:"," ",r.a.createElement("select",{name:"pledge",value:parseInt(s,10),onChange:this.handleChange,disabled:!0},r.a.createElement("option",{defaultValue:!0,value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")),r.a.createElement("br",null)),r.a.createElement("a",{href:"http://www.rensoriginal.com",rel:"noopener noreferrer",target:"_blank"},"Check Our Website To See The Colors"),c.map(function(t,a){return r.a.createElement("div",{key:a,className:"delivery-items"},r.a.createElement("h3",null,"Pick Your Color and Size ","#".concat(a+1)),r.a.createElement("div",{className:"color-size"},Y.map(function(n,l){return r.a.createElement("div",{key:l,className:"collections"},r.a.createElement("label",null,n.name),r.a.createElement("img",{style:{cursor:"pointer",height:"250px"},src:n.src,alt:n.name,value:t.color,name:"color",className:t.color===n.name?"active":"",onClick:e.handleShoeChange(a,l,n.name)}))})),r.a.createElement("div",{className:"size"},r.a.createElement("label",null," Size"),r.a.createElement("input",{type:"text",name:"size",value:t.size,onChange:e.handleShoeChange(a),placeholder:"7 Men EU/43 Women US...",required:!0})),r.a.createElement("br",null),a>0&&r.a.createElement("div",{className:"sameAddress"},r.a.createElement("input",{id:"sameAddress",type:"checkbox",name:"sameAddress",checked:e.state.sameAddress,onChange:e.copyAddress(a)}),r.a.createElement("label",null,"Send This Shoes To Previous Address")),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Address ","#".concat(a+1)),r.a.createElement("div",{className:"address"},r.a.createElement("div",{className:"street"},r.a.createElement("label",null,"Street Address"),r.a.createElement("input",{type:"text",placeholder:"street address...",name:"streetAddress",value:t.streetAddress,onChange:e.handleShoeChange(a),required:!0})),r.a.createElement("div",{className:"city"},r.a.createElement("label",null,"City"),r.a.createElement("input",{type:"text",placeholder:"city...",name:"city",value:t.city,onChange:e.handleShoeChange(a),required:!0})),r.a.createElement("div",{className:"state"},r.a.createElement("label",null,"State"),r.a.createElement("input",{type:"text",placeholder:"state...",name:"state",value:t.state,onChange:e.handleShoeChange(a),required:!0})),r.a.createElement("div",{className:"code"},r.a.createElement("label",null,"Zip Code"),r.a.createElement("input",{type:"number",placeholder:"zip code...",name:"zipCode",value:t.zipCode,onChange:e.handleShoeChange(a),required:!0})))))}),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",className:"add-color ".concat(parseInt(s,10)<=c.length?"none":""),onClick:this.handleAddAnotherColor},"Add Another Color"),r.a.createElement("button",null,"Submit")))):r.a.createElement("div",null,r.a.createElement("p",null,"Thank Your For Submitting The Form"),r.a.createElement("p",null,"Please Check Your Email"))))}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={orders:[],deliveries:[],backers:[],loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:5000/api/v1/backer").then(function(t){e.setState({backers:t.data,loading:!1})}),g.a.get("http://localhost:5000/api/v1/order/all").then(function(t){e.setState({orders:t.data,loading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.backers;return e.loading?r.a.createElement("h1",null,"Loading...."):(console.log({backers:t}),r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/:id",render:function(e){return r.a.createElement(U,Object.assign({},e,{backers:t}))}}),r.a.createElement(h.b,{render:function(){return r.a.createElement("h1",null,"404")}})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.42ed6e06.chunk.js.map