(function() {
	var canvas, stage, exportRoot;

	var  getjsonData;
	
	
	var ajaxgetdis;
	//这里是记录每个省市tip坐标
	var pos = [
	[800,200],[500,250],[430,100],[350,200],[800,200],
	[700,250],[800,250],[500,200],[600,180],[700,250],
	[800,200],[800,100],[600,150],[400,150],[400,200],
	[800,200],[450,200],[800,250],[800,230],[600,250],
	[350,200],[300,100],[420,200],[390,100],[350,200],
	[800,130],[700,150],[450,200],[700,200],[400,100],
	[630,250],[500,200],[400,200],[600,150]
	]
	
	
	var picdis = "http://localhost/mywebmap/images/smalpic/"; 
	//新建一个对象池  用来放置图片
	var picSprite = new Array();
	
	//文字大小
	var  fontsize = 12;

	
	
	
	if(window.XMLHttpRequest){
		ajaxgetdis = new XMLHttpRequest();
	}else{
		ajaxgetdis = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	ajaxgetdis.open("GET","http://localhost/mywebmap/dis.json",true);
	ajaxgetdis.send(null);
	
	
	ajaxgetdis.onreadystatechange = function(){
		if(ajaxgetdis.readyState == 4&& ajaxgetdis.status == 200){
			getjsonData = eval("("+ajaxgetdis.responseText+")");
			

			LoadPic(getjsonData);
		//	showAjax();
			
		}
	}
	
	function showAjax(){
	//	console.log(getjsonData)
	//	getshengInfo(1);
	}
	
	
	
	
	
	//鼠标经过，获取当前省份的信息
	function getshengInfo(id){
		var obj;
		obj = getjsonData.record[id];
		return obj;
	}
	
	
	

	init();

	function init() {
		canvas = document.getElementById("canvas");
		images = images || {};

		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleComplete);
		loader.loadManifest(lib.properties.manifest);
	}

	function handleFileLoad(evt) {
		if (evt.item.type == "image") {
			images[evt.item.id] = evt.result;
		}
	}

	function handleComplete() {
		exportRoot = new lib.mywebmap();

		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.enableMouseOver(10)
		//createjs.Touch.disable(stage)
 		createjs.Touch.enable(stage);

		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", EnterFrame);

		exportRoot.instance.visible = false;

		

		for (var i = 0; i <= 33; i++) {
			var clickFn = function(t) {
				exportRoot.instance_9.map_mc["map" + t].addEventListener("click", function() {
					//console.log("aaaa" + t);
					//	alert("aaaaaa")
					var temp = getshengInfo(t);
					drawPicAndList(temp);
					
					//删除图片
					exportRoot.instance.instance.picSp.removeChildAt(0)
					exportRoot.instance.instance.picSp.addChild(picSprite[t]);
					
					//确定UI
					exportRoot.instance.visible = true;
					createjs.Tween.get(exportRoot.instance).to({
						x: pos[temp.id][0],
						y: pos[temp.id][1]
					}, 400);

				})

				exportRoot.instance_9.map_mc["map" + t].addEventListener("mousedown", function() {
					//alert("bbbbbb")
				})
				
				exportRoot.instance_9.map_mc["map" + t].addEventListener("mouseout", function() {
				//	exportRoot.instance.visible = false;
				})
				
			}
			clickFn(i);
		}
		
		
		for(var j = 0;j<12;j++){
			function tt(id){
			//	console.log(id)
				exportRoot.instance["txt"+id].addEventListener("mouseover",function(){
					exportRoot.instance["txt"+id].color = "#ff0000"
				})
				exportRoot.instance["txt"+id].addEventListener("mouseout",function(){
					exportRoot.instance["txt"+id].color = "#333333"
				})
				exportRoot.instance["txt"+id].addEventListener("click",function(e){
					console.log(exportRoot.instance["txt"+id])
				})
			}
			tt(j+1);
			
			//console.log(exportRoot.instance["txt"+1]+"-------")
			
			
		}
		
		
		
		
		
		

	}

	function EnterFrame() {
		stage.update();

	}

	function drawPicAndList(obj){
		exportRoot.instance.tipname.text = obj.name;
		exportRoot.instance.text.text = obj.url;
		var textX = 80;
		var textY = 45;
		for(var i = 1;i<13;i++){
			exportRoot.instance["txt"+i].text = "";
			exportRoot.instance["txt"+i].x = 0;
			exportRoot.instance["txt"+i].y = 0;
		}
		for(var j = 0;j<obj.place.length;j++){
			var showtxt = obj.place[j].name;
			if(textX+(showtxt.length*fontsize)+10>320){
				textX = 80;
				textY = fontsize+10+textY;
			}
			exportRoot.instance["txt"+(j+1)].text = showtxt;
			exportRoot.instance["txt"+(j+1)].x = textX;
			exportRoot.instance["txt"+(j+1)].y = textY;
		//	console.log(exportRoot.instance["txt"+(j+1)]);
			textX = (showtxt.length*fontsize)+10+textX;
			
			
			
			
			
			
			
		//	console.log(textX)
		}
	}


	//加载图片
	function LoadPic(_obj){
		//console.log(_obj.record);
		for(var i = 0;i<_obj.record.length;i++){
			var bitmap = new createjs.Bitmap(picdis+_obj.record[i].url+".jpg");
			bitmap.scaleX = bitmap.scaleY = 1.2;
			//var imgshape = new createjs.Shape(bitmap);
			picSprite.push(bitmap);
		}
		
	}
	

	








})()