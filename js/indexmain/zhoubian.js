//这里是周边景区逻辑
//同样是获取JSON数据
//后期需要添加地理坐标获取

var zubiaogetjson;
var zuobiaogetobj;

	zubiaogetjson = new getJson();
	zubiaogetjson.init();

	zubiaogetjson.Open("GET","http://www.ljkdream.com/travel/getTravelDate.json",true);
	
	zubiaogetjson.xmlhttp.onreadystatechange = function(){
		if(this.status == 200&& this.readyState == 4){
			var test = this.responseText;
			zuobiaogetobj = eval("("+test+")");
			zuobiaopicinit();
		}
	}


zuobiaopicinit = function(){
//	if(zuobiaogetobj.attachment.length<9){
//		throw "服务器发送的数据缺失";
//		return;
//	}
	
	createDomzuobiao(0,300,241);
	createDomzuobiao(1,177,92);
	createDomzuobiao(2,177,92);
	createDomzuobiao(3,177,92);
	createDomzuobiao(4,177,92);
	createDomzuobiao(5,177,92);
	createDomzuobiao(6,177,92);
	createDomzuobiao(7,177,92);
	createDomzuobiao(8,177,92);

}


/**
   * 这里是首页创建hot的DOM
   */
createDomzuobiao = function(classnameid,wid,height){
	var hotpic = document.getElementsByClassName("zhoubianpic"+(classnameid+1))[0];
	var img1 = hotpic.getElementsByTagName("img")[0];
	img1.src = zuobiaogetobj.attachment[classnameid].pic;
	
	img1.onload = function(){
		var bili = this.width/this.height
		if(this.width*height/wid>=this.height){
			//证明高度小，则以高度为准
			this.height = height;
			this.width = bili*height;
		}else{
			this.width = wid;
			this.height = wid/bili;
		}
	}
	
	
	var imgdiv = hotpic.getElementsByTagName("div")[0];
	if(classnameid==0){
		imgdiv.className = "zhoubianpic1div1"
	}else{
		imgdiv.className = "zhoubianpicdiv1"
	}
	
	var infotxt = hotpic.getElementsByTagName("div")[1];
	infotxt.className ="zhoubianinfotxt";
	

	var shownum = Math.ceil(wid/11)

	var description = zuobiaogetobj.attachment[classnameid].absDesc.replace(/[\r\n]/g, "");
	if (description.length >= shownum) {
		description = description.substr(0, shownum) + "......"
	}
	infotxt.innerHTML =description;
	
	
	var nametxt = hotpic.getElementsByTagName("div")[2];
	nametxt.className ="zhoubianname";
	
	var nametxttexr = zuobiaogetobj.attachment[classnameid].sname.replace(/[\r\n]/g, "");
	nametxt.innerHTML = nametxttexr
	var paddleft = wid-nametxttexr.length*15 - 15
	nametxt.style.paddingLeft = paddleft+"px"
	
	hotpic.addEventListener("click",function(){
		//alert( getobj.attachment[classnameid].sid)
		window.open("/TravelWeb/jingdian.html?"+zuobiaogetobj.attachment[classnameid].sid)		
	})
	
	
	
	
}
