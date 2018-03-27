 
//import styles
import '../sass/main.scss';

//import html pages into bundle
import '../index.html';

//
import Vue from 'vue';

import helloComponent from './components/hello.vue';
Vue.component('hello-component', helloComponent);

let im_cool = () => 'this is good';

console.log(im_cool())


const app = new Vue({
    el: '#app',
});

import clockcomponent from './components/clock.js';

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function() {
      startTime()
    }, 500);
  }
  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
  }
  
  startTime()