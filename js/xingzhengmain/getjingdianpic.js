$(function(){
	//这里是获得景点详细信息列表
	
	var getajax = new getJson();
	getajax.init();
	
	var jsonobj;
	var imgurlconst = "./img/"
	var curpage = 1;
	var totnum = 0;
	var totpagenum = 0;
	var add = location.href.split("?")[1]
	//getajax.Open("GET","./getDataForXingzheng.json",true);
	var getjson;
	getajax.Open("GET", "http://www.ljkdream.com/travel/getLocationBySId.json?sid="+add, true);
	
	
	
	
	getajax.xmlhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			jsonobj = eval("("+this.responseText+")");
			console.log(jsonobj);
			/**这里是我在9月6日屏蔽的
			totnum = jsonobj.totnum;
			totpagenum = Math.ceil(totnum/18);
			console.log(totnum/18,totpagenum)
			createPicList(1,18)
			**/
		}
	}
	
	
	
	//创建图片列表
	//如果图片个数为18个以上，则现实多个页面，如果为18页以下，则只显示一个页面
	//开始数组位置，结束数组位置  从0开始
	function createPicList(statrnum,endnum){
		var shownum = endnum - statrnum;//现实图片个数
		for(var i = statrnum;i<=endnum;i++){
			createOnePicList(jsonobj.attachment[i-1]);
		}
		createListMean();
		
	}
	
	
	//创建单个图片
	function createOnePicList(obj){
		var div = document.createElement("div");
		$("#listpic").append(div);
		$(div).attr("class","listdiyigediv");
		
		//创建图片
		var  divimg = document.createElement("div");
		$(div).append(divimg);
		$(divimg).attr("class","listdiyidiv_div")
		
		var img = document.createElement("img");
		img.src = imgurlconst+obj.picture+".jpg"
		$(divimg).append(img)
		//这里的容器宽高为236px 128px;
		img.onload = function(){
			var bill = this.width/this.height;
			
			if(bill>=(236/128)){//则证明宽比较长，应该以高作为参照
				this.height = 128;
			}else{
				this.width = 236;
			}
			
			var  title = document.createElement("div");
		  	$(divimg).append(title);
		  	title.innerHTML = "<b>"+obj.id+"</b>";
		  	
		}
		//创建文本
		
		var  divwenzi = document.createElement("div")
		$(div).append(divwenzi);
		$(divwenzi).attr("class","divwenzi")
		
		var titname = document.createElement("div");
		$(divwenzi).append(titname);
		$(titname).text(obj.name);
		$(titname).attr("class","listdiyidiv_name");
		
		var txtneirong = document.createElement("div");
		$(divwenzi).append(txtneirong);
		$(txtneirong).attr("class","listdiyidiv_neirong");
		var strtxt = obj.abstractDes.replace(/[\r\n]/g, "");
		if(strtxt.length>=30){
			strtxt = strtxt.substr(0,30)+"......"
		}
		txtneirong.innerText = strtxt;
	}
	
	
	
	//创建选择菜单
	/**
	 * 生成菜单首先要确定，当前选择的是多少页
	 * 根据当前选择页 生成是否要现实接下来的页面逻辑
	 */
	
	function createListMean(){
		var p = new zdw_createmean($("#listmean")[0],curpage,totpagenum);
		p.createDom();
	}
	


	window.gotoPage = function(txt){
		console.log("这里应该执行加载页面功能"+txt)
		
		
	}
	window.gotoPage(1)


	
})