$(function(){

	//一级标题选择
$("dd").click(function(){
		$(this).addClass('courseSelected').siblings().removeClass('courseSelected');
	})
$("dd").click(function(){
		$(".selectCourseAll").css("display","block");
		$(this).addClass('courseSelected');
		$(".selectMustCourse").css("display","none");
		$(".courseMustSelect").removeClass('courseSelected');
	})
	$(".courseMustSelect").click(function(){
		$(".selectMustCourse").css("display","block");
		$(".courseMustSelect").addClass('courseSelected');
		$(".selectCourseAll").css("display","none");
		$("dd").removeClass('courseSelected');
	})


// 点击向下箭头时，显示所有课程分类的内容
	$("#jump").click(function(){
		if($(".lookMore").is(':hidden')){
			$(".lookMore").css('display','block');	
		}
	})

	// 点击所有课程分类里的某个课程时，所有课程详细分类的页面隐藏
	$("dd").click(function(){
		$(".lookMore").css('display','none');	
	})

	//点击所有课程详细分类页面的下方蓝色区域时，所有课程详细分类的页面隐藏
	$('.bg').click(function(){
		$(".lookMore").css('display','none');
	})

	//点击所有课程详细分类页面里的向上箭头时，所有课程详细分类的页面隐藏
	$(".backH").click(function(){
		$(".lookMore").css('display','none');
	})



//待学课程或者已学课程里的课程的内容标题，如果较长，以省略号显示，当点击该标题时，显示全部标题
	// $(".studyCourseName").click(function(){
	// 	$(this).css("display","none");
	// 	$(this).next().css("display","block");
	// })
	//点击全部显示的标题时，显示省略标题
	// $(".studyCourseName_hidden").click(function(){
	// 	$(this).prev().css("display","block");
	// 	$(this).css("display","none");
	// })

	//点击必须课里的对应的课程方案出现对应的课程内容
	$(".mustStudyDetailInfo").click(function(){
		$(".studyProject").css("display","none");
		$(".studyProjectContent").css("display","block");
		
	})

	//返回课程方案按钮
	$(".backStudyProject").click(function(){
		// alert(1);
		$(".studyProject").css("display","block");
		$(".studyProjectContent").css("display","none");
	})


	//点击学习地图里的对应的学习地图名称出现对应的学习地图课程
	$(".studyMapDetailInfo").click(function(){
		$(".studyMapProject").css("display","none");
		$(".studyMapDetailContent").css("display","block");
		
	})

	//返回学习地图按钮
	$(".backStudyMap").click(function(){
		// alert(1);
		$(".studyMapProject").css("display","block");
		$(".studyMapDetailContent").css("display","none");
	})


	//二级标题里，点击待学课程，待学课程变色，点击已学课程，已学课程变色，点击必修课程，必修课程变色
	$(".courseType4").click(function(){
		$(".courseType4").addClass('selectColor');
		$(".courseType1").removeClass('selectColor');
		$(".courseType2").removeClass('selectColor');
		$(".courseType3").removeClass('selectColor');
		$(".courseType5").removeClass('selectColor');

		$(".studyMap").show();
		$(".selectMustCourse").hide();
        $(".studyInfoContent").hide();
         $(".recommendCourse").hide();

	});

	$(".courseType5").click(function(){
		$(".courseType5").addClass('selectColor');
		$(".courseType1").removeClass('selectColor');
		$(".courseType2").removeClass('selectColor');
		$(".courseType3").removeClass('selectColor');
		$(".courseType4").removeClass('selectColor');

		$(".recommendCourse").show();
		$(".studyMap").hide();
		$(".selectMustCourse").hide();
        $(".studyInfoContent").hide();

	});

	$(".courseType3").click(function(){
		$(".courseType3").addClass('selectColor');
		$(".courseType1").removeClass('selectColor');
		$(".courseType2").removeClass('selectColor');
		$(".courseType4").removeClass('selectColor');
		$(".courseType5").removeClass('selectColor');

		$(".selectMustCourse").show();
        $(".studyInfoContent").hide();
        $(".studyMap").hide();
        $(".recommendCourse").hide();


	});
	$(".courseType1").click(function(){
		$(".courseType1").addClass('selectColor');
		$(".courseType2").removeClass('selectColor');
		$(".courseType3").removeClass('selectColor');
		$(".courseType4").removeClass('selectColor');
		$(".courseType5").removeClass('selectColor');

		$(".studyInfoContent").show();
        $(".selectMustCourse").hide();
         $(".studyMap").hide();
         $(".recommendCourse").hide();

	});
	$(".courseType2").click(function(){
		$(".courseType2").addClass('selectColor');
		$(".courseType1").removeClass('selectColor');
		$(".courseType3").removeClass('selectColor');
		$(".courseType4").removeClass('selectColor');
	});

	//点击课程详情里的某个课程，跳转到对应的课程播放页面
	$(".studyDetailInfo").click(function(){
		// alert("aaa");
		window.location.href="playCourse.html";

		
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
		window.location.href="myCourse.html";
		
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






//点击课程时，出现背景色
$(function(){
	$(".studyDetailInfo").on("touchstart",touchStart);
	$(".studyDetailInfo").on("touchend",touchEnd);
	$(".mustStudyDetailInfo").on("touchstart",touchStart);
	$(".mustStudyDetailInfo").on("touchend",touchEnd);
	$(".studyDetailInfoType").on("touchstart",touchStart);
	$(".studyDetailInfoType").on("touchend",touchEnd);

	function touchStart(event){
		$(this).addClass("clickColor");
		// console.log('11');
	}
	function touchEnd(event){
		$(this).removeClass('clickColor');
		// console.log('22');
	}

})

