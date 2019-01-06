//第一步：每次打开页面时获取当前时间戳  var currentTime = new Date().getTime()
//第二部：设定指定结束日期的时间戳，例如9.10号  var lastTime = new Date(2018,8,10);
//第三部：拿9.10的时间戳减去当前系统时间戳，var interval = lastTime-currentTime;
//第四部：判断interval是否小于0，如果小于就显示“活动已结束”

//完整代码
var currentTime = new Date().getTime();//获取当前系统时间

var lastTime = new Date(2018,8,10).getTime();//获取指定结束时间，第二个参数月份要比实际月份小1，比如2018.9.10号就写2018,8,10

var interval = lastTime - currentTime;

if(interval < 0) {
    alert('活动已结束')
}else {
    alert('活动进行中')
}


