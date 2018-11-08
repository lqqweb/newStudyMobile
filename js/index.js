
// 点击搜索按钮
$(function(){
	$(".selectBtn").click(function(){
		window.location.href="selectResult.html";
	})
})

// 轮播图
window.onload=function(){

	var swiper=new Swiper(".swiper-container",{
			pagination:".swiper-pagination",
			paginationClickable:true,
			loop:true,
			autoplay:3500,
			autoplayDisableOnInteraction:false,
			
		});

}

//点击专业课程里的专业内容时跳转到对应的专业内容页面
$(function(){
	$(".courseItem1").click(function(){
		window.location.href="huawei.html";
	})
})



//点击最新发布的课程内容时跳转到对应的课程内容详情页面

$(function(){
	$(".newPublicContentItems1").click(function(){
		window.location.href="courseDescription.html"
	})
})


// 首页底部图标选项，点击哪个选项，哪个选项变色，并跳转到对应的页面，其他选项不变
$(function(){

	$(".bottomsItems1").click(function(){
		$(".bottomsItems1-img1").attr('src',"images/bottoms/1-1.png");
		$(".bottomsItems1-img2").attr('src',"images/bottoms/2.png");
		$(".bottomsItems1-img3").attr('src',"images/bottoms/3.png");
		$(".bottomsItems1-img4").attr('src',"images/bottoms/4.png");
		$(".bottomsTitle1").css("color",'#3f9dec');
		$(".bottomsTitle2").css("color",'black');
		$(".bottomsTitle3").css("color",'black');
		$(".bottomsTitle4").css("color",'black');
		window.location.href="index.html";
		
	})

	$(".bottomsItems2").click(function(){
		$(".bottomsItems1-img1").attr('src',"images/bottoms/1.png");
		$(".bottomsItems1-img2").attr('src',"images/bottoms/2-1.png");
		$(".bottomsItems1-img3").attr('src',"images/bottoms/3.png");
		$(".bottomsItems1-img4").attr('src',"images/bottoms/4.png");
		$(".bottomsTitle1").css("color",'black');
		$(".bottomsTitle2").css("color",'#3f9dec');
		$(".bottomsTitle3").css("color",'black');
		$(".bottomsTitle4").css("color",'black');
		window.location.href="myCourse-studyMap.html";
		
	})

	$(".bottomsItems3").click(function(){
		$(".bottomsItems1-img1").attr('src',"images/bottoms/1.png");
		$(".bottomsItems1-img2").attr('src',"images/bottoms/2.png");
		$(".bottomsItems1-img3").attr('src',"images/bottoms/3-1.png");
		$(".bottomsItems1-img4").attr('src',"images/bottoms/4.png");
		$(".bottomsTitle1").css("color",'black');
		$(".bottomsTitle2").css("color",'black');
		$(".bottomsTitle3").css("color",'#3f9dec');
		$(".bottomsTitle4").css("color",'black');
		window.location.href="myCourse.html";
		
	})

	$(".bottomsItems4").click(function(){
		$(".bottomsItems1-img1").attr('src',"images/bottoms/1.png");
		$(".bottomsItems1-img2").attr('src',"images/bottoms/2.png");
		$(".bottomsItems1-img3").attr('src',"images/bottoms/3.png");
		$(".bottomsItems1-img4").attr('src',"images/bottoms/4-1.png");
		$(".bottomsTitle1").css("color",'black');
		$(".bottomsTitle2").css("color",'black');
		$(".bottomsTitle3").css("color",'black');
		$(".bottomsTitle4").css("color",'#3f9dec');
		window.location.href="personalCenter.html";
	})
})









