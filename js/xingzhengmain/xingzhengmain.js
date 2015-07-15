$(function() {

	//读取Ajax请求 
	var getajax = new getJson();
	getajax.init();
	getajax.Open("GET", "./getData.json", true);

	var getjson;

	getajax.xmlhttp.onreadystatechange = function() {
		if (this.status == 200 && this.readyState == 4) {
			getjson = eval("(" + this.responseText + ")");
			createPiczhuan(getjson);
			createXingzhengInfo(getjson);
		}
	}

	//创建图片轮转插件
	function createPiczhuan(jsonobj) {
		//console.log(jsonobj)
		var arr = new Array(); //这个是存放图片信息的数组
		var arr2 = new Array(); //这个是存放图片打开网址的信息
		for (var i = 0; i <jsonobj.attachment.length; i++) {
			var picurl = "img/" + jsonobj.attachment[i].picture + ".jpg";
			arr.push(picurl);
			var picopenuir = jsonobj.attachment[i].url;
			arr2.push(picopenuir);
		}
		$("#xingzhengpic").zdw_initPic({
			picurl: arr,
			openurl: arr2,
			isClickPic: false,
		});
	}


	//创建右侧行政信息
	function createXingzhengInfo(jsonobj){
		//console.log(jsonobj)
		var name = jsonobj.name;
		$("#xingzhengname").text("关于"+name);
		var jieshao = jsonobj.description;
		jieshao = jieshao.replace(/[\r\n]/g, "");
		if(jieshao.length>=60){
			jieshao = jieshao.substr(0,60)+"......";
		}
		$("#xingzhengjieshao").html("<b>我的印象：</b>"+jieshao);
		var youwanjijie = jsonobj.youwanjijie.replace(/[\r\n]/g, "");
		if(youwanjijie.length>=10){
			youwanjijie = youwanjijie.substr(0,10)+"......";
		}
		$("#xingzhengshijian").html("<b>最佳季节：</b>"+youwanjijie)
		
		var jianyiyouwan = jsonobj.jianyiyouwan.replace(/[\r\n]/g, "");
		if(jianyiyouwan.lenght>=10){
			jianyiyouwan = jianyiyouwan.substr(0,10)+"......";
		}
		$("#xingzhengplaytime").html("<b>建议游玩：</b>"+jianyiyouwan)
		
		
	}


})