

$(function(){

	// 点击向左的箭头时，回到首页
	$('.arrowDownFirst').click(function(){
		window.location.href="index.html";
	})

	// 点击哪个专业，哪个专业变色
	$("li").click(function(){
		$(this).addClass('bottomLine').siblings().removeClass('bottomLine');
	})

	// 点击向下箭头时，显示所有课程
	$("#jump").click(function(){
		if($(".lookMore").is(':hidden')){
			$(".lookMore").css('display','block');	
		}
	})

	// 点击所有课程里的某个课程时，所有课程的页面隐藏
	$(".listItem3").click(function(){
		$(".lookMore").css('display','none');	
	})

	//点击所有课程页面的下方蓝色区域时，所有课程的页面隐藏
	$('.bg').click(function(){
		$(".lookMore").css('display','none');
	})

	//点击所有课程页面里的向上箭头时，所有课程的页面隐藏
	$(".backH").click(function(){
		$(".lookMore").css('display','none');
	})

	
	//点击课程图片，跳转到对应的课程详情
	$(".newPublicContentImg").click(function(){
		window.location.href="courseDescription.html";
	})

})
