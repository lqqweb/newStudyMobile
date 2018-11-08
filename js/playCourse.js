//点击课程目录里的视频图标，播放视频，点击音乐图标播放音乐，点击pdf下载文档

$(function(){
	$('.musicImg').click(function(){
		$('.videoPlay').get(0).pause();
		// $('.musicHidden').get(0).play();
		if($('.musicHidden').is(":hidden")){
			$('.musicHidden').css('display','block');
			$('.videoPlay').css('display','none');
			$('.musicBg').css('display','block');
		}
	})

	$('.moveImg').click(function(){
		$('.musicHidden').get(0).pause();
		// $('.videoPlay').get(0).play();
		if($('.videoPlay').is(":hidden")){
			$('.videoPlay').css('display','block');
			$('.musicHidden').css('display','none');
			$('.musicBg').css('display','none');
		
		}
		 
	})


	//课程目录的内容标题，如果较长，以省略号显示，当点击该标题时，显示全部标题
	$(".courseInfoTitle").click(function(){
		$(this).css("display","none");
		$(this).next().css("display","block");
	})
	//点击全部显示的标题时，显示省略标题
	$(".courseInfoTitle_hidden").click(function(){
		$(this).prev().css("display","block");
		$(this).css("display","none");
	})
})



//点击向左箭头，返回到课程详情页面
$(function(){
	$('.arrowDownToCourseDescription').click(function(){
		window.location.href='courseDescription.html';
	})
})

//查看课程目录及评论
$(function(){
	$(".courseInfo").click(function(){
		$(".courseInfo").addClass('addColor');
		$(".comment").removeClass('addColor');
		$(".courseInfoContent").css("display","block");
		$(".commentContent").css("display","none");
	})
	$(".comment").click(function(){
		$(".comment").addClass('addColor');
		$(".courseInfo").removeClass('addColor');
		$(".commentContent").css("display","block");
		$(".courseInfoContent").css("display","none");
	})
})
//是否有人评论
$(function(){
	var commentNum = $(".commentNum").html();
	// 没有人评论
	if(commentNum == 0){
		$(".noComment").css("display","block");
		$(".haveComment").css("display","none");
		return;
	}
	if(commentNum !=0){
		$(".noComment").css("display","none");
		$(".haveComment").css("display","block");
		return;
	}
})


//查看全部回复内容
$(function(){
	$(".checkHC").click(function(){
		$(".hiddenComment").css("display","block");
	})
	$(".closeDetail").click(function(){
		$(".hiddenComment").css("display","none");
	})
})

//删除自己的评论
$(function(){
	$(".del").click(function(){
		$(".deleteMyComment").css("display","block");

	})
	$(".deleteY").click(function(){
		$(".myC").remove();
		$(".deleteMyComment").css("display","none");
	})
	$(".cancleD").click(function(){
		$(".deleteMyComment").css("display","none");
	})
})

//改变发送图片的颜色
$(function(){
	$(".deliverCommentContent").focus(function(){
		$(".changeImg_1").attr("src","images/comment/send_2.png");
	})
	$(".deliverCommentContent").blur(function(){
		$(".changeImg_1").attr("src","images/comment/send_1.png");
	})
})
