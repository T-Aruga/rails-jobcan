(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{188:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{msg:""}},methods:{getMsg:function(){var t=this;this.$axios.$get("/api/v1/hello").then((function(n){return t.msg=n.msg}))}}},l=e(17),component=Object(l.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("button",{on:{click:this.getMsg}},[this._v("\n    Hello\n  ")]),this._v("\n  "+this._s(this.msg)+"\n")])}),[],!1,null,null,null);n.default=component.exports}}]);