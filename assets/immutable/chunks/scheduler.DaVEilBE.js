function m(){}const M=t=>t;function E(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function S(){return Object.create(null)}function v(t){t.forEach(j)}function q(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function B(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function D(t){return Object.keys(t).length===0}function x(t,...n){if(t==null){for(const r of n)r(void 0);return m}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function G(t){let n;return x(t,e=>n=e)(),n}function H(t,n,e){t.$$.on_destroy.push(x(n,e))}function I(t,n,e,r){if(t){const o=k(t,n,e,r);return t[0](o)}}function k(t,n,e,r){return t[1]&&r?E(e.ctx.slice(),t[1](r(n))):e.ctx}function J(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],d=Math.max(n.dirty.length,o.length);for(let u=0;u<d;u+=1)l[u]=n.dirty[u]|o[u];return l}return n.dirty|o}return n.dirty}function K(t,n,e,r,o,l){if(o){const d=k(n,e,r,l);t.p(d,o)}}function P(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function U(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function L(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function N(t){const n={};for(const e in t)n[e]=!0;return n}function Q(t){return t??""}function R(t,n,e){return t.set(e),n}function T(t){return t&&q(t.destroy)?t.destroy:m}let f;function h(t){f=t}function _(){if(!f)throw new Error("Function called outside component initialization");return f}function V(t){_().$$.on_mount.push(t)}function W(t){_().$$.after_update.push(t)}function X(t,n){return _().$$.context.set(t,n),n}function Y(t){return _().$$.context.get(t)}function Z(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(r=>r.call(this,n))}const a=[],y=[];let s=[];const b=[],w=Promise.resolve();let g=!1;function C(){g||(g=!0,w.then(z))}function $(){return C(),w}function O(t){s.push(t)}function tt(t){b.push(t)}const p=new Set;let c=0;function z(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,h(n),F(n.$$)}}catch(n){throw a.length=0,c=0,n}for(h(null),a.length=0,c=0;y.length;)y.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];p.has(e)||(p.add(e),e())}s.length=0}while(a.length);for(;b.length;)b.pop()();g=!1,p.clear(),h(t)}function F(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function nt(t){const n=[],e=[];s.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),s=n}export{j as A,a as B,C,L as D,B as E,T as F,X as G,Y as H,R as I,tt as J,Q as K,W as a,y as b,H as c,I as d,J as e,N as f,P as g,E as h,U as i,Z as j,G as k,q as l,O as m,m as n,V as o,M as p,S as q,v as r,A as s,$ as t,K as u,z as v,D as w,nt as x,f as y,h as z};