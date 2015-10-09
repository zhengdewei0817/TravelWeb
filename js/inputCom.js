(function($){
	
	$.fn.extend({
		inputSS:function(opts){
			var testthis = this;
			console.log(this)
			$(testthis).on("focus",function(){
				console.log($(testthis).val())
				if($(testthis).val()=="目的地/景点/特产"){
					$(testthis).val("")
				}
			})
			$(testthis).on("input",function(){
				if($(testthis).val()!=""){
					jiazai();
				}else{
						$(lisprite).html("");
				}
			})
			
			
			var lisprite = document.createElement("div");
			lisprite.setAttribute("id","inputlist");
			$(lisprite).css({"position":"absolute","top":"-1000px"});
			
			var inputY = $(testthis).get(0).getBoundingClientRect().bottom+document.body.scrollTop;
			var inputX = $(testthis).get(0).getBoundingClientRect().left+document.body.scrollLeft;
			var wid =  $(testthis).get(0).getBoundingClientRect().width;
			var hei = $(testthis).get(0).getBoundingClientRect().height;
			
			$("body").append(lisprite);
			
			console.log($(testthis).get(0).getBoundingClientRect())
			
			
			

			
			
			function jiazai(){
				console.log($(testthis).val());
				
				var xhr

				if(window.XMLHttpRequest){
					xhr = new XMLHttpRequest()
				}else{
					xhr = new ActiveXObject("Microsoft.XMLHTTP");
				}
				xhr.open("POST", "http://www.ljkdream.com/travel/search.json", true);
				
				xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				var sendinfi = "key=" + encodeURI(encodeURI($(testthis).val()))
				xhr.send(sendinfi);
				
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4 && xhr.status == 200) {
						createLi(eval("("+xhr.responseText+")").attachment)
					}
				}
				
			}
			
			
			function createLi(_arr){
				
				$(lisprite).html("");
				$(lisprite).css({"top":inputY+5,"left":inputX})
				console.log(_arr)
				for(var i = 0;i<_arr.length;i++){
					var li = document.createElement("li");
					$(li).css({
						"list-style": "none",
						"display": "block",
						"width": wid + "px",
						"height": hei + "px",
						"background-color":"rgba(255,255,255,0.8)",
						"padding-left":"10px",
						"padding-top":"5px",
						"border":"0.5px solid rgb(255,255,255,1)",
					})
					var aa = document.createElement("a")
					li.appendChild(aa);
					$(aa).attr({
						"href":"#"
					})
					$(aa).css({
						"text-decoration":"none",
						"color":"#000000"
					})
					lisprite.appendChild(li);
					aa.innerHTML = _arr[i];
					aa.ida = i
					$(aa).on("click",function(e){
						$(lisprite).html("");
						
						console.log(e)
						jiancecity(e.currentTarget.innerHTML)
					})
					
					
				}
			}
			
			
			
			function  jiancecity(name,ida){
				var xhr2

				if(window.XMLHttpRequest){
					xhr2 = new XMLHttpRequest()
				}else{
					xhr2 = new ActiveXObject("Microsoft.XMLHTTP");
				}
				xhr2.open("POST", "http://www.ljkdream.com/travel/searchLocation.json", true);
				
				xhr2.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				var sendinfi = "key=" + encodeURI(encodeURI(name))
				xhr2.send(sendinfi);
				
				xhr2.onreadystatechange = function() {
					if (xhr2.readyState == 4 && xhr2.status == 200) {
						gotoPagecity(eval("("+xhr2.responseText+")").attachment,name)
					}
				}
			}
			
			
			function gotoPagecity(_arr,name){
				if(_arr.length>1){
					//城市
					
					var num = -1;
					for(var i = 0;i<_arr.length;i++){
						if(name === _arr[i].sname){
							num = i
						}
					}
					
					if(num==-1){
						alert("对不起，暂时不支持搜索城市功能");
						num = 1;
					}
					
					window.location.href = ("/TravelWeb/xingzhengindex.html?"+_arr[num].sid)
					console.log(_arr)
				}else if(_arr.length==1){
					//景点
					console.log(_arr)
					window.location.href = ("/TravelWeb/jingdian.html?"+_arr[0].sid)	
				}
			}
			
			
			
			
			
			
			
			
			return this;
			
			
		}
	})
	
})(jQuery)
