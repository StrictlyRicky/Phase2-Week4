(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main"],{2614:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$store.state.user?n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"q-pa-md q-gutter-md"},[n("q-list",{staticClass:"rounded-borders",staticStyle:{width:"50vw","margin-left":"25vw"},attrs:{bordered:""}},[n("q-item-label",{attrs:{header:""}},[e._v("Questions")]),e._l(e.$store.state.questions,(function(e,t){return n("div",{key:t},[n("QuestionBar",{attrs:{question:e,index:t}})],1)}))],2)],1)])]):n("div",[n("div",{staticClass:"row justify-between"},[n("q-parallax",{attrs:{src:"https://cdn.quasar.dev/img/parallax2.jpg"}},[n("h1",{staticClass:"text-white"},[e._v("Hoverflow")]),n("span",{attrs:{id:"time"}},[e._v(e._s(e.current))])])],1),n("div",{staticClass:"row"},[n("div",{staticClass:"q-px-lg q-pb-md",attrs:{id:"timeline"}},[n("q-timeline",{attrs:{layout:e.layout,color:"secondary"}},[n("q-timeline-entry",{attrs:{heading:""}},[e._v("\n            Welcome To Hoverflow\n            "),n("br"),n("br"),e._v("\n            The Medium To Deliver Q&As\n          ")]),n("q-timeline-entry",{attrs:{title:"Register",subtitle:"Step 1",side:"left",icon:"assignment_ind"}},[n("div",[e._v("\n              Welcome To Hoverflow! For those newcomers, let me introduce a\n              bit to what we do here. "),n("br"),e._v("\n              This is an open forum to ask all your questions of which you\n              desire. "),n("br"),e._v("\n              Here everyone can answer your questions and upvote / downvote\n              based on their interests. "),n("br"),e._v("\n              To get started please register first! "),n("br"),e._v("\n              If you are an old user, please skip to step 2! "),n("br"),e._v("\n              Once you finished register, skip to step 3!\n            ")])]),n("q-timeline-entry",{attrs:{title:"Login",subtitle:"Step 2",side:"right",icon:"assignment_turned_in"}},[n("div",[e._v("\n              For the veterans of the forum, please login "),n("br"),e._v("\n              and once you're done go to the next step!\n            ")])]),n("q-timeline-entry",{attrs:{title:"Question Asking",subtitle:"Step 3",side:"left",icon:"question_answer"}},[n("div",[e._v("\n              Now that you finished your login process, "),n("br"),e._v("\n              you will be relocated to your dashboard, "),n("br"),e._v("\n              where all your questions are displayed. "),n("br"),e._v('\n              To ask a new question, kindly click "add new" '),n("br"),e._v("\n              Once you're done, please go to the next and final step!\n            ")])]),n("q-timeline-entry",{attrs:{title:"Done!",subtitle:"FInal Step",side:"right"}},[n("div",[e._v("\n              That's it! You're finally set! That covers the basics of what we\n              do here, basically."),n("br"),e._v("\n              Feel free to roam around and try on several of our features to\n              get a feel of our website! "),n("br"),e._v("\n              Thank you for choosing Hoverflow as a platform to shed your\n              thoughts "),n("br"),e._v("\n              and ask your questions! "),n("br"),e._v("\n              See you next time!\n            ")])])],1)],1)])])])},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticStyle:{padding:"20px"},attrs:{clickable:""},on:{click:function(t){return e.getDetail(e.question._id)}}},[n("q-item-section",{attrs:{avatar:""}},[n("div",[e._v(e._s(e.question.upvote.length)+" Upvotes")]),n("div",[e._v(e._s(e.answerLength))]),n("div",[e._v(e._s(e.question.downvote.length)+" Downvotes")])]),n("q-item-section",[n("q-item-label",{attrs:{lines:"1"}},[e._v(e._s(e.question.title))]),n("q-item-label",{attrs:{caption:"",lines:"2"}},[n("span",{staticClass:"text-weight-bold"},[e._v("Asked By : "+e._s(e.question.user.username))])])],1),n("q-item-section",{attrs:{side:"",top:""}},[e._v("\n      "+e._s(e.time)+"\n    ")])],1),e.index+1!==e.question.length?n("q-separator",{attrs:{inset:"item"}}):e._e()],1)},r=[],a=(n("c5f6"),n("bc3a")),l=n.n(a),u={name:"QuestionBar",props:{question:Object,index:Number},data:function(){return{answers:null,time:null}},methods:{getDetail:function(e){this.$router.push("/question/".concat(e))},getNumOfAnswers:function(e){var t=this;l()({method:"get",url:"http://hoverflow-server.ricky-works.online/answer/".concat(e),headers:{token:localStorage.getItem("token")}}).then((function(e){var n=e.data;t.answers=n.length})).catch(console.log)}},mounted:function(){var e=this;this.getNumOfAnswers(this.question._id),this.$store.dispatch("timelapse",this.question.created_at).then((function(t){e.time=t}))},computed:{answerLength:function(){return 1===this.answers?"".concat(this.answers," Answer"):"".concat(this.answers," Answers")}}},c=u,d=n("2877"),v=Object(d["a"])(c,o,r,!1,null,null,null),h=v.exports,m=n("8055"),p=n.n(m),f={name:"Main",components:{QuestionBar:h},data:function(){return{socket:p.a.connect("http://hoverflow-server.ricky-works.online"),current:null}},mounted:function(){var e=this;this.$store.dispatch("fetchAllQuestions"),this.socket.on("Show Time",(function(t){e.current=t}))},computed:{layout:function(){return this.$q.screen.lt.sm?"dense":this.$q.screen.lt.md?"comfortable":"loose"}}},w=f,b=(n("4cc4"),Object(d["a"])(w,s,i,!1,null,"cb67538a",null));t["default"]=b.exports},"4cc4":function(e,t,n){"use strict";var s=n("8bab"),i=n.n(s);i.a},"8bab":function(e,t,n){}}]);
//# sourceMappingURL=main.f8950231.js.map