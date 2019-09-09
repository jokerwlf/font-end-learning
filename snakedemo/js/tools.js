  (function(window,undefined){
      var Tools={
      getRandom:function (min,max) {
        return Math.floor(Math.random() * (max - min + 1)) +min;
        //floor() 方法返回小于等于x的最大整数,
        //random() 方法可返回介于 0（包含） ~ 1（不包含） 之间的一个随机数。
           }
    }
    window.Tools=Tools;
   })(window,undefined)
