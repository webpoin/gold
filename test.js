$.easing.self = function(x,t,b,c,d){
	if ((t/=d) < (1/2.75)) {
		return c*(7.5625*t*t) + b;
	} else if (t < (2/2.75)) {
		return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
	} else if (t < (2.5/2.75)) {
		return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
	} else {
		return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
	}
}

$(window).load(function(){


	 $('.anim').on('anim',function(){

	 	var anim = $(this).show();
	 	// 阴影
	 	var shadow_img = anim.find('.shadow').css({top:50,opacity:0}).animate({top:16},400).get(0);
		// 元宝
		var gold_img = anim.find('.gold').css('top', -300).animate({top:-18},{duration: 500,step:function(now, fx){
			var x = (now+300)/(300-18);
			if(x>0.5){
				shadow_img.style.opacity = (x-0.5)*2;
				shadow_img.style.width = (200*x-100)+'%';
				shadow_img.style.marginLeft = (50-100*x)+'%';			
			}
			if(x>0.7){
				gold_img.style.webkitTransform = 'rotate('+(x-0.7)*40+'deg)';
			}
		},complete:function(){
			$('<div/>').css('opacity',0).animate({
				opacity:1
			},{
				duration: 500,
				easing:'self',
				step:function(now, fx){
					gold_img.style.webkitTransform = 'rotate('+(20-now*20)+'deg)';
				}
			});
		}}).get(0);

	 });



	// 启动动画
	$('.anim1').trigger('anim');
	setTimeout(function(){$('.anim2').trigger('anim');},120);
	setTimeout(function(){$('.anim3').trigger('anim');},40);

	// 播放mp3
	var audio = document.getElementById('audio');
	setTimeout(function(){audio.play();},80);


	// 消失
	setTimeout(function(){$('.anim').fadeOut()},8000);


});