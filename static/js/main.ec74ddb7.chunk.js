(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(36)},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),o=n(7),i=n.n(o),r=(n(31),n(38)),l=n(40),c=n(39),u=n(3),p=n(8),m=n(9),h=n(11),d=n(10),E=n(12),v=n(13),f=n(37),g=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).toggle=n.toggle.bind(Object(v.a)(Object(v.a)(n))),n.state={isOpen:!1},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u.q,{color:"light",light:!0,expand:"md"},s.a.createElement(u.r,{tag:f.a,to:"/",className:"text-uppercase"},"\ud83d\ude80 Quizer"),s.a.createElement(u.s,{onClick:this.toggle}),s.a.createElement(u.f,{isOpen:this.state.isOpen,navbar:!0},s.a.createElement(u.n,{className:"ml-auto",navbar:!0},s.a.createElement(u.o,null,s.a.createElement(u.p,{tag:f.a,to:"/create"},"New Quiz")),s.a.createElement(u.u,{nav:!0,inNavbar:!0},s.a.createElement(u.j,{nav:!0,caret:!0},"Rayhan"),s.a.createElement(u.i,{right:!0},s.a.createElement(u.h,null,"Profile"),s.a.createElement(u.h,null,"Settings"),s.a.createElement(u.h,null,"Logout")))))))}}]),t}(s.a.Component);var O=n(24),b=n(22),q=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).createOption=function(){n.props.createOption(n.props.index)},n.onChange=function(e){n.props.setOptionValue(n.props.index,e.target.dataset.inputIndex,e.target.value)},n.removeOption=function(e){n.props.removeOptionFromQuestion(n.props.index,e)},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.question,n=t.question,a=t.options;return s.a.createElement(u.b,null,s.a.createElement(u.d,null,s.a.createElement(u.l,{placeholder:"Question",value:n,onChange:function(t){return e.props.setQuestionTitle(e.props.index,t.target.value)}})),s.a.createElement(u.c,null,s.a.createElement(u.k,null,s.a.createElement(u.m,{for:"answer"},"Answer"),s.a.createElement(u.l,{id:"answer",color:"danger",placeholder:"Answer of this question",style:{border:"2px solid red"},onChange:function(t){return e.props.setQuestionAns(e.props.index,t.target.value)}})),s.a.createElement(u.m,null,"Options"),a.map(function(t,n){return s.a.createElement(u.k,{key:n,className:"d-flex align-items-center"},s.a.createElement(u.l,{placeholder:"Option ".concat(++n),onChange:e.onChange,"data-input-index":n-1,value:t}),a.length>2&&s.a.createElement(u.a,{color:"danger",size:"sm",className:"ml-2",onClick:function(){return e.removeOption(n-1)}},"\xd7"))}),s.a.createElement(u.a,{className:"btn-sm",color:"primary",onClick:this.createOption},"+")))}}]),t}(a.Component),Q=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={title:"",description:"",questions:[{question:"",options:["",""],answer:""},{question:"",options:["",""],answer:""}]},n.createOption=function(e){var t=n.state.questions;t[e].options.push(""),n.setState({questions:t})},n.removeOptionFromQuestion=function(e,t){var a=n.state.questions;a[e].options.splice(t,1),n.setState({questions:a})},n.onChange=function(e){n.setState(Object(b.a)({},e.target.dataset.field,e.target.value))},n.submitQuiz=function(){console.log(n.state)},n.setQuestionTitle=function(e,t){var a=n.state.questions;a[e].question=t,n.setState({questions:a})},n.setOptionValue=function(e,t,a){var s=n.state.questions;s[e].options[t]=a,n.setState({questions:s})},n.setQuestionAns=function(e,t){var a=n.state.questions;a[e].answer=t,n.setState({questions:a})},n.createQuestion=function(){n.setState({questions:[].concat(Object(O.a)(n.state.questions),[{question:"",options:["",""],answer:""}])})},n.deleteQuestion=function(e){var t=n.state.questions;t.splice(e,1),n.setState({questions:t})},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(u.t,{className:"pt-5"},s.a.createElement(u.e,{md:8,className:"mx-auto"},s.a.createElement("div",{className:"py-3"},s.a.createElement("h3",{className:"text-uppercase"},"Create Quiz")),s.a.createElement(u.k,null,s.a.createElement(u.l,{placeholder:"Quiz Title",onChange:this.onChange,"data-field":"title",value:this.state.title})),s.a.createElement(u.k,null,s.a.createElement(u.l,{tag:"textarea",placeholder:"Quiz Description",onChange:this.onChange,"data-field":"description",value:this.state.description})),s.a.createElement("div",{className:"py-5"},s.a.createElement("h3",{className:"text-uppercase"},"Assign questions")),this.state.questions.map(function(t,n){return s.a.createElement("div",{className:"py-3 question",key:n},e.state.questions.length>2&&s.a.createElement("button",{className:"question-delete",onClick:function(){return e.deleteQuestion(n)}},"\xd7"),s.a.createElement(q,{index:n,question:t,createOption:e.createOption,setOptionValue:e.setOptionValue,setQuestionTitle:e.setQuestionTitle,setQuestionAns:e.setQuestionAns,removeOptionFromQuestion:e.removeOptionFromQuestion}))}),s.a.createElement("div",{className:"py-3"},s.a.createElement(u.a,{color:"primary",size:"sm",onClick:this.createQuestion},"New Question")),s.a.createElement("div",{className:"py-3"},s.a.createElement(u.a,{onClick:this.submitQuiz},"Save Quiz"))))}}]),t}(a.Component);i.a.render(s.a.createElement(r.a,null,s.a.createElement(l.a,null,s.a.createElement(function(e){var t=e.children;return s.a.createElement(u.g,null,s.a.createElement(g,null),t)},null,s.a.createElement(c.a,{path:"/",exact:!0,component:function(){return s.a.createElement("h1",null,"Home")}}),s.a.createElement(c.a,{path:"/create",exact:!0,component:Q})))),document.querySelector("#root"))}},[[26,2,1]]]);
//# sourceMappingURL=main.ec74ddb7.chunk.js.map