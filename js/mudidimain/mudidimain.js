$(function() {
	//这里是目的地页面的js代码
	//这里主要用Jquery来进行操作

	var getjson
		//现实12个图片
	var showpicnum = 12;
	var picw = 152;
	var pich = 90;
	var shownum = 12;

	$.ajax({
		type: "get",
		url: "http://www.ljkdream.com/travel/getDangJiLvYou.json",
		async: true,
		success: function(data, textStatus) {
			getJson(data, textStatus)
		}
	});

	function getJson(data, textStatus) {
		if (textStatus == "success") {
			getjson = eval("(" + data + ")");
			createDom();
		}
	}


	//根据获取的图片信息动态创建DOM
	function createDom() {
			//此处需要数据有12条
		for (var i = 0; i < 12; i++) {
			if (i < 6) {
				createOneDom($(".picdiv")[0], getjson.attachment[i]);
			} else {
				createOneDom($(".picdiv")[1], getjson.attachment[i]);
			}
		}
		


	}


	
	


	//创建单个Dom
	function createOneDom(divinfo, obj) {
		
		var divdiyige = document.createElement("div");
		divinfo.appendChild(divdiyige);
		$(divdiyige).attr("class", "divdiyige");

		var divdier = document.createElement("div");
		divdiyige.appendChild(divdier);
		$(divdier).attr("class", "divdier");
		//	console.log(divdier.offsetTop)

		var img = document.createElement("img");
		divdier.appendChild(img)
		img.src = obj.pic 

		img.onload = function() {
			var bili = this.width / this.height
			if (this.width * 90 / 152 >= this.height) {
				//证明高度小，则以高度为准
				this.height = 90;
				this.width = bili * 90;
			} else {
				this.width = 152;
				this.height = 152 / bili;
			}
		}
		
		
		




		var divdier_div = document.createElement("div");
		divdier.appendChild(divdier_div);
		$(divdier_div).attr("class", "divdier_div");
		var divdier_div_txt = document.createElement("div");
		divdier_div.appendChild(divdier_div_txt)
		
		$(divdier_div_txt).attr("class","divdier_div_txt")
		$(divdier_div_txt).text("点击进入")

		


		$(divdier).on("mouseover", function(_e) {

			var e = _e ? _e : window.event;

			var MX = e.pageX;
			var MY = e.pageY;
			var divY = divdier.offsetTop
			var divX = divdier.offsetLeft;
			var L = MX - divX;
			var R = divX + picw - MX;
			var T = MY - divY;
			var B = divY + pich - MY;
			var left = 0;
			var top = 0;

			if (L <= R && L <= T && L <= B) {
				//console.log("zuo");
				left = "-100%";
			}
			if (R <= L && R <= T && R <= B) {
			//	console.log("you")
				left = "100%";
			}
			if (T <= L && T <= R && T <= B) {
				//console.log("shang");
				top = "-100%";
			}
			if (B <= L && B <= R && B <= T) {
				//console.log("xia")
				top = "100%";
			}
			if($(divdier_div).css("top")!="0px"||$(divdier_div).css("left")!="0px"){
				if (!$(divdier_div).is(":animated")) {
							$(divdier_div).css({
								"left": left,
								"top": top
							}).stop(true, true).animate({
								left: 0,
								top: 0
							}, 200,"linear");
						}
			}
						


//			if ($(divdier_div).hasClass("divdier_div_animate")) {
//				$(divdier_div).removeClass("divdier_div_animate")
//			}
//			$(divdier_div).css({
//				"left": left,
//				"top": top
//			})
//
//			$(divdier_div).addClass("divdier_div_animate")
//			$(divdier_div).css({
//				"left": 0,
//				"top": 0
//			})

	})
		$(divdier).on("mouseleave", function(_e) {
			//	var weizhi = "translate(-90px,-90px)";
			//$(divdier_div).css({"transform":weizhi,"-ms-transform":weizhi,"-moz-transform":weizhi,"-webkit-transform":weizhi,"-o-transform":weizhi})
			var e = _e ? _e : window.event;

			var MX = e.pageX;
			var MY = e.pageY;
			var divY = divdier.offsetTop
			var divX = divdier.offsetLeft;
			var L = divX - MX;
			var R = MX - (divX + picw);
			var T = divY - MY;
			var B = MY - (divY + pich);
			var left = 0;
			var top = 0;
			//	console.log(L,R,T,B)
			if (L >= 0 && L <= Math.abs(R) && L <= Math.abs(T) && L <= Math.abs(B)) {
				//console.log("zuo111");
				left = "-100%";
			} else
			if (R >= 0 && R <= Math.abs(L) && R <= Math.abs(T) && R <= Math.abs(B)) {
				//	console.log("you111")
				left = "100%";
			} else
			if (T >= 0 && T <= Math.abs(L) && T <= Math.abs(R) && T <= Math.abs(B)) {
				//	console.log("shang111");
				top = "-100%";
			} else
			if (B >= 0 && B <= Math.abs(L) && B <= Math.abs(R) && B <= Math.abs(T)) {
				//	console.log("xia111")
				top = "100%";
			} else {
				top = "100%";
				left = "100%";
				//此处有点Bug  所有有时间继续修改
			}
//						if (!$(divdier_div).is(":animated")) {
//							$(divdier_div).stop(true, true).animate({
//								left: left,
//								top: top
//							}, 300);
//						}
					$(divdier_div).animate({
								left: left,
								top: top
							}, 200,"linear");
//			$(divdier_div).addClass("divdier_div_animate")
//
//			$(divdier_div).css({
//				"left": left,
//				"top": top
//			})

		})



		var txtinfo = document.createElement("div");
		divdiyige.appendChild(txtinfo);
		$(txtinfo).attr("class","textinfo");
		var strtxt = obj.absDesc.replace(/[\r\n]/g, "");
		if (strtxt.length >= shownum) {
			strtxt = strtxt.substr(0, shownum) + "......"
		}
		$(txtinfo).text(strtxt);
		
		var txtname = document.createElement("div");
		divdiyige.appendChild(txtname);
		$(txtname).attr("class","txtname");
		$(txtname).text(obj.sname);
		var paddleft = 152-obj.sname.length*15 - 15
		$(txtname).css("paddingLeft" , paddleft+"px");
//		console.log(obj)

		divdiyige.addEventListener("click",function(){
			window.open("/TravelWeb/jingdian.html?"+obj.sid)		
		})



	}





})