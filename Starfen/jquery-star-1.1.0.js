;
(function(fash){
	fash(window,window.document,jQuery);
}(function(win,doc,$){
	$.fn.star=function(options){
		   //默认参数
		var setting={
			num:2,
			color:"yellow"
		};
		//使用用户的参数覆盖默认参数
		$.extend(setting,options);
		var that=$(this);
		$("body").css({"margin":"0px","padding":"0px"});
		for(var i=0;i<setting.num;i++){
			that.append($("<span class='ic-start'></span>"));
			$(".ic-start").css({"display":"inline-block","background-image":"url('imgs/starky.png')","background-repeat":"no-repeat","width":"29px","height":"21px"});
		}
		that.append($("<span class='ic-span'>您的评分:<em class='ic-ping'></em>分</span>"));
		$(".ic-span").css({"margin-left":"10px"});
		$(".ic-ping").css({"margin":"0px 3px","font-style":"normal"});
		that.on("click",'.ic-start',function(){
				var ths=$(this);
				var k2=(ths.offset().left)+6;
				var k=getMousePos();
				if(k2>=k.x){
				$(".ic-start").css("background-image","url('imgs/starky.png')");
				ths.prevAll().css("background-image","url('imgs/starsy.png')")
				.end().css("background-image","url('imgs/starkban.png')");
				$(".ic-ping").html((ths.prevAll().length+1)-0.5);
				}else{
					$(".ic-start").css("background-image","url('imgs/starky.png')");
					ths.prevAll().css("background-image","url('imgs/starsy.png')")
					.end().css("background-image","url('imgs/starsy.png')");
					$(".ic-ping").html(ths.prevAll().length+1);
				}
				
		});
		function getMousePos() {
            var e=win.event;
            return {'x':e.clientX}
        }
	};
})
)