(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(16),r=n.n(c),l=(n(53),n(3)),s=n(4),i=n(6),m=n(5),h=n(7),u=n(14),p=(n(55),n(2)),d=(n(57),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.props.color;return o.a.createElement("div",{className:"fullpage ".concat(this.props.className||""),style:{backgroundColor:t}},e)}}]),t}(a.Component)),b=n(46),f=(n(66),function(e){return o.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:"-34px",transform:"translateY(-45px)"}},o.a.createElement("div",{style:{maxWidth:"30px"}},o.a.createElement("img",{src:e.icon})))}),g=n(12),v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.themeIndex;return console.log(p.themes[e].background_color),o.a.createElement("div",null,o.a.createElement(d,{className:"first",color:p.themes[e].background_color},o.a.createElement("h1",{className:"title",style:{color:p.themes[this.props.themeIndex].font_color}},p.title),o.a.createElement("div",{style:{color:p.themes[this.props.themeIndex].font_color}},o.a.createElement("h2",null,p.subtitle)),o.a.createElement("div",{className:"icons-wrapper"},Object.keys(p.links).map(function(e){return o.a.createElement("div",{className:"icon"},o.a.createElement(b.SocialIcon,{url:p.links[e]}))}))),o.a.createElement(g.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:50,duration:500},o.a.createElement(f,{icon:p.icons.down})),o.a.createElement(g.Element,{name:"about",className:"element"}))}}]),t}(a.Component),E=(n(77),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.themeIndex;return o.a.createElement("div",null,o.a.createElement(d,{className:"second",color:p.themes[e].background_color},o.a.createElement("h3",{style:{color:p.themes[this.props.themeIndex].font_color}},p.sections[0].title),o.a.createElement("div",{className:"paragraphs",style:{color:p.themes[this.props.themeIndex].font_color}},p.sections[0].items.map(function(e){return o.a.createElement("p",null,e.content)}))))}}]),t}(a.Component)),y=(n(79),n(81),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.skill;return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"image-wrapper"},o.a.createElement("img",{src:e.content.image,alt:""})),o.a.createElement("div",{className:"skill-title-wrapper"},o.a.createElement("h4",null,e.content.title)))}}]),t}(a.Component)),k=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.themeIndex;return o.a.createElement(d,{className:"third",color:p.themes[e].background_color},o.a.createElement("h3",{style:{color:p.themes[this.props.themeIndex].font_color}},p.sections[1].title),o.a.createElement("div",{className:"cards-wrapper"},p.sections[1].items.map(function(e){return o.a.createElement(y,{skill:e})})))}}]),t}(a.Component),j=n(23),O=n.n(j),w=n(17),x=n.n(w),C=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).changeColor=n.changeColor.bind(Object(u.a)(Object(u.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"changeColor",value:function(){this.props.onChangeColor()}},{key:"render",value:function(){var e=this;return o.a.createElement(O.a,{fixed:"top",bg:"light",expand:"lg"},o.a.createElement(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(O.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(x.a,{className:"mr-auto"},o.a.createElement(g.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:50,duration:500},o.a.createElement(x.a.Link,{href:"#About"},"About")),o.a.createElement(g.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:50,duration:500},o.a.createElement(x.a.Link,{href:"#Skills"},"Skills"))),o.a.createElement(x.a,{onSelect:function(t){e.changeColor(),console.log("".concat(t," is selected"))},className:"justify-content-end"},o.a.createElement(x.a.Link,{eventKey:"colorme"},"Color Me"))))}}]),t}(a.Component),I=n(47),N=n.n(I),_=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleColor=n.handleColor.bind(Object(u.a)(Object(u.a)(n))),n.state={themeIndex:0},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleColor",value:function(){var e=this.state.themeIndex>=parseInt(p.themes[0])?0:this.state.themeIndex+1;console.log(e),this.setState({themeIndex:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(N.a,null),o.a.createElement(C,{onChangeColor:this.handleColor}),o.a.createElement(v,{themeIndex:this.state.themeIndex}),o.a.createElement(g.Element,{name:"about",className:"element"}),o.a.createElement(E,{themeIndex:this.state.themeIndex}),o.a.createElement(g.Element,{name:"skills",className:"element"}),o.a.createElement(k,{themeIndex:this.state.themeIndex}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},2:function(e){e.exports={title:"hello i'm amirhossein",subtitle:"Embedded System Developer| Web Full Stack Developer",links:{github:"https://github.com/amirhossein3089",stackoverflow:"https://stackoverflow.com/story/amirhossein3089",linkedIn:"https://www.linkedin.com/in/amirhossein-nasseri-1982388a"},sections:[{title:"About",items:[{type:"p",content:"I am basically an embedded system developer.but I love to learn new technologies specially web technologies"},{type:"p",content:"I beleive in self-learning. I used free videos and books to learn web technologies fast"},{type:"p",content:"maybe some day I become a web developer and change my essential developping field"}]},{title:"Skills",items:[{type:"card",content:{image:"images/react.png",title:"React"}},{type:"card",content:{image:"images/javascript.png",title:"Javascript"}},{type:"card",content:{image:"images/html.png",title:"HTML"}},{type:"card",content:{image:"images/css.png",title:"CSS"}},{type:"card",content:{image:"images/python.png",title:"Python"}},{type:"card",content:{image:"images/prog.png",title:"Django"}}]}],icons:{down:"images/down.png"},themes:[3,{font_color:"black",background_color:"#9E331C"},{font_color:"white",background_color:"#956791"},{font_color:"white",background_color:"#2691AA"}]}},48:function(e,t,n){e.exports=n(114)},53:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},66:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){}},[[48,2,1]]]);
//# sourceMappingURL=main.99e2ba6d.chunk.js.map