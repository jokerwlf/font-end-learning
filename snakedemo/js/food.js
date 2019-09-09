
   //重点：代码优化，为避免全局作用域下的变量名和函数名冲突，使用匿名的自调用函数，为该js文件开启了一个新的局部作用域
   (function (){
        
   var position='absolute';//将食物的位置设为全局变量，赋值绝对定位，子绝父相，脱离文档流
   var elements=[];//定义一个数组作为记录用来存放食物，以便于删除

   //1、定义食物构造函数
  function Food(options){
    options=options || {}; //若没有传入对象，则默认为空对象，没有此行代码这传入参数为undefined
    this.x=options.x || 0;//默认传入x值为0
    this.y=options.y ||0;
    this.width=options.width  ||20;//默认食物的宽和高
    this.height=options.height ||20;
    this.color=options.color ||'green';

    }

   
   //2、为食物的构造函数的原型添加render（用于渲染地图和食物）的属性，传入参数为地图
   Food.prototype.render=function(map){
      //删除之前创造的食物，才能创造新的食物
      remove(); //外部无法访问该函数
     //利用外部的tools.js文件中的Tools对象的getrandom方法生成随机的x,y值。
     //offsetWidth返回元素宽度为元素宽度、内边距和边框之和，为数值，style.width返回的为字符串。
      this.x=Tools.getRandom(0, map.offsetWidth/this.width - 1) * this.width;
      this.y=Tools.getRandom(0, map.offsetHeight/this.width - 1) * this.width;
      var div =document.createElement('div');//创造一个dom元素div
      map.appendChild(div);//将div加入到地图内，并给div设置属性,appendChild() 方法向节点添加最后一个子节点
      elements.push(div);//将食物放入记录数组内
      div.style.position=position;//位置通过变量传递
      div.style.left=this.x + 'px';//left属性定义元素的左边到最近一个具有定位设置父元素的左部边缘的位置
      div.style.top=this.y + 'px';//同理top
      div.style.width=this.width + 'px';
      div.style.height=this.height + 'px';
      div.style.backgroundColor=this.color;//backgroundcolor用于style属性时，c要大写
   }
 

    // 3、添加食物的删除的方法，从后往前遍历
      function remove(){
        for(var i=elements.length-1;i>=0;i--){
              elements[i].parentNode.removeChild(elements[i]);//删除页面的食物dom元素
              elements.splice(i,1);//删除数组内的食物元素
          }
      }

    // 4、利用顶级对象window使得外部可以访问Food构造函数，暴露构造函数
      window.Food=Food;



   })()
   

   //5、测试部分   测试用所以没有放进自调用函数里头
       /* var map=document.getElementById('map');//获取dom元素map
          var food=new Food();//创建一个food实例
          food.render(map);//进行地图渲染*/


