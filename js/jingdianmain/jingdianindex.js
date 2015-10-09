$(function(){
	//这里是景点详细介绍
	
	var getpiclist = new getJson();
	getpiclist.init();
	var picmuli = "";

	var add = location.href.split("?")[1]

	var getjson;
	getpiclist.Open("GET", "http://www.ljkdream.com/travel/getLocationBySId.json?sid="+add, true);

	getpiclist.xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var obj = this.responseText;
 
			getjson = (eval("(" + obj + ")"));
			console.log(getjson)
			createPiczhuan(getjson);
			createJingdianTxt(getjson)
			setjiangeline()
		}
	}
	
	//创建图片轮转插件
	function createPiczhuan(jsonobj) {
		//console.log(jsonobj)
		var arr = new Array(); //这个是存放图片信息的数组
		var arr2 = new Array(); //这个是存放图片打开网址的信息
		var picsarr = jsonobj.attachment.pics.split(";");
		console.log(picsarr)
		
		for (var i = 0; i <picsarr.length; i++) {
			var picurl = picsarr[i] ;
			arr.push(picurl);
//			var picopenuir = jsonobj.attachment[i].url;
//			arr2.push(picopenuir);
		}
		$("#jingdianpic").zdw_initPic({
			picurl: arr,
			openurl: null,
			isClickPic: false,
		});
	}
	
	
	//创建景点信息
	function createJingdianTxt(jsonobj){
		var id = 0
		var name = jsonobj.attachment.sname;
		var level = jsonobj.attachment.level;
		var jieshao = jsonobj.attachment.absDesc;
		$("#jingdianname").html("<b>"+name+"</b>"+"<span><font color='#fc9e00' size='3'>"+"&nbsp&nbsp&nbsp"+level+"</font></span>");
		$("#jingdianjieshao").html(jieshao);
		
		var menpiao = jsonobj.attachment.avgCost.replace(/[\r\n]/g, "");
		console.log(menpiao=="")
		if(menpiao==""||menpiao==" "){
			menpiao = "暂无数据"
		}
		$("#menpiao").text("门票："+menpiao)
		
		var tel = jsonobj.attachment.phone.replace(/[\r\n]/g, "");
		if(tel==""||tel==" "){
			tel = "暂无信息"
		}
		$("#dianhua").text("电话："+tel)
		
		var xiangxi = jsonobj.attachment.impression;
		$("#jingdianxiangxi").text(xiangxi)
		
	}
	
	function setjiangeline(){
		$("#jiangexian").css("height",$("#leftmain").css("height"))
	}
	
	
	
})
