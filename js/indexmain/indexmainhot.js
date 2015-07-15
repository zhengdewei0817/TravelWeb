//这里是关于热门推荐的js代码逻辑

//首先  需要后台请求JSON数据，然后判断个数，获取前5个进行展示

var gethot;
var getobj;
//window.onload = function(){
	gethot = new getJson();
	gethot.init();
	gethot.Open("GET","./getData.json",true);
	gethot.xmlhttp.onreadystatechange = function(){
		if(this.status == 200&& this.readyState == 4){
			var test = this.responseText;
			getobj = eval("("+test+")");
			hotpicinit()
		}
	}
//}

hotpicinit = function(){
	if(getobj.attachment.length<5){
		throw "服务器发送的数据缺失";
		return;
	}
	createDomhot(0,300,241);
	createDomhot(1,177,92);
	createDomhot(2,177,92);
	createDomhot(3,177,92);
	createDomhot(4,177,92);

}



/**
 * 这里是首页创建hot的DOM
 */
createDomhot = function(classnameid,wid,height){
	var hotpic = document.getElementsByClassName("hotpic"+(classnameid+1))[0];
	var img1 = hotpic.getElementsByTagName("img")[0];
	img1.src = "img/"+getobj.attachment[classnameid].picture+".jpg";
	
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
		imgdiv.className = "hotpic1div1"
	}else{
		imgdiv.className = "hotpicdiv1"
	}
	
	var infotxt = hotpic.getElementsByTagName("div")[1];
	infotxt.className ="infotxt";
	

	var shownum = Math.ceil(wid/11)

	var description = getobj.attachment[classnameid].abstractDes.replace(/[\r\n]/g, "");
	if (description.length >= shownum) {
		description = description.substr(0, shownum) + "......"
	}
	infotxt.innerHTML =description;
	
	
	var nametxt = hotpic.getElementsByTagName("div")[2];
	nametxt.className ="hotname";
	
	var nametxttexr = getobj.attachment[classnameid].name.replace(/[\r\n]/g, "");
	nametxt.innerHTML = nametxttexr
	var paddleft = wid-nametxttexr.length*15 - 15
	nametxt.style.paddingLeft = paddleft+"px"
}




