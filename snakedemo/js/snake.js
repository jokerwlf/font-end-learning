(function (){

    var position='absolute';
    var elements=[];

    // 1、定义蛇构造函数，以及一些默认属性
    function Snake(options){
         options=options || {};
        this.width=options.width ||20;
        this.height=options.height ||20;
        //设置蛇的方向，默认为右
        this.direction=options.direction || 'right';
         //设置蛇的身体，利用数组形式存储每一个蛇节，蛇头加蛇身，先默认值
        this.body=[
            {x:3,y:2,color:'red'},
            {x:2,y:2,color:'blue'},
            {x:1,y:2,color:'blue'}

        ];
    }


    // 2、在蛇的原型上添加render方法用于渲染蛇
     Snake.prototype.render=function (map){
        // 先删除蛇，再创建蛇，这点与删除食物类似，方法也是一样的
        remove();
        //利用len避免每次获取蛇节数组的长度，利用循环渲染出每一个蛇节
        for(var i=0,len=this.body.length;i<len;i++){
            //将每一个蛇节赋值给object
            var object=this.body[i];
            var div=document.createElement('div');
            map.appendChild(div);
            elements.push(div);
            div.style.position=position;
            div.style.width=this.width + 'px';
            div.style.height=this.height + 'px';
            //每个蛇节的位置确定
            div.style.left=object.x * this.width + 'px';
            div.style.top=object.y * this.height + 'px';         
            div.style.backgroundColor=object.color;
        }
     }



     // 3、定义删除蛇的方法，避免移动时造成重合，从后往前删除，从后往前遍历
     function remove(){
             for(var i=elements.length-1;i>=0;i--){
                 elements[i].parentNode.removeChild(elements[i]);
                 elements.splice(i,1) ;
             }
        }


     // 4、在蛇的原型上添加移动方法，传入食物对象以及地图
     Snake.prototype.move=function(food,map){
        // 4、1 蛇身移动方法，蛇节总是移动到上一节的位置
    for(var i=this.body.length-1;i>0;i--){
        this.body[i].x=this.body[i-1].x;
        this.body[i].y=this.body[i-1].y;
    }
        // 4、2 蛇头移动方法，上下左右
        var head=this.body[0];
        switch(this.direction){
            case 'right':  head.x +=1; break;
            case 'left':  head.x -=1;break;
            case 'top':  head.y -=1;break;
            case 'buttom':  head.y +=1;break;
        }
        // 4、3 判断蛇头与食物坐标是否重合
        var headx=head.x*this.width;
         var heady=head.y*this.height;
        if (headx===food.x && heady===food.y){
            // 如果重合利用最后一节
            var last=this.body[this.body.length-1];
            this.body.push({
                x: last.x,
                y:last.y,
                color:last.color
            })
            // 重新随机生成食物
            food.render(map);
        }
   }


     // 5、暴露构造函数
        window.Snake=Snake;

})()

     //6、测试用
        /*var map=document.getElementById('map');
        var snake=new Snake();
        snake.render(map);*/