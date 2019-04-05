$(function(){
	//small中move移动
	$('.login-form').mousedown(function(e){
		// console.log('e:'+e);

		$('.login-banner').mousemove(function(e){
			//move big显示
			// $('#move,#big').show();
			
			//move的坐标
			// console.log(e);
			var x=e.pageX-$(this).offset().left;
			var y=e.pageY-$(this).offset().top;

			// alert(x+':'+y)

			//鼠标居中-move一半宽高
			var x=x-$('.login-form').width()/2;
			var y=y-$('.login-form').height()/2;
			
			//边界判断
			//左边
			if(x<=0){
				x=0
			}
			//上边
			if(y<=0){
				y=0;
			}
			//left的最大值
			if(x>=$('.login-banner').width()-$('.login-form').width()){
				x=$('.login-banner').width()-$('.login-form').width();
			}
			
			//top的最大值
			if(y>=$('.login-banner').height()-$('.login-form').height()){
				y=$('.login-banner').height()-$('.login-form').height();
			}

			// console.log(x+':'+y);

			
			//move绑定坐标
			$('.login-form').css({left:x,top:y});
			
			
		})

	});
	
	$('.login-banner').mouseup(function(){
			//取消事件
			$(this).unbind("mousemove").stop();

	});



	$('.login-tab>ul>li').click(function(){
		//显示当前li 其余隐藏
		$(this).addClass('active').siblings().removeClass('active');

		//获取当前下标
		var index=$(this).index();
		// console.log(index);
		$('.hide-div>div').eq(index).show().siblings().hide();

	});

});

