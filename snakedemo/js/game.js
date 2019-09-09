(function (){
      //1、 定义游戏对象Game，控制游戏逻辑
       var that;
         
        function Game(map){
            this.food=new Food;
            this.snake=new Snake;
            this.map=map;
            that=this;
        }

        //2、定义start方法，
        Game.prototype.start=function(){
            // 将食物和蛇渲染到地图上   
            this.food.render(this.map);
            this.snake.render(this.map);
            runSnake();//蛇移动
            bindkey();//键盘控制

        }


        //3、定义键盘事件
        function bindkey(){
            // 给界面文档注册键盘事件,事件的this指向document
            // 另外一种事件注册方式，document.onekeydown=function(){}
            document.addEventListener('keydown',function(e){
                    // console.log(e.keyCode);键盘码对应37-left,38-top,39-right,40-bottom
                    switch (e.keyCode) //等值判断可以用switch，注意that的使用，用于获取游戏对象
                       {
                        case 37:
                            this.snake.direction='left';break;
                       case 38:
                            this.snake.direction='top';break;
                       case 39:
                            this.snake.direction='right';break;
                       case 40:
                            this.snake.direction='buttom';break;
                       }
            }.bind(that),false);//false事件冒泡，true，事件捕获。利用bind改变函数的this指向。
        }


        // 4、定义蛇自动移动，撞墙结束游戏的私有函数
        function runSnake(){
            // 定义一个定时器，让蛇自动移动，
            var timeid=setInterval(function(){
            // 在定时器的内部this指向的是window对象,所以不能直接用this，利用that指向游戏对象
            that.snake.move(that.food,that.map);
            // 传入当前地图
            that.snake.render(that.map);
            var maxx=that.map.offsetWidth/that.snake.width;
            var maxy=that.map.offsetHeight/that.snake.height;
            var headx=that.snake.body[0].x;
            var heady=that.snake.body[0].y;
            // 判断蛇撞墙的方法，一旦碰到map的边清理掉定时器，这里有个渲染的小bug
            if(headx<0 || headx>=maxx){
                alert('game over');
                clearInterval(timeid);//清理定时器
            }
            if(heady<0 || heady>=maxy){
                alert('game over');
                clearInterval(timeid);
            }

            },150);
        }


        window.Game=Game;

})();

        // 5、启动游戏，测试用
         /*var map=document.getElementById('map');
        var game=new Game(map);
        game.start();*/
        