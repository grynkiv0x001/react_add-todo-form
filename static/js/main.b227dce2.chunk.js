(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{24:function(e,t,a){e.exports=a(34)},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),s=a.n(i),l=(a(29),a(19)),o=a(14),c=a(15),d=a(21),m=a(20),u=a(11),h=a(36),p=a(40),y=a(41),b=a(38),g=a(18),E=a(39),f=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],v=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],w=a(37),S=a(3),C=a.n(S),k=a(5),z=a.n(k),T=(z.a.shape({id:z.a.number.isRequired,title:z.a.string.isRequired,completed:z.a.bool.isRequired,user:z.a.shape({id:z.a.number.isRequired,name:z.a.string.isRequired}).isRequired}),function(e){var t=e.user;return r.a.createElement("p",{className:"name"},t.name)}),U=function(e){var t=e.todo;return r.a.createElement("tr",{className:C()("list",{"table-success":t.completed})},r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.title),r.a.createElement("td",null,t.completed?"Done \u2714\ufe0f":"In process \u23f3"),r.a.createElement("td",null,r.a.createElement(T,{user:t.user})))},A=function(e){var t=e.todos;return r.a.createElement(h.a,null,r.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"User"))),t.map((function(e){return r.a.createElement("tbody",{key:e.id},r.a.createElement(U,{todo:e}))}))))},P=(a(32),f.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{user:v.find((function(t){return t.id===e.userId}))})}))),R=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={todos:P,isTitleEmpty:!1,title:"",newUser:null,selectedUserId:"",isSelectedUserEmpty:!1,wasTodoAdded:!1},e.addTodo=function(t){t.preventDefault();var a=e.state,n=a.title,r=a.newUser;n.trim()&&r&&e.setState((function(e){return{todos:[].concat(Object(l.a)(e.todos),[{user:r,userId:r.id,id:e.todos[e.todos.length-1].id+1,title:n,completed:!1}]),selectedUserId:"",title:"",newUser:null,isTitleEmpty:!1,isSelectedUserEmpty:!1,wasTodoAdded:!0}})),n.trim()||e.setState({isTitleEmpty:!0,wasTodoAdded:!1}),r||e.setState({isSelectedUserEmpty:!0,wasTodoAdded:!1})},e.handleUserChange=function(t){var a=t.target.value;e.setState({newUser:v.find((function(e){return e.id===+a})),selectedUserId:a,isSelectedUserEmpty:!1})},e.handleChange=function(t){e.setState({title:t.target.value,isTitleEmpty:!1})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.todos,a=e.isTitleEmpty,n=e.title,i=e.selectedUserId,s=e.isSelectedUserEmpty,l=e.wasTodoAdded;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App__title"},"Dynamic list of todos"),r.a.createElement(h.a,null,s&&r.a.createElement(p.a,{variant:"danger"},"Error: user must be selected!"),a&&r.a.createElement(p.a,{variant:"danger"},"Error: title must be not empty!"),l&&r.a.createElement(p.a,{variant:"success"},"Todo was successfully added!"),r.a.createElement(y.a,{className:"form",onSubmit:this.addTodo},r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a.Control,{type:"text",placeholder:"To do...",value:n,onChange:this.handleChange})),r.a.createElement(g.a,null,r.a.createElement("select",{value:i,onChange:this.handleUserChange,className:"select"},r.a.createElement("option",null,"Choose a User"),v.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement(g.a,null,r.a.createElement(E.a,{type:"submit"},"Add"))))),r.a.createElement(A,{todos:t}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b227dce2.chunk.js.map