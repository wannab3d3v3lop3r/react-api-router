(window["webpackJsonpreact-api-router"]=window["webpackJsonpreact-api-router"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),s=a(2),i=a(3),l=a(5),p=a(4),u=a(6),m=(a(14),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"lists"},o.a.createElement("div",{class:"img"},o.a.createElement("a",{target:"_blank",href:"".concat(this.props.imageUrl)},o.a.createElement("img",{alt:"".concat(this.props.title),src:"".concat(this.props.image)}))),o.a.createElement("div",{className:"lists-text-container"},o.a.createElement("h1",null,this.props.title),o.a.createElement("p",null,"Author: ",this.props.author),o.a.createElement("p",null,"Price: $",this.props.price),o.a.createElement("p",null,this.props.description)))}}]),t}(n.Component)),h=a(1),f=a.n(h),b=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=0!==this.props.arrayLength?this.props.books.map((function(e,t){return o.a.createElement(m,{key:f()(e,"id"),title:f()(e,"volumeInfo.title"),author:f()(e,"volumeInfo.authors"),price:f()(e,"saleInfo.listPrice.amount",0),saleability:f()(e,"saleInfo.saleability"),ebook:f()(e,"saleInfo.isEbook"),description:f()(e,"searchInfo.textSnippet"),image:f()(e,"volumeInfo.imageLinks.thumbnail",""),imageUrl:f()(e,"volumeInfo.infoLink"),printType:f()(e,"volumeInfo.printType")})})):"";return o.a.createElement("div",{className:"book-lists"},e)}}]),t}(n.Component),E=(a(16),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this))).updateBookType=function(t){e.setState({bookType:t});var a=e.state,n=a.input,o=a.printType,r="https://www.googleapis.com/books/v1/volumes?q=".concat(n,"+intitle:").concat(n,"&filter=").concat(t,"&printType=").concat(o),c={method:"GET",key:Object({NODE_ENV:"production",PUBLIC_URL:""}).API_KEY,headers:{"Content-Type":"application/json"}};fetch(r,c).then((function(e){return console.log(e),e.json()})).then((function(t){console.log(t),e.props.fetchData(t)})).catch((function(t){console.log("error message is ",t),e.setState({errorMessage:t.message})}))},e.updatePrintType=function(t){e.setState({printType:t});var a=e.state,n=a.input,o=a.bookType,r="https://www.googleapis.com/books/v1/volumes?q=".concat(n,"+intitle:").concat(n,"&printType=").concat(t,"&filter=").concat(o);console.log(r);var c={method:"GET",key:Object({NODE_ENV:"production",PUBLIC_URL:""}).API_KEY,headers:{"Content-Type":"application/json"}};fetch(r,c).then((function(e){return console.log(e),e.json()})).then((function(t){console.log(t),e.props.fetchData(t)})).catch((function(t){console.log("error message is ",t),e.setState({errorMessage:t.message})}))},e.state={input:"",bookType:"ebooks",printType:"all",errorMessage:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state.input,n="https://www.googleapis.com/books/v1/volumes?q=".concat(a,"+intitle:").concat(a),o={method:"GET",key:Object({NODE_ENV:"production",PUBLIC_URL:""}).API_KEY,headers:{"Content-Type":"application/json"}};fetch(n,o).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e),t.props.fetchData(e)})).catch((function(e){console.log("error message is ",e),t.setState({errorMessage:e.message})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"search-container"},o.a.createElement("span",null,"Search:"),o.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("input",{name:"search",id:"search",type:"text",placeholder:"search for books",value:this.state.input,onChange:function(t){return e.setState({input:t.target.value})}}),o.a.createElement("button",{type:"submit"},"Search"))),o.a.createElement("div",{className:"filter-container"},o.a.createElement("form",null,o.a.createElement("label",{htmlFor:"print-type"},"Print Type: "),o.a.createElement("select",{id:"print-type",onChange:function(t){return e.updatePrintType(t.target.value)}},o.a.createElement("option",{value:"all"},"All"),o.a.createElement("option",{value:"books"},"Books"),o.a.createElement("option",{value:"magazines"},"Magazines")),o.a.createElement("label",{htmlFor:"book-type"},"Book Type:"),o.a.createElement("select",{id:"book-type",onChange:function(t){return e.updateBookType(t.target.value)}},o.a.createElement("option",{value:"ebooks"},"No Filter"),o.a.createElement("option",{value:"free-ebooks"},"Free eBooks"),o.a.createElement("option",{value:"paid-ebooks"},"Paid eBooks")))))}}]),t}(n.Component)),g=(a(17),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).fetchData=function(e){a.setState({books:e.items,totalItems:e.totalItems})},a.state={books:[],totalItems:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"google-title"},"Google Book Search")),o.a.createElement(E,{fetchData:this.fetchData}),o.a.createElement(b,{books:this.state.books,arrayLength:this.state.totalItems}))}}]),t}(n.Component));c.a.render(o.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.7bc2fd3a.chunk.js.map