/*
* @Author: howtosay111
* @Date:   2016-05-05 12:18:09
* @Last Modified by:   howtosay111
* @Last Modified time: 2016-05-05 12:58:39
*/



'use strict';
var timeDate = 10000;
function parseTime(data) {
    var hours = parseInt(data/(1000*60*60));
    var minutes = parseInt((data%(1000*60*60))/(1000*60));
    var seconds = parseInt((data%(1000*60)/1000));
    return {hours,minutes,seconds};
}
//定义一个函数为timer--计时器
function timer(data) {
    var rightTime = parseTime(data);
    console.log('倒计时  ',rightTime);
    data = data -1000;
    if(data<0){
        return console.log('结束');
    }
    //每个1秒调用一次这个函数--自身
    //不要在setTimeout调用函数如timer(data)
    setTimeout(timer,1000);
}
timer(timeDate);

// timedCount();