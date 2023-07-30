"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[691],{691:function(e,n,r){r.r(n),r.d(n,{default:function(){return Z}});var t,i,o,a,s,c=r(861),u=r(439),h=r(687),f=r.n(h),p=r(689),l=r(87),d=r(791),x=r(168),v=r(686),w=v.Z.div(t||(t=(0,x.Z)(["\n  display: flex;\n  gap: 30px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),b=v.Z.img(i||(i=(0,x.Z)(["\n  width: 200px;\n"]))),k=r(184),m=function(e){var n=e.movieDetails,r=n.title,t=n.original_title,i=n.vote_average,o=n.overview,a=n.genres,s=n.poster_path,c=n.release_date,u="https://image.tmdb.org/t/p/w342/".concat(s),h=Math.round(i/10*100),f=a&&a.length>=1?a.map((function(e){return e.name})).join(", "):"No genres";return(0,k.jsxs)(w,{children:[(0,k.jsx)(b,{src:u,alt:r}),(0,k.jsxs)("div",{children:[(0,k.jsxs)("h1",{children:[r||t," (",c.slice(0,4),")"]}),(0,k.jsxs)("p",{children:["User Score: ",h,"%"]}),(0,k.jsx)("h2",{children:"Overview"}),(0,k.jsx)("p",{children:o}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)("p",{children:f})]})]})},g=r(212),j=v.Z.p(o||(o=(0,x.Z)(["\n&::before {\n    content: '';\n    display: block;\n    margin-bottom: 20px;\n    width: 100%;\n    height: 1px;\n    background-color: #e7e9fc;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n"]))),E=(0,v.Z)(l.NavLink)(a||(a=(0,x.Z)(["\n  box-shadow: inset 0px 1px 0px 0px #ffffff;\n  background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);\n  background-color: #f9f9f9;\n  border-radius: 6px;\n  border: 1px solid #dcdcdc;\n  display: inline-block;\n  cursor: pointer;\n  color: #666666;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #ffffff;\n\n  &:hover {\n    background: linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);\n    background-color: #e9e9e9;\n  }\n"]))),y=v.Z.div(s||(s=(0,x.Z)(["\n&::after {\n    content: '';\n    display: block;\n    margin-bottom: 20px;\n    width: 100%;\n    height: 1px;\n    background-color: #e7e9fc;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n"]))),S=new g.Z,Z=function(){var e,n,r=(0,d.useState)({}),t=(0,u.Z)(r,2),i=t[0],o=t[1],a=(0,p.UO)().movieId,s=(0,p.TH)(),h=(0,d.useRef)(null!==(e=null===(n=s.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),x=(0,d.useRef)(!1);return(0,d.useEffect)((function(){var e=function(){var e=(0,c.Z)(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.getMovieDetails(a);case 3:n=e.sent,o(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e(),x.current=!0}),[a]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(E,{to:h.current,children:"Go back"}),x.current&&(0,k.jsx)(m,{movieDetails:i}),(0,k.jsx)(j,{children:"Additional information"}),(0,k.jsx)(y,{children:(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsx)(l.Link,{to:"cast",children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(l.Link,{to:"reviews",children:"Reviews"})})]})}),(0,k.jsx)(d.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading..."}),children:(0,k.jsx)(p.j3,{})})]})}},212:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(861),i=r(671),o=r(144),a=r(687),s=r.n(a),c=function(){function e(){(0,i.Z)(this,e),this.BASE_URL="https://api.themoviedb.org/3/",this.ACCESS_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTNmNDQ0YzhjOTIzYjEwNGFiMzkzZDlmZmY0NzM3NSIsInN1YiI6IjY0NzUyYTBiYzI4MjNhMDBjNDIxNDA3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wJ9yqsOyNyT3w7GuPXqWWQIZSuAsjemKs2vv1aIwq24",this.REQUEST_OPTIONS={headers:{Authorization:"Bearer ".concat(this.ACCESS_TOKEN),"Content-Type":"application/json"}}}return(0,o.Z)(e,[{key:"getTrends",value:function(){var e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.BASE_URL,"trending/all/day"),this.REQUEST_OPTIONS);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error;case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getQuery",value:function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.BASE_URL,"search/movie?query=").concat(n.trim()),this.REQUEST_OPTIONS);case 2:if((r=e.sent).ok){e.next=5;break}throw new Error;case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.BASE_URL,"movie/").concat(n),this.REQUEST_OPTIONS);case 2:if((r=e.sent).ok){e.next=5;break}throw new Error;case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getMovieCredits",value:function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.BASE_URL,"movie/").concat(n,"/credits"),this.REQUEST_OPTIONS);case 2:if((r=e.sent).ok){e.next=5;break}throw new Error;case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.BASE_URL,"movie/").concat(n,"/reviews"),this.REQUEST_OPTIONS);case 2:if((r=e.sent).ok){e.next=5;break}throw new Error;case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=691.41ee83dc.chunk.js.map