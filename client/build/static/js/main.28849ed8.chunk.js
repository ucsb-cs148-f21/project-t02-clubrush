(this["webpackJsonpstarter-code"]=this["webpackJsonpstarter-code"]||[]).push([[0],{63:function(e,t,n){},65:function(e,t,n){},72:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(22),s=n.n(r),i=(n(63),n(10)),l=n(35),o=n(8),h=n(12),j=n.n(h),b=n(18),d=n(23),u=n(24),O=n(9),x=n(27),m=n(13),p=n(20),f=(n(65),n(52)),v=n.n(f),g=n(53),w=n.n(g),S=n(1);var y=function(e){var t=e.placeholder,n=e.data,a=Object(c.useState)([]),r=Object(i.a)(a,2),s=r[0],l=r[1];Object(c.useEffect)((function(){fetch("http://localhost:9000/clubs/").then(function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,l(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var o=Object(c.useState)(""),h=Object(i.a)(o,2),d=h[0],u=h[1];return Object(S.jsxs)("div",{className:"search",children:[Object(S.jsxs)("div",{className:"searchInputs",children:[Object(S.jsx)("input",{type:"text",placeholder:t,value:d,onChange:function(e){var t=e.target.value;u(t);var c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));l(""===t?[]:c)}}),Object(S.jsx)("div",{className:"searchIcon",children:0===s.length?Object(S.jsx)(v.a,{}):Object(S.jsx)(w.a,{id:"clearBtn",onClick:function(){l([]),u("")}})})]}),0!==d.length&&Object(S.jsx)("div",{className:"dataResult",children:s.slice(0,s.length).map((function(e,t){return Object(S.jsx)("a",{className:"dataItem",href:"./club/"+e.name,rel:"noreferrer",target:"_blank",children:Object(S.jsxs)("p",{children:[e.name," "]})})}))})]})};n(72);function k(e,t){var n=localStorage.getItem(e),c=JSON.parse(n);return console.log("fetching within localstorage"),c||t}function C(e,t){var n=Object(c.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(c){return console.log(c),t}})),a=Object(i.a)(n,2),r=a[0],s=a[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;s(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(c){console.log(c)}}]}var N,I;function A(e){var t=k("isSignedIn"),n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){fetch("http://localhost:9000/clubs/").then(function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),t?Object(S.jsx)(x.a,{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)(x.a.Brand,{class:"navbar-brand",href:"/",children:Object(S.jsx)("h1",{className:"linkText",href:"/",children:"Club Rush"})}),Object(S.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(S.jsxs)(x.a.Collapse,{id:"basic-navbar-nav",children:[Object(S.jsxs)(m.a,{className:"mr-auto",children:[Object(S.jsx)(m.a.Link,{href:"/",children:Object(S.jsx)("h4",{className:"linkText",href:"/",children:"Home"})}),Object(S.jsx)("h4",{children:Object(S.jsxs)(p.a,{title:"Clubs",className:"dropdown-item",id:"nav-dropdown",children:[Object(S.jsx)(p.a.Item,{href:"./pages/DataScience",eventkey:"/club1",children:Object(S.jsx)(m.a.Link,{href:"/club1/datascience",children:"Clubs"})}),Object(S.jsx)(p.a.Item,{href:"./pages/Anime",eventkey:"/club2",children:Object(S.jsx)(m.a.Link,{href:"/club2/anime",children:"Fraternities"})}),Object(S.jsx)(p.a.Item,{href:"./pages/Anime",eventkey:"/club2",children:Object(S.jsx)(m.a.Link,{href:"/club2/anime",children:"Sororities"})}),Object(S.jsx)(p.a.Item,{href:"./pages/Anime",eventkey:"/club2",children:Object(S.jsx)(m.a.Link,{href:"/club2/anime",children:"Sports"})})]})}),Object(S.jsx)(m.a.Link,{href:"/club",children:Object(S.jsx)("h4",{className:"linkText",href:"/club",children:"Bookmarks"})})]}),Object(S.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(S.jsx)("div",{className:"dropdown",children:Object(S.jsx)("div",{id:"myDropdown",class:"dropdown-content",children:Object(S.jsx)(y,{placeholder:"Search...",data:r})})})}),Object(S.jsx)(m.a.Link,{href:"/profile",children:Object(S.jsx)("h4",{className:"linkText",children:"Profile"})})]})]})}):Object(S.jsx)(x.a,{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)(x.a.Brand,{class:"navbar-brand",href:"/",children:Object(S.jsx)("h1",{className:"linkText",href:"/",children:"Club Rush"})}),Object(S.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(S.jsxs)(x.a.Collapse,{id:"basic-navbar-nav",children:[Object(S.jsxs)(m.a,{className:"mr-auto",children:[Object(S.jsx)(m.a.Link,{href:"/",children:Object(S.jsx)("h4",{className:"linkText",href:"/",children:"Home"})}),Object(S.jsx)("h4",{children:Object(S.jsxs)(p.a,{title:"Clubs",className:"dropdown-item",id:"nav-dropdown",children:[Object(S.jsx)(p.a.Item,{href:"./pages/DataScience",eventkey:"/club1",children:Object(S.jsx)(m.a.Link,{href:"/club1/datascience",children:"Clubs"})}),Object(S.jsx)(p.a.Item,{href:"./pages/Anime",eventkey:"/club2",children:Object(S.jsx)(m.a.Link,{href:"/club2/anime",children:"Fraternities"})}),Object(S.jsx)(p.a.Item,{href:"./pages/Anime",eventkey:"/club2",children:Object(S.jsx)(m.a.Link,{href:"/club2/anime",children:"Sororities"})}),Object(S.jsx)(p.a.Item,{href:"./pages/Anime",eventkey:"/club2",children:Object(S.jsx)(m.a.Link,{href:"/club2/anime",children:"Sports"})})]})}),Object(S.jsx)(m.a.Link,{href:"/club",children:Object(S.jsx)("h4",{className:"linkText",href:"/club",children:"Bookmarks"})})]}),Object(S.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(S.jsx)("div",{className:"dropdown",children:Object(S.jsx)("div",{id:"myDropdown",class:"dropdown-content",children:Object(S.jsx)(y,{placeholder:"Search...",data:r})})})}),Object(S.jsx)(m.a.Link,{href:"/login",children:Object(S.jsx)("h4",{className:"linkText",children:"Login"})}),Object(S.jsx)(m.a.Link,{href:"/signup",children:Object(S.jsx)("h4",{className:"linkText",children:"Signup"})})]})]})})}function L(){return Object(S.jsxs)(O.a,{children:["App developed for CS148 F21. Check out the source code"," ",Object(S.jsx)("a",{href:"https://github.com/vincentktieu101/ReactGoogleAuthStarter",children:"here"}),".",Object(S.jsx)("br",{}),Object(S.jsx)("br",{})]})}function V(e){var t=e.user;return Object(S.jsxs)("div",{children:[Object(S.jsx)(A,{user:t}),e.children,Object(S.jsx)(L,{})]})}var E=u.a.img(N||(N=Object(d.a)(["\n  width: 500px;\n  max-width: 100%;\n  height: auto;\n"]))),K=u.a.div(I||(I=Object(d.a)(["\n  width: 700px;\n  max-width: 100%;\n"])));function W(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("http://localhost:9000/clubs/").then(function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(S.jsx)(V,{children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)("br",{}),Object(S.jsx)("h1",{children:"Welcome to Club Rush!"}),Object(S.jsx)("br",{}),Object(S.jsxs)(K,{children:["Our project will allow students to find at community at UCSB in a more streamlined website that is more convenient than the current website, Shoreline. For our project, we want to utilize filters and nested drop-down menus, to give students an easier time in their search for their new community. We want to have broader categories displayed first such as academic, fraternity, cultural, community service, etc., and then within those individual categories, have more specific filters to match what the user is looking for in their search: Co-ed, engineering, Asian, etc. We want this site to be as minimal and simplistic as possible to give students an easier time in their search. Sites such as Shoreline is a good option too, but Shoreline has too much unneccessary information and most organization's page on Shoreline has not been updated in a very long time. Make sure you log in before navigating to the"," ",Object(S.jsx)("a",{href:"/club",children:"Club"})," page!"]}),Object(S.jsx)("h1",{className:"App",children:n.map((function(e,t){return Object(S.jsx)("a",{href:"/club/"+e.name,children:Object(S.jsx)(E,{src:e.image,style:{borderColor:"red",borderRadius:"50%",height:150,width:150}})})}))})]})})}function P(){var e=Object(o.g)().id;console.log(typeof e);var t=Object(c.useState)({}),n=Object(i.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){fetch("http://localhost:9000/clubs/".concat(e)).then(function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,console.log(n),r(n[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(S.jsx)(V,{children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)("br",{}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:a.name}),Object(S.jsx)("a",{href:a.link,children:Object(S.jsx)("img",{src:a.image})}),Object(S.jsx)("br",{}),Object(S.jsx)("h3",{children:"Description"}),Object(S.jsx)("p",{children:a.description}),Object(S.jsx)("br",{}),Object(S.jsx)("h3",{children:"Contact"}),Object(S.jsxs)("div",{children:["contact@gmail.com",Object(S.jsx)("a",{href:"https://www.datascienceucsb.org/",children:" page "})," . "]}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{})]})]})})}var Y,q,B=u.a.img(Y||(Y=Object(d.a)(["\n  width: 500px;\n  max-width: 100%;\n  height: auto;\n"]))),F=u.a.img(q||(q=Object(d.a)(["\n  width: 500px;\n  max-width: 100%;\n  height: auto;\n"])));function J(){return Object(S.jsx)(V,{children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)("img",{src:"https://www.datascienceucsb.org/images/datasciencelogotransparent.png",className:"img-fluid shadow-4",alt:"..."}),Object(S.jsx)("br",{}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("h1",{children:["Data Science Club",Object(S.jsx)(F,{})]}),Object(S.jsx)("br",{}),Object(S.jsx)("h3",{children:"Description"}),Object(S.jsx)("p",{children:"To provide Gauchos with the resources and community to learn, share, and create in the realm of data science. To be the platform through which companies and faculty researchers seek the best data science talent UCSB has to offer, as well as one that empowers students looking to earn this distinction."}),Object(S.jsx)("br",{}),Object(S.jsx)("h3",{children:"Contact"}),Object(S.jsxs)("div",{children:["datascienceucsb@gmail.com",Object(S.jsx)("a",{href:"https://www.datascienceucsb.org/",children:" page "})," . "]}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{})]}),Object(S.jsx)(B,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdsAAABqCAMAAADDRQtiAAAA7VBMVEVSqYkmPoZTq4lUrokjNoYlPIYkOIYiNIYiMoZVr4kkOoZHkIg4bIdEiYgALItIjYlOn4kvVYZMmohAfoguUoY+po/+0w//2gBCg4hPo4k7cocxW4c3aYdKloj/1QAhMIY9eIcsToYoRIY1ZIdChIgzYIf50BorSoYpRoY8doc0YocfK4Y5b4cyXYcAL4tSn4zxySAAIosgLIYdJIZgqYKOr23ryymFsXOnnWIXXozLwkh8dnJmmoL/2B8FQ41Bq48woZAxgJHXxT3rxSbivjOdtmYAG4/PsUi0vFjAplJhY3xdbIKwm1yYimiot2Ao8tyUAAAT50lEQVR4nO1d6WLjNpImAQIEKal12m3qsO7I8hF3ujszuzObdHYze+/m/R9nCRRAHARp2U7Gx+LLj7R4AAV8QFWhCqCjKCAgICAgICAgICAgICAgICAg4BXgx5cWIOCPwtmfzl5ahIA/CD+eB27fKc7+FLh9r/jxMnD7TlFO28DtO8WfL8+/C9y+S/BpG7h9nyinbeD2fYJP28Dt+wSftoHbdwkxbQO37xJi2p5/9w0bQCVeWq6AZ6Octpf/UNL7j/MK3e50tVtEOPD7xlFO20/Jx/OffsgrUI6ErY8DHNh9y/j6l49/jUtuP8QuCGXXRSD3LePsn76/8nJbgiY9/NLyBTwdqJ+W3H7n5TYmy2P20gIGPBmt3MYxG4eZ+2aB+glp4TZeLoLNfasouaWKW5qkKUvThBJDLceB27cKg1u6Gt3fF8Wg382pJjc5BnLfKExueyIihRCO9ga59KVFDHgiSm7zils1Q1E2zPXEvXitE7dZLtR28/m1/hFlNxT7nNqseVuVgpCet/nwNFcZabQ/4Hmh9uoDRXHgrBiNRlFWkw6JOwOUuVU1VGxfdeStlY0HZdkYN7fC2+p6N7jFcpGjzL5ery1qqakG77wtL19orcweKgPe6GiMXCHFA0Vf3YXfg04NfRkJQyP7dx141I1Lvy9lm+4os7ouW1xTcecwHUjeCyhNPjZyKl2Yz3Q0aQtDWHkJ74aiaDYcywbWW+GwNurYxUCx/YH5WNbZg8jrY6GHKsK9WcqvpsOxmryFUdEAPRAUbuA2ilKtlDunaAW8ZomEK6SsabUUd9ka7qDxMnHxuQ9V4SEUtpw2Vb1dSm+eULY31BYaTFhe3ekCA6MbXtgNxGHwnFl1shkW74lnkpuKBTwpn2NzoxlZJ06krcopvch8rUhjO9qDb/l9oxjop6XR13iwNkSeKsLwYpPWapNSyl6ejFsnbxO3eFYthOj4JG4nxsrJ6FejRCkpkyN+bDhszjDCcmSRidceoGJjvkvJoKqkz3LzzlXBr45EcUxy2zWfKDvuDriFKvOKBcx9DnqrBchumbk4ZHvsaQW5cridUqvUslhi9zXumcXG9AAjFe+WZrFsiwwpq17O+y0G029vLZlp9xSDa3PLX4stvVPxFadAYAu3aKGeZd5hha5seugdVv20tAvMN/zyI7iNE02CzW02T+2yk2v8O3CLL1yRD4LFjnP5hneNwy2PCl80k9PIbSepKttmOAOIxP2J3MYkGZkFVnzRo+KWcKinORTtK9Vhqc8e4Fu4ndOEcp6q+AoaMVUHlSp7yQt4DLd0p3TizOIWj2XZhFKpQfPo+dyixdItdinMAvwgNIFQUjI1pDT7rSVw2MjtouKWzKZrklCa0vgw6+6KzFuY5JYyxlJlColpCAVf/IZ0vNE4Ffli+az4NwN7C+qb6HFgi1xAL7P9rtOblzaJqTGENlBYenW7ul1zVQfxcB+3XFCB5dDilqwzL7cDSS0bTlfzmHeOqFZyW5XGXHv7ELdAEkkPpciHlIvMk2/4KIrNybHfGU9Skg+lveVSks26BE3hzUNjOqeRW2P2E6onF6VsfeHzz4BbehEVxWB3gIFB97peoeKIeCiVBhd0gZiEdAw/DHMrnvUtwBC0O+1kIs4y/KzUkuwQku4yXC6EFpuczoUAHm5pr6hgWzI28nGbTcSIyDcjUfZFSlhf21u6sks7mVupggjti2I7pbKbcjGxoDyfIB5OyvpUzhKQMu+WCjTDnYMQiS0ezW2h1FsNJNl06j2uuBUrr0wqMKYVhuArEZo+NdUI7gK3rvomcZ/f8BhcWZPMUCGsU1UJgUrlnWgzATo93JaW3Vonam6Ve2FxizqiQWQjNREefT5KPxnExw2rznZuVS+nI1lNEc/0aCQ0UkvChVpxpbo0hK6I23UWnsCtP69bcSt+ZRfidalKImVuk4yrALp6gFuuvvM70Y60bk7AKdOr7ir4AOoxqbhGAzmJfNz2nXVoxS2hkj6T2wycfFa5h0gNoHFNfFvYVm6lpkmrPRAIlAbaOW8pDW5yK32ifN7kTT2JW19e1+Y2yvZ2ZwBfM9FH+cx42cMt9Ooq45Jb48CQzGNmsgOXwHRm1CR6FLdxstNGX3IreyOvrxieya1wKioTHykSwTmpR3ttbmGU59vfmdvSmXOVj82tfL+iBnrqmImBmj7ALahvEdS2xoFRcn3li8DboZ7w9+nciq4GTW5xO07saavfew63cu2Q9Gocim6i9es2txn3HX9/bvO1M28cbiMsJi4ZmkMs6eCawa1zCy1mslvSBm437ryVKpl5Yusnc0tEx4M3ZXIrHfdJ3SV9HregkpP6iDn6S3W55WPRDK84T/cTdgq3NE0pM5P27srT5Rb1oKulkgG+ikgUawrt4ZZ3V6lzS9Fin8HFDOaQe1kOJs+S4GRuk56wA6K3LG5Fy+v24ZncirWDXGDbpYpwfl5ri2NvoTN3TXWXHfj9Q2sg3sO3I5QVvSu9UHdVQY1bGBypdA64AeGmENSIoWjr3IpOLeVHtXEg769hleyss0XJMZ16RvHp3Ha2ufKmDG6luvcF1p/FbUYbHF2prFN3n6nNLRZWedmYT2nk9t7kltzzJW25mrw2yG3nVva1tCWKrwhvxeqyldtEjkahcjwGFzQZndjaF4G5rdmoqGENhK1Fi+IW3HleiMktBOmYpxdrayDnfhu3cvi7w0w8BSENNrZnrsFtudAUstJGc9vM7cjgVi9Ts3WlltN7S6Qat2CjJGlgbsub0BepznnVuIUxy58ALUv9BpeHHHfG1JWKxrNm8scuxgsFY31bOnB8RArDanILGc+a6Y8Ut/ntSJXm3G+dtyBXOopqUFHXdGid7lDclpeKxS3vhnzTnLs/hdtch5eMUKTj3dW5hRk61Q4hbwT8y6Cyzq1Q37SKw9ebjlcgG0kPfUMy6Ki6K9sQc0wlmBHNK2ezqJMbc5NbiJfW3Leo8uByVdrNI+JSLeogQrGMWbO5mdKFAZwzEdnl5Wxazn40crvQ3JpKA1fcOmaizi2QZnSOGPdCdeZ77Dw2tue70MSok9br4chmUgrCJir/3tZRbbkCklvcoohJqQ1ugSCybpy3Gm79rdxa7qZT7kBl/nJ2rKaumwfKj23p+WZuKxKtuZBVV50wfp1bo1XAl1gPiecIbeE20YU740BXdpdWLZcmSXHra+RjuMXgTdncChm9yeRncbsDbv056hFVctJNFQFyuCXrXQu5fyduxQQU6hmi41rRutzK4KRwSUWkidQMLr9zkag+ZZAPqLg9cd4SiZya3PYRUt6Uye3tQ9yq0ojrtT6Z27IdMzV1SWrFk3k+UGYESbp+gr3V+VvL98f7ZcpSkRt7UCcLe8s7R/aXUO2giDSXNW7B4AmJ8TyP/b5Geburdlik0wd8WR+3ZD2UAMbU+rb0zq9E/ikz7S3o5EMjt+SgSlsX9v1WbvvNqoYXnXXWUj2RFFbzMsIyWR2Px/lGvJ37LIUs4ARuqRmNxsWgiIqiiBxlUOf2OlezG8wtk8k0W9G63IJ7DUFhGNj+xSPCxZapZHa70+lfA2XqMwFGr3FuIb7IBpnBLRAYN/pSdGyXZnTLE30pKDzry81DMgyo/GSR3cx2SeOKHl4/gduYmcsdvobzbKCscysakYzVUlG5mWLBTojqpxq3Zm5DkOIzuNDyDoGkKl+yqMWib6PGI+JSZdsiMCAmt7tGp+fE2EXXx23bcFTF41uZBQSlZ8cuFhCha9LKjdz2DG5J/PAp63rsAvaCcJmwHm3lkvuO963KgLvcyjXSTj4r5kvetLMARQdY4g9UJTCWXDyKW1i8lZXuNbfN66vn5YGawy0Vsh6koGZ6d4iOJ3fztsobubX8P0I6/p00RiPcmOOAqW6HrsnvuJU4HldiB2WVv3K5hVhAVz4rss+10LGWskgqQmUo0pfNfBy3SEyHpHOtuS0aSXiIWwiiGQFaK+bYHCbVyFZaaTjcola91sgtdLmhlq8f+PxFjVu5kQhXQRb4kobcpFa11uFW7nS1nvWl7SoxxcjlKk/6SL4Aw+O4Bfc8v5vrXAGQ4EnfPsytaLuRDsCHSp1Jl4S4KTUXWmk43MLE9/p4ou4mbofWKpAvJPeLtrnrcgvRSdGoameyqQmUY+Jym9QejfPrZldwV00LaUWYx3o9kluZhVnrBBo47D5n6kFuhWdmhD0yCF8uoKIHnCl4Q/SkeMPlVqTEvD6eqLuJWzOfJ7s4PVw0H1Nwc/MdnSn38VXluW1uzXBYfRx4xO9pbqX18qQzH8mtnClElyZXK54dtQ9yK9+sNs0UlanSun7VqpRBi/u4bUpl67p93Hr7OCZJPi0a2HW4xVfg5UTK3MZ5ddoB4rk7L7dSk1fPal/JFLr6KbtWJ1zLTtCz4NF7atRWl3kVElJ74ai7+QWbArdwC25HlcKQLreMx2Si00juaZoRLhIGwaeTYeB4Y6Hyto9bCPR7QNPb2kkfeMPeCwcneCEbBe7RvjpbJThQBtfmViaPjtWzItflpJ9Rr+Ia9qiBcwzhZ74pS9283RlLqZO4lRXpPey3ppRxWm0TyyYgw0PcSgWYX2fqPfFTJi7RTsxquq1E3qoTUatqF6Gc6R5fStq9pixfye0HzxnN++YdNXk69S2oJLc7saF2MARPTFgSyZc6uY0g1aI0icMtlfNUAhZMjvRFGo9g2qgVHtjYDHRF0gW/IBszuSu9PX+LdK8pbqtUZjVv1X73vigb4bsEkmtV7KLp5CT4SzET235RNhaiaPcC0j3pEYrNpgwWWvj4+RqraQL7eaw1kAgyZFvQAU2uJuf2sna2OtrUrK05d0mv7lUBt3m319uNZzIcmByFrnT2kUkdLT0Ii1u4ZdhXX0QIr3PCugO+/7pPza2NqA8E0OECZ9lon8aENp31yudjhZXWdorb6ohqZb3VuoFXzLd90zif6JBVvtelOb6c1CbllI+yrJiy2Gg7V0FwN5mNslLkWSlyLMwYi+lmh/gZnXmiR4PkdlsUxWB0cYBQdhI1wOS2D0NZbG9voZYLOqtNXXlmRCxepD6nE73wN+mBKIPsR5vbsbMaVOPAzFbAC+ywv95AuDVVKju7kxG6NNnQFJZEDdxWqyxKl4satxFKHG6jqEqo5psUgn3GWS+jNHcRLLVJKfEmZiCfEcRVXyjIUypFzvlBPiKSJOlwOwPvhOTQPzJ/K1LFiTwg0/iZKIPbfH5xwUfe7cH0o/K6w8yvxvdOE+pnvegaaa1lqlW5BQwaaHEr1behZJA5DsSFzmclgzpyVXk4CG2Um6CEEbHm1rNepgeqD3rJhzS3+hyZOmaVb5Ab44k9AY7qNFf1YnVegN+N9Gk3+T82wNKk8VNS8A+2M7m16vNt/qtxawcMVAduxwdG3QK5JnDIdbkl7Bo18XU0DK7NbW2JCgsAM9qEhvaSqtS7uqeK2E7OimN8T+BWeVPGvMUd65xsnBOu7x/mtnSLbOeFWEfv0IDaIrMFzzPaMibS2aqf0UwnzcerTW59YAXO7o+btOY2C7vQwC3JKVt3VHACFngGX1b+w+RWqm8zfizTa+YSDk+XhjT2MV9UqLSY6P4UDi49gVvpTZmrZbywvs0Eu1lO4DbKVktjVFC6sJQoKg6JIbK4iwZrg0TClB9tc0vKZeWqPTdfcvup9Zt/pQnu7GuT13Fe8WGpjinSq7tV9REK1PkiLlqaQ1y6ER2J55/5v8XWX3S84Ylhc2cj6vBL7ItJIB6U0uQisZ6wrrPbEY/zBO5RNlPngUR9XyS328/Mwhc4tcyfudEh052o97MZnuY5Y6rKvlXr2xu7tBvPdmG8WFcvLutft8UrqkRe7uXdbLeRr9A07lVGZ/BF15QctruoLerRzm3aVQMGF0fihJeWzkbHChm29ubV85ryEjJ+oJOereoqLrbrTXzYj+uLbYR680l5b3YcVOPLKhZhBzUxmuote2G8P8Sb9VbXWyvNN49QtpjO+ItcYA/3qCeac7fSQfvylSN/ZdLt1KXydLOv1hZureN6CKNxbM3dvPGwwh+PUpVgfozfa2zUvb93vc940XcXPbcdzdyS9GAbhrKyqe0VhA/wvmqgfvrhvORWbuWSNjqnCZv16yMGL8yZ6znWFvCKgDqHn0tuf+ZfUJisD5urzWazHm5XnSjzHQWHvLXEaR+eCngxIPzN+BsymfhP/BkZ/v2yfq/f7/dMx06e9BZoPkEW8Epw5v3bT+gmlWk2K4qGjA/GnfZRsYAXwZnAL6VO/uVbiTMLXz5I/PDP5uVvP3/QN+QrL92OgBq+frwUOD8/v6zj4+VHCfGnv3z4TuD8X76+dEsCXHxtJO0RuPz05zBvXx++qol3rv9hkHZ5+dNPPxnzs8QniV9//fVv4unL838NzL5KSHtbTt9fzlx8+6Dt6k6b4m+dH/ilf7v6d0Htf5x9e+lGBLSg9JPP65PP2HhKrnR8Snz7jqz/82P50se/RGHSvm74udXfQi0XO3sVy8+m4rjOf5XUfvzbf4c5+9pxdunldmBEoOiEf6IS4eIaVrff/8/HT3/9ISxvXz388zbKZkZCOWfr2/F0VqXok//9kJBA7avHWenterhF99aXt4ne4ybIha9OB7xy/Pbbb77L6nMwfizDX2F8E2jwibKt7yAPzOK27+QHvAHguf94AaHxIlD7xpH1PNuT84QeH72nJODVAaHxJlV/AIPvTaVJOrxAYdK+C6BsNN6u4yRlSXyYzccd9wM1AW8YYr8dRqj1zwMFBAQEBAQEBAQEBAQEBAQEBAQE/D/G/wHxvI3BnmaStgAAAABJRU5ErkJggg=="})]})})}var T,z=u.a.img(T||(T=Object(d.a)(["\n  width: 500px;\n  max-width: 100%;\n  height: auto;\n"])));function G(){return Object(S.jsx)(V,{children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)("br",{}),Object(S.jsxs)("h1",{children:["Anime Club!   ",Object(S.jsx)(z,{src:"data:image/png;base64,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",style:{borderColor:"red",borderRadius:"50%",height:100,width:100}})]}),Object(S.jsx)("br",{}),Object(S.jsx)("h3",{children:"Description"}),Object(S.jsx)("p",{children:"We long to create a welcoming environment for UCSB students who are interested in anime. By having this club, students will be able to create friendships and network with other people who share similar interests. This will allow new students to make friendships with their peers and can hopefully help them adjust to college life a little easier. Additionally, we would like to educate people about Japanese culture and cultural icons through our meetings and special events."}),Object(S.jsx)("h3",{children:"Contact"}),Object(S.jsx)("p",{children:"theucsbanimeclub@gmail.com"}),Object(S.jsxs)("div",{children:["If you want more info, you can visit this "," ",Object(S.jsx)("a",{href:"https://www.instagram.com/ucsb.anime/",children:" page "})," . "]})]})})}function H(){return console.log("not found"),Object(S.jsx)(V,{children:Object(S.jsx)(O.a,{children:Object(S.jsx)("h1",{children:"This page was not found :("})})})}var R=n(7),Q=n(28);function D(){var e=Object(c.useState)({firstname:"",lastname:"",email:"",password:""}),t=Object(i.a)(e,2),n=t[0],a=t[1],r=function(e){var t=e.target.name,c=e.target.value;n[t]=c,a(n)},s=function(){var e=Object(b.a)(j.a.mark((function e(t){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://localhost:9000/users/signup",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)(V,{children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)("br",{}),Object(S.jsx)("div",{children:Object(S.jsx)("h1",{children:"Please Signup"})}),Object(S.jsxs)(R.a,{onSubmit:s,children:[Object(S.jsxs)(R.a.Group,{className:"mb-3",controlId:"formBasicFirstName",children:[Object(S.jsx)(R.a.Label,{children:"First Name"}),Object(S.jsx)(R.a.Control,{type:"text",placeholder:"Enter First Name",name:"firstname",onChange:r})]}),Object(S.jsxs)(R.a.Group,{className:"mb-3",controlId:"formBasicLastName",children:[Object(S.jsx)(R.a.Label,{children:"Last Name"}),Object(S.jsx)(R.a.Control,{type:"text",placeholder:"Enter Last Name",name:"lastname",onChange:r})]}),Object(S.jsxs)(R.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(S.jsx)(R.a.Label,{children:"Email address"}),Object(S.jsx)(R.a.Control,{type:"email",placeholder:"Enter email",name:"email",onChange:r}),Object(S.jsx)(R.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(S.jsxs)(R.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(S.jsx)(R.a.Label,{children:"Password"}),Object(S.jsx)(R.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:r})]}),Object(S.jsx)(R.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(S.jsx)(R.a.Check,{type:"checkbox",label:"Check me out"})}),Object(S.jsx)(Q.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}function Z(e){var t=e.isSignedIn,n=e.setIsSignedIn;console.log(t);var a=Object(o.f)(),r=C("user",""),s=Object(i.a)(r,2),l=(s[0],s[1]),h=Object(c.useState)({email:"",password:""}),d=Object(i.a)(h,2),u=d[0],x=d[1],m=function(e){var t=e.target.name,n=e.target.value;u[t]=n,x(u)},p=function(){var e=Object(b.a)(j.a.mark((function e(c){var r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,fetch("http://localhost:9000/users/login",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});case 3:return r=e.sent,e.next=6,r.json();case 6:s=e.sent,l(s._id),console.log(k("user","not working")),n(!0),console.log(s),console.log(t),a.push("/profile");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)(V,{children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)("br",{}),Object(S.jsx)("div",{children:Object(S.jsx)("h1",{children:"Please Login"})}),Object(S.jsxs)(R.a,{onSubmit:p,children:[Object(S.jsxs)(R.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(S.jsx)(R.a.Label,{children:"Email address"}),Object(S.jsx)(R.a.Control,{type:"email",placeholder:"Enter email",name:"email",onChange:m}),Object(S.jsx)(R.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(S.jsxs)(R.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(S.jsx)(R.a.Label,{children:"Password"}),Object(S.jsx)(R.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:m})]}),Object(S.jsx)(R.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(S.jsx)(R.a.Check,{type:"checkbox",label:"Check me out"})}),Object(S.jsx)(Q.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}var X,U=n.p+"static/media/doggo.60600ade.jpg",M=u.a.img(X||(X=Object(d.a)(["\n  width: 500px;\n  max-width: 100%;\n  height: auto;\n"])));function _(){var e=Object(o.f)(),t=C("isSignedIn",!0),n=Object(i.a)(t,2),c=(n[0],n[1]),a=k("user"),r=C("user",a),s=Object(i.a)(r,2),l=(s[0],s[1]);return Object(S.jsx)(V,{children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)("div",{children:"Google also thinks you'll like this picture :)"}),Object(S.jsx)("br",{}),Object(S.jsx)(M,{src:U}),Object(S.jsxs)("div",{children:["Here is data:",Object(S.jsx)("ul",{children:Object(S.jsx)("li",{children:JSON.stringify(a,null,2)})})]}),Object(S.jsx)(Q.a,{variant:"primary",type:"submit",onClick:function(t){l(""),c(null),e.push("/")},children:"Logout"})]})})}function $(){var e=C("isSignedIn",null),t=Object(i.a)(e,2),n=t[0],c=t[1];return n?Object(S.jsx)(l.a,{children:Object(S.jsxs)(o.c,{children:[Object(S.jsx)(o.a,{exact:!0,path:"/",component:W}),Object(S.jsx)(o.a,{exact:!0,path:"/club/:id",component:P}),Object(S.jsx)(o.a,{exact:!0,path:"/club1/datascience",component:J}),Object(S.jsx)(o.a,{exact:!0,path:"/club2/anime",component:G}),Object(S.jsx)(o.a,{exact:!0,path:"/profile",component:_}),Object(S.jsx)(o.a,{path:"/",component:H})]})}):Object(S.jsx)(l.a,{children:Object(S.jsxs)(o.c,{children:[Object(S.jsx)(o.a,{exact:!0,path:"/",component:W}),Object(S.jsx)(o.a,{exact:!0,path:"/club/:id",component:P}),Object(S.jsx)(o.a,{exact:!0,path:"/club1/datascience",component:J}),Object(S.jsx)(o.a,{exact:!0,path:"/club2/anime",component:G}),Object(S.jsx)(o.a,{exact:!0,path:"/login",render:function(){return Object(S.jsx)(Z,{isSignedIn:n,setIsSignedIn:c})}}),Object(S.jsx)(o.a,{exact:!0,path:"/signup",component:D}),Object(S.jsx)(o.a,{path:"/",component:H})]})})}n(81);s.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)($,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.28849ed8.chunk.js.map